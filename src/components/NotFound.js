import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => (
    <main>
        <div className="container">
            <div className="application">
                <div className="topContent">
                    <Link id="notFoundArrow" to="/">
                        <i className="fas fa-arrow-left topContent__back--icon"></i>
                    </Link>
                </div>
                <div className="notFound">
                    <h1 className="notFound__code">404</h1>
                    <p className="notFound__message">This is not the city you're looking for</p>
                </div>
            </div>
        </div>
    </main>
);

export default NotFound;
