import React from 'react';
import './menu.styles.scss';

const MenuItem = (props) => (
    <div className={`${props.size} menu-item`}>
        <div className="background-image" style={{
            backgroundImage: `url(${props.img})`
        }} />
        <div className="content">
            <h1 className="title" key={props.n}>{props.title}</h1>
            <span className="sub-title">SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;