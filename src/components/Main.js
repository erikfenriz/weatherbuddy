import React, {Component} from 'react';

export default class Main extends Component {
    city = React.createRef();

    render() {
        return (
            <main>
                <div className="container">
                    <div className="container__search">
                        <form onSubmit={this.props.getWeatherAPI}>
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
                            <span className="container__search--local--large">use my <a
                                href="/city">current position</a></span></p>

                    </div>
                </div>
            </main>
        )
    }
}
