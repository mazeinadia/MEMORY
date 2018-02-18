import {connect} from 'react-redux';
import Score from './score-component.jsx';

const mapStateToProps = (state) => {
    return {
        value: state.score
    };
};

const ScoreContainer = connect(
    mapStateToProps
) (Score);

export default ScoreContainer;