import React, {Component} from 'react';

export default class Weather extends Component {
    render() {
        return (
            <main>
                <div className="container">
                    <div className="weather">
                        <div className="topContent">
                            <button className="topContent__back">
                                <i className="fas fa-arrow-left topContent__back--icon"></i>
                            </button>
                            <h2 className="topContent__title">Tallinn</h2>
                            <div className="old-ios-switch switch">
                                <input type="checkbox" id="old-switch"/>
                                <span><label htmlFor="old-switch"></label></span>
                            </div>
                        </div>
                        <div className="current">
                            <h3 className="current__date">Tuesday, December 6th 2018</h3>
                            <h3 className="current__condition">Snowy</h3>
                        </div>

                    </div>
                </div>
            </main>
        );
    }
}