import { connect } from 'react-redux';

import { Controls } from './Controls';
import { newGame } from '../../actions/game-actions';
import { showValidityBanner } from '../../actions/validity-banner-actions';
import { getStartingValues } from '../../helpers/game';

function mapStateToProps() {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        validate() {
            dispatch(showValidityBanner());
        },
        newGame(level) {
            const startingValues = getStartingValues(level);
            dispatch(newGame(startingValues));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
