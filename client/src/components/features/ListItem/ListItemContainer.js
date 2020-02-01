import { connect } from 'react-redux';
import { getList, removeItemFromListThunkRequest, loadListThunkRequest, changeItemFromListThunkRequest } from '../../../redux/listRedux';
import ListItem from './ListItem';


const mapStateToProps = state => ({
    list: getList(state),
    //request: getRequest(state)
})


const mapDispatchToProps = dispatch => ({
    removeItemFromListInComponent: (removeId) => dispatch(removeItemFromListThunkRequest(removeId)),
    loadListInComponent: () => dispatch(loadListThunkRequest()),
    changeItemFromList: (updatedItem) => dispatch(changeItemFromListThunkRequest(updatedItem))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);