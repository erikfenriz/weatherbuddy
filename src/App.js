import React, {Component} from 'react';
import Weather from "./components/Weather";

// import Forecast from "./components/Forecast";

class App extends Component {
    render() {
        return (
            <main>
                <div className="container">
                    <h3 className="container__title">Tallinn</h3>
                    <label>Something <input type="checkbox" className="ios-switch"/></label>

                    <Weather/>
                    {/*<Forecast/>*/}
                </div>
            </main>
    );
    }
    }

    export default App;