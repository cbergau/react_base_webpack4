import React, {Component} from 'react';

import Orders from "./Orders.jsx";
import './../main.scss'

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Orders/>
            </div>
        );
    }
}

export default App;
