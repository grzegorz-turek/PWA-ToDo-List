import { connect } from 'react-redux';
import { addItemToListThunkRequest, loadListThunkRequest, getRequest, getList } from '../../../redux/listRedux';
import List from './NavBar';

const mapStateToProps = state => ({
    list: getList(state),
    request: getRequest(state)
})

const mapDispatchToProps = dispatch => ({
    addItemToList: (data) => dispatch(addItemToListThunkRequest(data)),
    loadListInComponent: () => dispatch(loadListThunkRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);