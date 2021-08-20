import React from 'react'
import '../../App.css'
import './Button.css'

//customizable buttons 
//used on the home page and games/mods pages
//description is not used on the home buttons so that just prints blank
function Button(props) {
    return (
        <a href={props.link}>
            <button>
                <span>{props.name}</span>
                <span>{props.description}</span>
            </button>
        </a>
    );
};

export default Button
