import React from 'react';
import ReactDOM from 'react-dom'
import {loadField} from "../js/GamePage/loadField.jsx";

export class Button extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        ReactDOM.unmountComponentAtNode(document.getElementById("app"));
        loadField();
    }
    render(){
        return <input
            className = "button"
            type = "submit"
            name = "StartGame"
            value={this.props.value}
            onClick = {this.handleClick}
        />;
    }
}