import { connect } from 'react-redux';

function mapStateToProps(state) {
    console.log(state);
    return {};
}

function mapDispatchToProps(dispatch) {
    console.log(dispatch);
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps);
