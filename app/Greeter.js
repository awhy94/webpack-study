
import React, {Component} from 'react'
import config from './config.json'
import Greeter_styles from './Greeter.css'

class Greeter extends Component{
    render() {
        return (
            <div className={Greeter_styles.root}>
                {config.greetText}99
            </div>
        );
    }
}

export default Greeter





/*var config = require('./config.json')
module.exports = function () {
    var greet = document.createElement('div')
    greet.textContent = config.greetText
    return greet
}*/



