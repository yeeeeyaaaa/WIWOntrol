import React, { Component } from 'react';
import './Device.css';
import ThumbnailDevice from './ThumbnailDevice';

class ThumbnailList extends Component {
    render() {
        var list =  this.props.thumbnailData.map(function (thumbnailProps){
            return <ThumbnailDevice {...thumbnailProps} />
        });
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default ThumbnailList;