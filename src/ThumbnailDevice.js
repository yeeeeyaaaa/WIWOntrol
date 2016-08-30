import React, { Component } from 'react';
import './Device.css';
//import Device from './Device';

class ThumbnailDevice extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-6 col-md-4">
                    <div className="thumbnail">
                        <img class="Device-logo" alt="Device" />
                        <div className="caption">
                            <h3>{this.props.title}</h3>
                            <p><a href="#" className="btn btn-primary" role="button">On</a> <a href="#" className="btn btn-default" role="button">Off</a></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ThumbnailDevice;