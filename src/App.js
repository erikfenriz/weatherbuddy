import React, {Component} from 'react';
import Main from "./components/Main";

class App extends Component {

    setup = (event) => {
        event.preventDefault();
        const val = event.target.elements.city.value;
        const city = val.replace(/[\d$-/:-?{-~!"^_`[\]#@]/g, "");
        if (city === "") {
            event.currentTarget.reset();
            return -1;
        } else {
            this.props.history.push(`/forecast/${city}`);
        }
    };

    render() {
        return (
            <Main setup={this.setup}/>
        );
    }
}

export default App;