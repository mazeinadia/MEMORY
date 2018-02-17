import React from 'react';
import {Text} from "../../text/text.jsx";
import {TextEnd} from "../../text/text__end/text__end.jsx";
import {Button} from "../../button/button.jsx";

export class ContentEnd extends React.Component {
    render() {
        return (
            <div className = "content  content__end" key = "div0">
                <img className = "image__end" src = "../../assets/Group 2.png" alt = "Конец игры"/>
                <Text>
                   <TextEnd score = {this.props.score}/>
                </Text>
                <Button value = "Еще раз"/>
            </div>
        )
    }
}