import React from 'react';
import {TextScore} from '../text__score/text__score.jsx';

export class TextEnd extends React.Component {
    render() {
        return (
            <div key = "div2">
                <p className="text_end-title">Поздравляем!</p>
                <p className="text_end-title">Ваш итоговый счет: {this.props.score}</p>
                <br/>
            </div>)
    }
}