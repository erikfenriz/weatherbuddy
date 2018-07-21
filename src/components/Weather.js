import React, {Component} from 'react';

const API = "cb92c12ab28fe349bd50c6f4f40b61cd";
const Fahrenheit = '\u00B0F';
const Celcius = '\u00B0C';

export default class Weather extends Component {
    state = {
        location: "",
        dateString: "",
        weekDay: [],
        forecast: [],
        lowTemp: "",
        highTemp: "",
        currentCondition: "",
        iconConditions: [],
        symbol: ""
    };

    goBack = () => {
        this.props.history.push("/");
    };

    getWeather = async () => {
        let forecast = [];
        const location = this.props.match.params.city;
        this.setState({location});
        const call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=
        ${location}&cnt=7&appid=${API}&units=imperial`);
        const data = await call.json();
        if (data.cod === 404 || data.message === 'city not found') {
            this.props.history.push("/notFound");
        } else {
            const forecastData = data.list;
            Object.keys(forecastData).forEach(function (key) {
                forecast.push(Math.round(forecastData[key].main.temp));
            });
            const lowTemp = Math.round(forecastData[0].main.temp_min);
            const highTemp = Math.round(forecastData[0].main.temp_max);
            const currentCondition = forecastData[0].weather[0].main;
            this.getConditionIcons(forecastData);
            this.setState({forecast, lowTemp, highTemp, currentCondition, symbol: Fahrenheit});
        }
    };

    getConditionIcons = (forecastData) => {
        let iconConditions = [];
        Object.keys(forecastData).forEach(function (key) {
            iconConditions.push(forecastData[key].weather[0].icon);
        });
        for (let i = 0; i < 7; i++) {
            iconConditions[i] === '01d' ? iconConditions[i] = 'wi-day-sunny'
                : iconConditions[i] === '01n' ? iconConditions[i] = 'wi-night-clear'
                : iconConditions[i] === '02d' || iconConditions[i] === '03d' ? iconConditions[i] = 'wi-day-cloudy'
                    : iconConditions[i] === '02n' || iconConditions[i] === '03n' ? iconConditions[i] = 'wi-night-alt-cloudy'
                        : iconConditions[i] === '04d' || iconConditions[i] === '04n' ? iconConditions[i] = 'wi-cloudy'
                            : iconConditions[i] === '09d' || iconConditions[i] === '09n' ? iconConditions[i] = 'wi-showers'
                                : iconConditions[i] === '10d' ? iconConditions[i] = 'wi-day-rain'
                                    : iconConditions[i] === '10n' ? iconConditions[i] = 'wi-night-alt-rain'
                                        : iconConditions[i] === '11d' || iconConditions[i] === '11n' ? iconConditions[i] = 'wi-thunderstorm'
                                            : iconConditions[i] === '13d' || iconConditions[i] === '13n' ? iconConditions[i] = 'wi-snow'
                                                : iconConditions[i] === '50d' || iconConditions[i] === '50n' ? iconConditions[i] = 'wi-fog'
                                                    : true;
        }
        const hours = new Date().getHours();
        const isDayTime = hours > 6 || hours < 20;
        const isNightTime = hours < 6 || hours > 20;
        if (isDayTime) {
            for (let i = 0; i < 7; i++) {
                iconConditions[i] === "wi-night-clear" ? iconConditions[i] = "wi-day-sunny"
                    : iconConditions[i] === 'wi-night-alt-cloudy' ? iconConditions[i] = "wi-day-cloudy"
                    : iconConditions[i] === 'wi-night-alt-rain' ? iconConditions[i] = 'wi-day-rain'
                        : true;
            }
        }
        if (isNightTime) {
            for (let i = 0; i < 7; i++) {
                iconConditions[i] === 'wi-day-sunny' ? iconConditions[i] = "wi-night-clear"
                    : iconConditions[i] === 'wi-day-cloudy' ? iconConditions[i] = "wi-night-alt-cloudy"
                    : iconConditions[i] === 'wi-day-rain' ? iconConditions[i] = "wi-night-alt-rain"
                        : true;
            }
        }
        this.setState({iconConditions});
    };

    displayDate = () => {
        let now, day, calendarDate, year, month, monthsArr, dayArr, suffix;
        let weekDay = [];
        now = new Date();
        year = now.getFullYear();
        month = now.getMonth();
        day = now.getDay();
        calendarDate = now.getDate();
        dayArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
            "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
            "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        monthsArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
            'August', 'September', 'October', 'November', 'December'];
        for (let i = 6; i < 13; i++) {
            weekDay.push(dayArr[day + i]);
        }
        day === 1 ? suffix = 'st' : day === 2 ? suffix = 'nd' : suffix = 'th';
        const dateString = `${dayArr[day + 6]}, ${monthsArr[month]} ${calendarDate}${suffix} ${year}`;
        this.setState({dateString, weekDay});
    };

    converter = () => {
        if (this.state.symbol === Fahrenheit) {
            const highTemp = Math.round((this.state.highTemp - 32) * 5 / 9);
            const lowTemp = Math.round((this.state.lowTemp - 32) * 5 / 9);
            const forecast = this.state.forecast.map(current => Math.round((current - 32) * 5 / 9));
            this.setState({highTemp, lowTemp, forecast, symbol: Celcius});
        } else if (this.state.symbol === Celcius) {
            const highTemp = Math.round(this.state.highTemp * 9 / 5 + 32);
            const lowTemp = Math.round(this.state.lowTemp * 9 / 5 + 32);
            const forecast = this.state.forecast.map(current => Math.round(current * 9 / 5 + 32));
            this.setState({highTemp, lowTemp, forecast, symbol: Fahrenheit});
        }
    };

    componentDidMount() {
        this.getWeather();
        this.displayDate();
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
                                <span><label onClick={this.converter} htmlFor="old-switch"></label></span>
                            </div>
                        </div>
                        <div className="current">
                            <h3 className="current__date">{this.state.dateString}</h3>
                            <h3 className="current__condition">{this.state.currentCondition}</h3>
                        </div>
                        <div className="weather">
                            <div className="weather__now">{this.state.forecast[0]}{this.state.symbol}</div>
                            <i className={`wi ${this.state.iconConditions[0]} weather__icon`}></i>
                            <table className="weather__daytime">
                                <tbody>
                                <tr>
                                    <td>Morning</td>
                                    <td>{this.state.highTemp}{this.state.symbol}</td>
                                </tr>
                                <tr>
                                    <td>Day</td>
                                    <td>{this.state.highTemp + 1}{this.state.symbol}</td>
                                </tr>
                                <tr>
                                    <td>Evening</td>
                                    <td>{this.state.lowTemp}{this.state.symbol}</td>
                                </tr>
                                <tr>
                                    <td>Night</td>
                                    <td>{this.state.lowTemp - 1}{this.state.symbol}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="forecast">
                            <div className="forecast__tag">
                                <p className="forecast__day">{this.state.weekDay[0]}</p>
                                <i className={`wi ${this.state.iconConditions[0]} forecast__icon`}></i>
                                <p className="forecast__temperature">{this.state.forecast[0]}{this.state.symbol}</p>
                            </div>
                            <div className="forecast__tag">
                                <p className="forecast__day">{this.state.weekDay[1]}</p>
                                <i className={`wi ${this.state.iconConditions[1]} forecast__icon`}></i>
                                <p className="forecast__temperature">{this.state.forecast[1]}{this.state.symbol}</p>
                            </div>
                            <div className="forecast__tag">
                                <p className="forecast__day">{this.state.weekDay[2]}</p>
                                <i className={`wi ${this.state.iconConditions[2]} forecast__icon`}></i>
                                <p className="forecast__temperature">{this.state.forecast[2]}{this.state.symbol}</p>
                            </div>
                            <div className="forecast__tag">
                                <p className="forecast__day">{this.state.weekDay[3]}</p>
                                <i className={`wi ${this.state.iconConditions[3]} forecast__icon`}></i>
                                <p className="forecast__temperature">{this.state.forecast[3]}{this.state.symbol}</p>
                            </div>
                            <div className="forecast__tag">
                                <p className="forecast__day">{this.state.weekDay[4]}</p>
                                <i className={`wi ${this.state.iconConditions[4]} forecast__icon`}></i>
                                <p className="forecast__temperature">{this.state.forecast[4]}{this.state.symbol}</p>
                            </div>
                            <div className="forecast__tag">
                                <p className="forecast__day">{this.state.weekDay[5]}</p>
                                <i className={`wi ${this.state.iconConditions[5]} forecast__icon`}></i>
                                <p className="forecast__temperature">{this.state.forecast[5]}{this.state.symbol}</p>
                            </div>
                            <div className="forecast__tag">
                                <p className="forecast__day">{this.state.weekDay[6]}</p>
                                <i className={`wi ${this.state.iconConditions[6]} forecast__icon`}></i>
                                <p className="forecast__temperature">{this.state.forecast[6]}{this.state.symbol}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}