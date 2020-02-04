import React from 'react';
import './NavBar.scss';
import { MdCheck } from 'react-icons/md';

class NavBar extends React.Component {

    state = {
        newItm: {
            content: '',
            status: 'doing'
        }
    }

    handleChange = (event) =>  {
        this.setState({ newItm: { ...this.state.newItm, [event.target.name]: event.target.value }});
    }

    handleAddItem = async (event) => {
        //event.preventDefault();
        await this.props.addItemToList(this.state.newItm);
        this.props.loadListInComponent();
        this.resetAddItem();
    }

    resetAddItem = () => {
        this.setState({
            newItm: {
                content: '',
                status: 'doing'
            }
        })
    }

    keyPressed = (event) => {
        if (event.key === "Enter") {
            if (this.state.newItm.content) {
                this.handleAddItem();
            }
        }
    }

    render() {

        return (
            <div className='navbar' /*onSubmit={this.state.newItm.content ? this.handleAddItem : null}*/>
                <input type='text' placeholder='add task here ...' className='navbar__input' name='content' value={this.state.newItm.content} onChange={this.handleChange} onKeyPress={this.keyPressed} />
                {/*<button className='navbar__button' aria-label='Approve'><MdCheck /></button>*/}
            </div>
        )
    }
}

export default NavBar;