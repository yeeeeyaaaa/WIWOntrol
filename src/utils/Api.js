var Fetch = require('whatwg-fetch');
var raspiWiwoURL = 'http://raspwiwocontrol.no-ip.org:8001/';

module.exports = window.api = {
    get (url) {
        return fetch (raspiWiwoURL + url)
            .then(function (response){
                return response.json();
            })
            .then(function (data){
                console.log(data);
            });
    }
};

