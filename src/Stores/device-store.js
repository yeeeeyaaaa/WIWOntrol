/**
 * Created by yeya on 01/09/16.
 */
import Api from '../utils/Api';
import Reflux from 'reflux';

module.exports = Reflux.createStore({
    getDevices(){
        return Api.get('devices')
            .then(function(json){
                this.devices = json.data
            }.bind(this));
    }
});