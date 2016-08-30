import React, { Component } from 'react';
import logo from './logo.svg';
import ListDevices from './ListDevices';
import ThumbnailList from './ThumbnailList';
import Api from './utils/Api';
import './App.css';

class App extends Component {
    //componentDidMount() {
    //    // eslint-disable-next-line
    //    this.serverRequest = $.get(this.props.source, function (result) {
    //        //var searchResults = result[0];
    //        this.setState({
    //            searchResults: this.serverRequest.results
    //        });
    //    }.bind(this));
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

                <ListDevices />

            </div>
        );
    }


}

export default App;
