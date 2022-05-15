import React, {useState} from "react";

export const Collapsible = ({children, defaultIsOpen = null, isOpen = null, showTitle = 'Ukázat', hideTitle = 'Skrýt'}) => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisible = () => setIsVisible(v => !v);

    return <CollapsibleView {...{isVisible, toggleVisible, showTitle, hideTitle}}>{children}</CollapsibleView>
}

const CollapsibleView = ({isVisible, toggleVisible, children, showTitle, hideTitle}) => (
    <div>
        <button type="button" onClick={toggleVisible}>{isVisible ? hideTitle : showTitle}</button>
        {isVisible && (
            <div>{children}</div>
        )}
    </div>
)

export const Border = ({children}) => (
    <div style={{
        'padding': '9px',
        'margin': '9px 6px',
        'border': '2px solid rgba(0,0,0,.1)',
        'borderRadius': '3px'
    }}>
        {children}
    </div>
)

