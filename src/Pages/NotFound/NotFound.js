import './NotFound.css';
import React from 'react';
import NotFoundImage from '../../images/404_page.png';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="background-cover-img">
            <img src={NotFoundImage} alt="" />
            <Link to="/">
                <button className='btn btn-primary col-md-2 rounded-pill'>Go to home</button>
            </Link>
        </div>
    );
};

export default NotFound;