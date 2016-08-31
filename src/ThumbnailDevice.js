import React, { Component } from 'react';
import './Device.css';

class ThumbnailDevice extends Component {
    render() {
        return (
            <div className="col-sm-6 col-md-4">
                <div className={"thumbnail" + (this.props.state ? " on" : " off") }>
                    <h1>{this.props.name}</h1>
                    <img className="Device-logo" alt=""/>
                    <button type="button" className="btn btn-success btn-half-top-circle"><i
                        className="glyphicon glyphicon-play"></i></button>
                    <button type="button" className="btn btn-danger btn-half-bottom-circle"><i
                        className="glyphicon glyphicon-off"></i></button>

                </div>
            </div>
        );
    }
}

export default ThumbnailDevice;