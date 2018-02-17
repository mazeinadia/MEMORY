import React from 'react';
import ReactDOM from 'react-dom';
import {ContentEnd} from "../../content/content__end/content__end.jsx";

export function endGame(score) {
    ReactDOM.unmountComponentAtNode(document.getElementById("app"));
    ReactDOM.render(<ContentEnd score = {score}/>, document.getElementById('app'));
}