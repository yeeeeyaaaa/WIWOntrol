import React, { Component } from 'react';
import logo from './logo.svg';
//import ListDevices from './ListDevices';
import ThumbnailList from './ThumbnailList';
//import Api from './utils/Api';
import './App.css';

var options = {
    data:[{
        accf2365521a:
        {
            macAddress: "accf2365521a",
            macPadding: "202020202020",
            type: "Socket",
            ip: "192.168.1.34",
            state: false,
            name: "Socket accf2365521a"
        },
        accf2365e184:
        {
            macAddress: "accf2365e184",
            macPadding: "202020202020",
            type: "Socket",
            ip: "192.168.1.33",
            state: false,
            name: "Socket accf2365e184"
        }
    }]
};


class App extends Component {

    //componentDidUpdate(prevProps, prevState) {
    //    this.setState({
    //        searchResults: options
    //    });
    //}
    //componentDidMount() {
    //    //// eslint-disable-next-line
    //    //this.serverRequest = $.get(this.props.source, function (result) {
    //    //    //var searchResults = result[0];
    //    //    this.setState({
    //    //        searchResults: this.serverRequest.results
    //    //    });
    //    //}.bind(this));
    //    this.setState({
    //        searchResults: options
    //    });
    //}

    componentWillUnmount() {
        this.serverRequest.abort();
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>

                    <h2>Welcome to WIWOntrol</h2>
                </div>


                <ThumbnailList {...options} />
            </div>
        );
    }


}

export default App;
