import React from 'react';
import './ClickItem.css';

const ClickItem = (props) => (
    <div
        role = 'img'
        aria-label = 'click item'
        id = {props.id}
        onClick = {() => props.handleClick(props.indexNumber)}
        style = {{backgroundImage: `url("${props.image}")`}}
        className = {`click-item click-item${props.shake ? "shake" : ""}`}
    >
    {props.children}
    </div>
);

export default ClickItem;