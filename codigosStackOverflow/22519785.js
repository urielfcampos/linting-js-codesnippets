function load() {
    return new Promise(function(resolve, reject) {
        window.onload = resolve;
    });
}

load().then(function() {
    // Do things after onload
});

function load() {
    var d = $q.defer();
    window.onload = function() { d.resolve(); };
    return d.promise;
}

function done() {
    var d = $.Deferred();
    $("#myObject").once("click",function() {
        d.resolve();
    });
    return d.promise();
}

function getUserDataAsync(userId) {
    return new Promise(function(resolve, reject) {
        getUserData(userId, resolve, reject);
    });
}

function getUserDataAsync(userId) {
    var d = $.Deferred();
    getUserData(userId, function(res){ d.resolve(res); }, function(err){ d.reject(err); });
    return d.promise();
}

function getUserDataAsync(userId) {
    return $.Deferred(function(dfrd) {
        getUserData(userId, dfrd.resolve, dfrd.reject);
    }).promise();
}

getStuff("dataParam", function(err, data) { …

    function getStuffAsync(param) {
        return new Promise(function(resolve, reject) {
            getStuff(param, function(err, data) {
                if (err !== null) reject(err);
                else resolve(data);
            });
        });
    }
    
    function getStuffAsync(param) {
        var d = Q.defer();
        getStuff(param, function(err, data) {
            if (err !== null) d.reject(err);
            else d.resolve(data);
        });
        return d.promise;   
    }
    
    var getStuffAsync = Promise.promisify(getStuff); // Bluebird
    var getStuffAsync = Q.denodeify(getStuff); // Q
    var getStuffAsync = util.promisify(getStuff); // Native promises, node only
    
    

Promise.promisifyAll(API);

const { promisify } = require('util');
const promiseAPI = Object.entries(API).map(v => ({key, fn: promisify(v)}))
                         .reduce((o, p) => Object.assign(o, {[p.key]: p.fn}), {});