import React from 'react';
import Button from './Button';
import './ButtonList.css';

const ButtonList = props => {
    return (
        <div className="buttonList">
            {
                props.buttonList.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], []).map((button) => {
                    const id = Math.floor((1 + Math.random()) * 0x100000).toString(16).toUpperCase();
                    return <Button type="button" key={id} name={props.name} handleClick={props.handleClick} value={button}>{button}</Button>
                })
            }
        </div>
    )
}

export default ButtonList;