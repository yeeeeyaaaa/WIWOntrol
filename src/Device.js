import React, { Component } from 'react';
import './Device.css';

class Device extends Component {
  render() {
    return (
        <div className="Device">
          <div className="jumbotron">
            <h1>{this.props.title}</h1>
            <button type="button" className="btn btn-success btn-half-top-circle"><i className="glyphicon glyphicon-play"></i></button>
            <button type="button" className="btn btn-danger btn-half-bottom-circle"><i className="glyphicon glyphicon-off"></i></button>
          </div>
        </div>
    );
  }
}

export default Device;
