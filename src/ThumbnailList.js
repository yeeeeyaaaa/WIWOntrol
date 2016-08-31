import React, { Component } from 'react';
import './Device.css';
import ThumbnailDevice from './ThumbnailDevice';

class ThumbnailList extends Component {
    render() {
        if (this.props.data[0] === undefined)
            return 'Not Found';

        var props = this.props.data[0];
        var list = Object.keys(props).map(function (key) {
            var item = props[key];
            return <ThumbnailDevice key={key} {...item} />
        });


        return (
            <div className="container">
                <div className="row">
                    {list}
                </div>
            </div>
        );
    }
}

export default ThumbnailList;