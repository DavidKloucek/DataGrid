import React, {useState, useEffect, Fragment, useContext} from 'react';
import ReactDOM from "react-dom";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import {GridStateColumns} from "./Grid";

const reorder = (list: any, startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};

const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
    userSelect: "none",
    ...draggableStyle
});

const getListStyle = (isDraggingOver: boolean) => ({
    width: '100%'
});

const DraggableItem = ({setColumnVisible, deleteColumn, snapshot, provided, item}) => {
    const node = (
        <li
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={getItemStyle(
                snapshot.isDragging,
                provided.draggableProps.style
            )}
        >
            <div>
                <span className="column-settings-arrow" title="Posunout">
                    <i className="fa fa-sort" aria-hidden="true"/>
                </span>
                <input
                    id={'grid-col-order-'+item.key}
                    type="checkbox"
                    checked={item.visible}
                    onChange={e => setColumnVisible(item.key, e.target.checked)}
                />
                <label htmlFor={'grid-col-order-'+item.key}>{item.name}</label>
                {item.type === 'param' && (
                    <button
                        type="button"
                        onClick={() => deleteColumn(item.key)}
                        className="btn btn-xs btn-danger"
                    >×</button>
                )}
            </div>
        </li>
    )
    if (snapshot.isDragging) {
        //return ReactDOM.createPortal(node, document.querySelector('.column-settings-portal'));
    }
    return node;
}

const ItemList = ({list, setList, setColumnVisible, deleteColumn}) => {

    const onDragStart = () => {}
    const onDragEnd = result => {
        if (!result.destination) {
            return;
        }
        const items = reorder(
            list,
            result.source.index,
            result.destination.index
        );
        setList(items);
    }

    // @ts-ignore
    return (
        <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
            <Droppable droppableId="droppable">
                {(provided, snapshot) => (

                    <ul
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver)}
                        id="column-settings"
                    >
                        <TransitionGroup component={null}>
                            {list.map((item, index) => (
                                // @ts-ignore
                                <CSSTransition
                                    key={item.key}
                                    timeout={500}
                                    classNames="column-settings-item"
                                >
                                    <Draggable draggableId={item.key} index={index}>
                                        {(provided, snapshot) => (
                                            <DraggableItem
                                                provided={provided}
                                                snapshot={snapshot}
                                                item={item}
                                                setColumnVisible={setColumnVisible}
                                                deleteColumn={deleteColumn}
                                            />
                                        )}
                                    </Draggable>
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    );
}

type TProps = {
    onRequestAction: Function
    list: Array<GridStateColumns>
}

const GridColumnSettings = (props: any) => {

    /*const [state, dispatch] = useContext(StateReducer, {
        paramIds: [],
        columns: [],
    });*/

    const [list, setList] = useState(props.list);
    const [paramIds, setParamIds] = useState([]);

    useEffect(() => {
        setParamIds(list.filter(x => x.type === 'param').map(x => x.paramId));
    }, [list]);

    const addColumn = (item: any) => {
        /*setList((l: any) => [].concat({
            key: 'param_'+item.value,
            name: item.label,
            type: 'param',
            paramId: item.value,
            visible: true
        }).concat(l))*/
    }

    const setColumnVisible = (key: string, isChecked: boolean) => {
        setList(l => l.map(item => {
            if (item.key === key) {
                item.visible = isChecked;
            }
            return item;
        }));
    }

    const deleteColumn = key => {
        setList(l => l.filter(x => x.key !== key))
    }

    const save = () => {
        props.onRequestAction({
            action: 'ext.settings'
        })
    }

    console.log('onRequestAction', props.onRequestAction)

    return (
        <Fragment>
            <div className="row">
                <div className="col-md-6">
                    <label>Order and visibility of columns</label>
                    <ItemList
                        list={list}
                        setList={setList}
                        setColumnVisible={setColumnVisible}
                        deleteColumn={deleteColumn}
                    />
                    <button type="button" onClick={save}>Submit</button>
                </div>
                {/*useParams && (
                    <div className="col-md-6">
                        <GridColumnSettingsParams
                            onSelected={addColumn}
                            selectedKeys={paramIds}
                        />
                    </div>
                )*/}
            </div>
        </Fragment>
    )
}

export {
    GridColumnSettings
}
