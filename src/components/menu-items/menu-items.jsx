import React from 'react';
import {withRouter} from 'react-router-dom';
import './menu.styles.scss';

const MenuItem = (props, history, match) => {
    console.log(props.title);
    return (
    <div className={`${props.size} menu-item`} onClick={() => history.push(`${match.url}${props.url}`)}>
        <div className="background-image" style={{
            backgroundImage: `url(${props.imgURL})`
        }} />
        <div className="content">
            <h1 className="title" key={props.n}>{props.title}</h1>
            <span className="sub-title">SHOP NOW</span>
        </div>
    </div>
);}

export default withRouter(MenuItem);