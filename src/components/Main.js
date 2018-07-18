import React, {Component} from 'react';

export default class Main extends Component{
    constructor(){
        super();
        this.city = React.createRef();
    }
    weather = (event) =>{
        event.preventDefault();
        console.log(event.target.elements.city.value);
    };
    render(){
        return(
            <main>
                <div className="container">
                    <div className="container__search">
                        <form onSubmit={this.weather}>
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
                    </div>
                </div>
            </main>
        )
    }
}
