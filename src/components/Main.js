import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Main extends Component {
    state = {
        currentURL: 'forecast/',
        currentLocation: ""
    };

    city = React.createRef();

    getCurrentPosition = async () => {
        const call = await fetch(`http://api.ipstack.com/188.115.136.47?access_key=fdbc490eb99d887a86ecbea41a50ec65`);
        const location = await call.json();
        const currentLocation = location.region_name;
        this.setState({currentLocation});
    };

    componentDidMount() {
        this.getCurrentPosition();
    }

    render() {
        return (
            <main>
                <div className="container">
                    <div className="container__search">
                        <form onSubmit={this.props.setup}>
                            <input type="text"
                                   ref={this.city}
                                   name="city"
                                   className="container__search--city"
                                   placeholder="City"/>
                            <button className="container__search--button">
                                <i className="fa fa-search container__search--button--icon" aria-hidden="true"></i>
                            </button>
                            <hr className="container__search--underscore"/>
                        </form>
                        <p className="container__search--local"><span
                            className="container__search--local--small">or</span><br/>
                            <span className="container__search--local--large">use my <Link
                                to={`${this.state.currentURL}${this.state.currentLocation}`}>current position</Link></span>
                        </p>
                    </div>
                </div>
            </main>
        )
    }
}
