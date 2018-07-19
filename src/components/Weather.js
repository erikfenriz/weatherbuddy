import React, {Component} from 'react';

export default class Weather extends Component {
    render() {
        return (
            <main>
                <div className="container">
                    <div className="application">
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
                        <div className="weather">
                            <div className="weather__now">39&#8457;</div>
                            <i className="wi wi-night-sleet weather__icon"></i>
                            <table className="weather__daytime">
                                <tbody>
                                <tr>
                                    <td>Morning</td>
                                    <td>40&#8457;</td>
                                </tr>
                                <tr>
                                    <td>Day</td>
                                    <td>39&#8457;</td>
                                </tr>
                                <tr>
                                    <td>Evening</td>
                                    <td>32&#8457;</td>
                                </tr>
                                <tr>
                                    <td>Night</td>
                                    <td>29&#8457;</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="forecast">
                            <div className="forecast__tag">
                                <p className="forecast__day">Monday</p>
                                <i className="wi wi-night-sleet forecast__icon"></i>
                                <p className="forecast__temperature">39</p>
                            </div>
                            <div className="forecast__tag">
                                <p className="forecast__day">Tuesday</p>
                                <i className="wi wi-night-sleet forecast__icon"></i>
                                <p className="forecast__temperature">39</p>
                            </div>
                            <div className="forecast__tag">
                                <p className="forecast__day">Wednesday</p>
                                <i className="wi wi-night-sleet forecast__icon"></i>
                                <p className="forecast__temperature">39</p>
                            </div>
                            <div className="forecast__tag">
                                <p className="forecast__day">Thursday</p>
                                <i className="wi wi-night-sleet forecast__icon"></i>
                                <p className="forecast__temperature">39</p>
                            </div>
                            <div className="forecast__tag">
                                <p className="forecast__day">Friday</p>
                                <i className="wi wi-night-sleet forecast__icon"></i>
                                <p className="forecast__temperature">39</p>
                            </div>
                            <div className="forecast__tag">
                                <p className="forecast__day">Saturday</p>
                                <i className="wi wi-night-sleet forecast__icon"></i>
                                <p className="forecast__temperature">39</p>
                            </div>
                            <div className="forecast__tag">
                                <p className="forecast__day">Sunday</p>
                                <i className="wi wi-night-sleet forecast__icon"></i>
                                <p className="forecast__temperature">39</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}