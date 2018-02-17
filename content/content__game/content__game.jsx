import React from "react";
import {Card} from "../../card/card.jsx";
import {TextScore} from "../../text/text__score/text__score.jsx";
import {Cards} from "../../cards/cards.jsx";
import {Text} from "../../text/text.jsx";
import {TextBack} from "../../text/text__back/text__back.jsx";
import {cardsNumber} from "../../js/GamePage/variables";

export class ContentGame extends React.Component{
    constructor(props){
        super(props);
        this.state = {score: 0};
        this.updateScore = this.updateScore.bind(this);
    }

    updateScore(newValue){
        this.setState({score: newValue});
    }

    render(){
        let imgKeys = [];
        for (let keyCounter = 0; keyCounter < cardsNumber; keyCounter++){
            imgKeys[keyCounter] = "img" + keyCounter;
        }

        const images1row = imgKeys.slice(0, cardsNumber/3).map(keyValue =>{
            let divKey = "div-" + keyValue;
            return (<div className="cards__cell" key = {divKey}>
                <Card
                    keyValue = {keyValue}
                    onClick = {this.updateScore}/>
            </div>)
        });

        const images2row = imgKeys.slice(cardsNumber/3, 2*cardsNumber/3).map(keyValue =>{
            let divKey = "div-" + keyValue;
            return (<div className="cards__cell" key = {divKey}>
                <Card
                    keyValue = {keyValue}
                    onClick = {this.updateScore}/>
            </div>)
        });

        const images3row = imgKeys.slice(2*cardsNumber/3, cardsNumber).map(keyValue =>{
            let divKey = "div-" + keyValue;
            return (<div className="cards__cell" key = {divKey}>
                <Card
                    keyValue = {keyValue}
                    onClick = {this.updateScore}/>
            </div>)
        });

       return(
           <div className="content content__game" key = "div0">
               <Text>
                   <TextBack/>
                   <TextScore value={this.state.score}/>
               </Text>
               <Cards>
                   <div className="cards__row" key = "div-row1">{images1row}</div>
                   <div className="cards__row" key = "div-row2">{images2row}</div>
                   <div className="cards__row" key = "div-row3">{images3row}</div>
               </Cards>
           </div>
       );
    }
}
