import {
    OPEN_CARD,
    CLOSE_CARD,
    END_GAME,
    LOAD_START_PAGE,
    SHOW_CARDS,
    HIDE_CARDS
} from "./actions";
import initiateStartPageState from '../page/init-start-page-reducer.jsx';
import openCard from '../cards/card/open-card-reducer.jsx';
import closeOrDeleteCard from '../cards/card/close-or-delete-card-reducer.jsx';
import isGameEnded from '../page/init-end-page-reducer.jsx';
import showCards from '../cards/show-cards-reducer.jsx';
import hideCards from '../cards/hide-cards-reducer.jsx';

const InitialState = {};

export default function memoryApp(state = InitialState, action){
    switch (action.type) {
        case LOAD_START_PAGE: {
            return initiateStartPageState();
        }
        case END_GAME: {
            return isGameEnded(state);
        }
        case OPEN_CARD: {
            return openCard(state, action);
        }
        case CLOSE_CARD: {
            return closeOrDeleteCard(state, action);
        }
        case SHOW_CARDS: {
            return showCards(action);
        }
        case HIDE_CARDS: {
            return hideCards(state);
        }
        default: return state;
    }
}