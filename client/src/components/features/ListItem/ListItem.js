import React from 'react';
import './ListItem.scss';
import { MdClose, MdCheck } from 'react-icons/md';
import Checkmark from '../../common/Checkmark/Checkmark';


class ListItem extends React.Component {

    state = {
        updatedItm: {
            id: this.props.listitem.id,
            content: this.props.listitem.content,
            status: this.props.listitem.status
        }
    }

    handleRemoveItemFromList = async () => {
        await this.props.removeItemFromListInComponent(this.props.listitem.id);
        this.props.loadListInComponent();
    }

    handleChangeItemFromList = async (event) => {
        await this.setState( { updatedItm: { ...this.state.updatedItm, content: event.target.value } } )
    }

    handleSubmitChangedItemIntoList = async () => {
        await this.props.changeItemFromList(this.state.updatedItm);
        this.props.loadListInComponent();
    }

    handleToggleItemStatusInList = async () => {
        await this.setState( { updatedItm: { ...this.state.updatedItm, status: this.state.updatedItm.status === 'doing' ? 'done' : 'doing' } } )
        await this.props.changeItemFromList(this.state.updatedItm);
        this.props.loadListInComponent();
    }

    render() {
        return (
            <form className='list-item'>
                <div className='list-item__checkbox'>
                    <div className='list-item__checkbox__blank'></div>
                </div>
                {this.state.updatedItm.status === 'done' ? <Checkmark /> : null}
                <div className='list-item__checkbox__cover' onClick={this.handleToggleItemStatusInList}></div>
                <input
                    type='text'
                    className={`${this.props.listitem.status} list-item__input`}
                    value={this.state.updatedItm.content || this.props.listitem.content}
                    onChange={this.handleChangeItemFromList}
                    onBlur={this.state.updatedItm.content !== this.props.listitem.content ? this.handleSubmitChangedItemIntoList : null}
                />
                <button className='list-item__button' aria-label='Approve' onClick={this.state.updatedItm.content !== this.props.listitem.content ? this.handleSubmitChangedItemIntoList : null}><MdCheck /></button>
                <button className='list-item__button' aria-label='Remove' onClick={this.handleRemoveItemFromList}><MdClose /></button>
            </form>
        )
    }
}

export default ListItem;