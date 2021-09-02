import React from 'react';

const Button = props => {
    return <button type={props.type} name={props.name} onClick={props.handleClick} value={props.value}>{props.children}</button>
}

export default Button