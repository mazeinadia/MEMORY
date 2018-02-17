import React from "react";

export const TextScore = (props) => {
    return <span className = "text_size_small text__score">Очки: {props.value}</span>;

};

export function addToScore(currentValue, cardsPairRest){
    return currentValue + 42 * cardsPairRest;
}

export function subFromScore(currentValue, cardsPairRest){
    return currentValue - 42 * cardsPairRest;
}