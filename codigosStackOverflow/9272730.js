var express = require('express')
, app = express.createServer()
, fs = require('fs');

app.listen(90);

var file={};
fs.readdirSync('.').forEach(function(f) {
    console.log(f)
    file[f] = fs.readFileSync(f);
    if (f != 'jquery.js' && f != 'style.css') app.get('/' + f, function(req,res) {
        res.contentType(f);
        res.send(file[f]);
    });
});


app.get('/jquery.js', function(req,res) {
    setTimeout(function() {
        res.contentType('text/javascript');
        res.send(file['jquery.js']);
    }, 500);
});

app.get('/style.css', function(req,res) {
    setTimeout(function() {
        res.contentType('text/css');
        res.send(file['style.css']);
    }, 500);
});


var headresults={
    css: [],
    js: []
}, bodyresults={
    css: [],
    js: []
}
app.post('/result/:type/:time/:exec', function(req,res) {
    headresults[req.params.type].push(parseInt(req.params.time, 10));
    bodyresults[req.params.type].push(parseInt(req.params.exec, 10));
    res.end();
});

app.get('/result/:type', function(req,res) {
    var o = '';
    headresults[req.params.type].forEach(function(i) {
        o+='\n' + i;
    });
    o+='\n';
    bodyresults[req.params.type].forEach(function(i) {
        o+='\n' + i;
    });
    res.send(o);
});

var jsload = Date.now();


$(function() {
    $.post('/result' + location.pathname.replace('.html','') + '/' + (jsload - start) + '/' + (bodyexec - start));
});