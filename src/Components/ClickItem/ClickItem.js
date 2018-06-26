import React from 'react';
import './ClickItem.css';

const ClickItem = (props) => (
    <div
        role = 'img'
        aria-label = 'click item'
        id = {props.id}
        onClick = {() => props.handleClick(props.id)}
        style = {{backgroundImage: `url("${props.image}")`}}
        className = {`click-item${props.shake ? "shake" : ""}`}
    >
    {props.children}
    </div>
);

export default ClickItem;