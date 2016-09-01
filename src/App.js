import React, { Component } from 'react';
import logo from './logo.svg';
//import ListDevices from './ListDevices';
import ThumbnailList from './ThumbnailList';
//import Api from './utils/Api';
import DeviceStore from './Stores/device-store';
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

    constructor(){
        super();
        this.SetState = [{
            devices: []
        }];
    }
    componentDidMount() {
        //// eslint-disable-next-line
        //this.serverRequest = $.get(this.props.source, function (result) {
        //    //var searchResults = result[0];
        //    this.setState({
        //        searchResults: this.serverRequest.results
        //    });
        //}.bind(this));


        //Api.get('devices').then(function(data){
        //    this.setState({
        //        searchResults: data.data,
        //        open: 'show'
        //    }.bind(this));
        //    console.log('fetch done');
        //});

        DeviceStore.getDevices()
            .then(function(){
                this.setState({
                    devices: DeviceStore.devices
                });
            }.bind(this));
        console.log('component mount');
    }

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

                {this.renderThumbnailDevices()}
            </div>
        );
    }

    renderThumbnailDevices(){
        if (this.state !== undefined && this.state !== null){
            return <ThumbnailList {...this.state.devices} />
        }
        else {
            return 'Llista buida'
        }
    }


}

export default App;
