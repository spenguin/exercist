// Modal component
// called from various

//Import node components
import React, {Component} from 'react';

// Import SCSS
import "./Modal.scss";


export default function Modal( props )  
{   
    const { isActive }  = props; 

    return (
        <div className={`modal ${isActive ? "" : "active"}`}>
            {props.children}
        </div>
    );
}