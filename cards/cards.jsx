import React from "react";

export class Cards extends React.Component{
    render() {
        return (
            <div className="cards">
                {this.props.children}
            </div>
        );
    }
}
