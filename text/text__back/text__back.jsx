import React from 'react';
import ReactDOM from "react-dom";
import {loadField} from "../../js/GamePage/loadField.jsx";


export class TextBack extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        ReactDOM.unmountComponentAtNode(document.getElementById("app"));
        loadField();
    }

    render(){
        return <a className="text_size_small text__back"
            data-tid="Menu-newGame"
            onClick = {this.handleClick}>Начать заново</a>;
    }
}