import React, {Component} from 'react';
import Main from "./components/Main";



class App extends Component {



    getWeatherAPI = async (event) => {
        event.preventDefault();
            const val = event.target.elements.city.value;
            const city = val.replace(/[\d$-/:-?{-~!"^_`\[\]#@]/g, "");
            if (city === "") {
                return -1;
            } else {
                this.props.history.push(`/forecast/${city}`);
            }
    };

    render() {
        return (
            <Main getWeatherAPI={this.getWeatherAPI} />
        );
    }
}

export default App;