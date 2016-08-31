var Fetch = require('whatwg-fetch');
//var raspiWiwoURL = 'http://raspwiwocontrol.no-ip.org:8001/';
var raspiWiwoURL = 'http://192.168.1.150:8001/';

var myHeaders = new Headers();
myHeaders.append('Content-Type', 'text/json');

var myInit = { method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default' };

module.exports = window.api = {
    get (url) {
        return fetch (raspiWiwoURL + url, myInit)
            .then(function (response){
                return response.json();
            });
            //.then(function (data){
            //    console.log(data);
            //});
    }
};

