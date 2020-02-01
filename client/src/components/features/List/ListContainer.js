import { connect } from 'react-redux';
import { getList, loadListThunkRequest, getRequest } from '../../../redux/listRedux';
import List from './List';

const mapStateToProps = state => ({
    list: getList(state),
    request: getRequest(state)
})

const mapDispatchToProps = dispatch => ({
    loadListInComponent: () => dispatch(loadListThunkRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);