import React from 'react';
import ListItem from '../ListItem/ListItemContainer';
import './ListBox.scss';

const ListBox = (props) => (
    <div className='list-box'>
        {props.list.map(listitem => <ListItem key={listitem.id} listitem={listitem} />)}
    </div>
);

export default ListBox;