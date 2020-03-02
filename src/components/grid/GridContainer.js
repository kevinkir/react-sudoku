import { connect } from 'react-redux';

import { cellValue, isCellEditable } from '../../selectors/selectors';
import { updateCell } from '../../actions/grid-actions';
import { Grid } from './Grid';

function mapStateToProps(state) {
    return {
        cellValue(row, col) {
            return cellValue(state, row, col);
        },
        isCellEditable(row, col) {
            return isCellEditable(state, row, col);
        },
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateCell(row, col, value) {
            dispatch(updateCell(row, col, value));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
