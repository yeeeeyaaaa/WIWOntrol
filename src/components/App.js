import React, { Component } from 'react';
import logo from '../css/logo.svg';
//import ListDevices from './ListDevices';
import ThumbnailList from './ThumbnailList';
import DeviceStore from '../stores/device-store';
import '../../css/App.css';

//var options = {
//    data:[{
//        accf2365521a:
//        {
//            macAddress: "accf2365521a",
//            macPadding: "202020202020",
//            type: "Socket",
//            ip: "192.168.1.34",
//            state: false,
//            name: "Socket accf2365521a"
//        },
//        accf2365e184:
//        {
//            macAddress: "accf2365e184",
//            macPadding: "202020202020",
//            type: "Socket",
//            ip: "192.168.1.33",
//            state: false,
//            name: "Socket accf2365e184"
//        }
//    }]
//};


class App extends Component {
    constructor(){
        super();
        this.SetState = [{
            devices: []
        }];
    }
    componentDidMount() {

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
