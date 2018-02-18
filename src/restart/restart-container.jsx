import {connect} from 'react-redux';
import Restart from './restart-component.jsx';
import {startGame} from "../app/actions";

const mapDispatchToProps = (dispatch) => {
    return {
        onRestartClick: () => {
            dispatch(startGame())
        }
    }
};

const RestartContainer = connect(
    undefined,
    mapDispatchToProps
) (Restart);

export default RestartContainer;