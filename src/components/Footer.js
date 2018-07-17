import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <p>&reg; 2016 Dirty Dogs all rights reserved</p>
                <aside>274 Marconi Blvd. Columbus, Ohio 43215&ensp;&ensp;&ensp;&ensp;|
                    &ensp;&ensp;&ensp;&ensp;614.538.0095&ensp;&ensp;&ensp;&ensp;|&ensp;&ensp;&ensp;&ensp;
                    <Link to="/contact">Contact Us</Link></aside>
            </footer>
        );
    }
}