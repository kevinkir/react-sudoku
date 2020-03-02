import { connect } from 'react-redux';

import { hideValidityBanner } from '../../actions/validity-banner-actions';
import { isValidSolution } from '../../helpers/game';
import { ValidityBanner } from './ValidityBanner';

function mapStateToProps(state) {
    return {
        isValid: isValidSolution(state.grid),
        isVisible: state.showValidityBanner,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        hide() {
            dispatch(hideValidityBanner());
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ValidityBanner);
