import React, {Component} from 'react';


const API = "cb92c12ab28fe349bd50c6f4f40b61cd";

export default class Weather extends Component {
    state = {
        location: "",
        forecast: [],
        condition: [],
        date: ""
    };

    goBack = () => {
        this.props.history.push("/");
    };

    getWeather = async () => {
        const location = this.props.match.params.city;
        this.setState({location});
        const call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API}&units=imperial`);
        const data = await call.json();
        console.log(data);
    };

    displayDate = () => {
        let now, day, year, month, monthsArr, dayArr, suffix;
        now = new Date();
        year = now.getFullYear();
        month = now.getMonth();
        day = now.getDay();
        dayArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        monthsArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
            'August', 'September', 'October', 'November', 'December'];
        day === 1 ? suffix = 'st' : day === 2 ? suffix = 'nd' : suffix = 'th';
        const date = `${dayArr[day - 1]}, ${monthsArr[month]} ${day}${suffix} ${year}`;
        this.setState({date});
    };

    componentDidMount() {
        this.displayDate();
        this.getWeather();
    }

    render() {
        return (
            <main>
                <div className="container">
                    <div className="application">
                        <div className="topContent">
                            <button className="topContent__back">
                                <i className="fas fa-arrow-left topContent__back--icon" onClick={this.goBack}></i>
                            </button>
                            <h2 className="topContent__title">{this.state.location}</h2>
                            <div className="old-ios-switch switch">
                                <input type="checkbox" id="old-switch"/>
                                <span><label htmlFor="old-switch"></label></span>
                            </div>
                        </div>
                        <div className="current">
                            <h3 className="current__date">{this.state.date}</h3>
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