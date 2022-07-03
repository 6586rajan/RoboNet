import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
    return (
       <div className="parent">
            <div style={{overflow: 'scroll', border:'1px solid black', height: '500px'}}>
                {props.children}
            </div>
        </div>
    )
}

export default Scroll;