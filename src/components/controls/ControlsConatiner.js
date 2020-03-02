import { connect } from 'react-redux';

import { Controls } from './Controls';
import { check, newGame } from '../../actions/game-actions';
import { getStartingValues } from '../../helpers/game';

function mapStateToProps() {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        check() {
            dispatch(check());
        },
        newGame(level) {
            const startingValues = getStartingValues(level);
            dispatch(newGame(startingValues));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
