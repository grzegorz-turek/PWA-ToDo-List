import React from 'react';
import ListBox from '../ListBox/ListBox';
import Spinner from '../../common/Spinner/Spinner';
import './List.scss';

class List extends React.Component {
    /*
    constructor() {
        super();
        this.state = {
            list: []
        }
    }
    */
    /*
    componentDidMount() {
        fetch('http://localhost:8000/api/list')
            .then(res => res.json())
            .then(res => {
                this.setState({ list: res});
                console.log('res: ', res);// DEL --------------------------------------------------
            })
            .catch(err => {
                console.log('We\'ve got fetch error men')
            })
    }
    */

    componentDidMount() {
        this.props.loadListInComponent()
    }

    render() {
        let listView;

        if (this.props.request.pending || this.props.request.success === null) {
            listView = <Spinner />
        }

        if ( (!this.props.request.pending || this.props.request.success ) && this.props.list.length > 0) {
            listView = <ListBox list={this.props.list} />
        }

        if ( (!this.props.request.pending || this.props.request.success ) && this.props.list.length === 0) {
            listView = 'No items in the list'
        }

        if(!this.props.request.pending && this.props.request.error) {
            listView = this.props.request.error
        }

        return (
            <div className='list'>
                {listView}
            </div>
        )
    }
};

export default List;