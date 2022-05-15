import React, {useState} from "react";
import ReactDOM from "react-dom";
import {Grid} from "./Grid/Grid";

const initGrid = (sel, data) => {
    ReactDOM.render(
        <Grid
            grid={data}
        />,
        document.querySelector(sel)
    )
}

window.App = {
    initGrid
}
