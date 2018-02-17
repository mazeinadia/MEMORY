import React from 'react';
import {Text} from "../../text/text.jsx";
import {Button} from "../../button/button.jsx";
import {TextStart} from "../../text/text__start/text__start.jsx";
import {Image} from "../../card/card.jsx";

export class ContentStart extends React.Component {
    render() {
        return (
            <div className = "content  content__start" key = "div0">
                <img className = "image__start" src = "assets/StartGame.png" alt = "Добро пожаловать!"/>
                <Text>
                    <TextStart/>
                </Text>
                <Button value = "Начать игру"/>
            </div>
        )
    }
}