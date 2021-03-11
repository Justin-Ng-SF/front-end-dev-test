import React from 'react';

import './style.css';

function Subsection(props) {
        return (
            <div className="subsection" id={props.id} style={{
                backgroundImage: `url(${props.picture})`,
                backgroundColor: props.bgColor, 
                display: 'flex'
            }}>
                {/* left side of subsection */}
                <div className='subsection-item' style={{ backgroundColor: props.color1 }}>
                    {props.children[0]}
                </div>
                {/* right side of subsection */}
                <div className='subsection-item' style={{ backgroundColor: props.color2 }}>
                    {props.children[1]}
                </div>
            </div>
        )
}

export default Subsection;