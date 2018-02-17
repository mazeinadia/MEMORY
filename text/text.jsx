import React from 'react';

export class Text extends React.Component{
    render(){
        return <div className = "text" key = "div1">{this.props.children}</div>;
    }
}