import React, {Component} from 'react';
import Weather from "./components/Weather";
// import Forecast from "./components/Forecast";
// const routes = [
//     {
//         path: "/",
//         component: Main,
//     },
//     {
//         path: "/city",
//         component: Weather
//     }
// ];

class App extends Component {
    getWeather = (event) => {
        event.preventDefault();
        console.log(event.target.elements.city.value);
    };

    render() {
        return (
            <main>
                <div className="container">
                    <Weather/>
                </div>
            </main>
        );
    }
}

export default App;