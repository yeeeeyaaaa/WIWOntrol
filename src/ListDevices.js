import React, { Component } from 'react';
import Device from './Device';
import './Device.css';

class ListDevices extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="ListDevices">
              <Device title="S20"/>
              <Device title="S20 2"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListDevices;
