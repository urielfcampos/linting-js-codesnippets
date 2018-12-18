// module.mjs
export function hello() {
    return "Hello";
  }

  // main.mjs
import { hello } from 'module'; // or './module'
let val = hello();  // val is "Hello";

// hello.mjs
export function hello(text) {
    const div = document.createElement('div');
    div.textContent = `Hello ${text}`;
    document.body.appendChild(div);
  }

  import('hello.mjs').then(module => {
    module.hello('world');
  });

  import { hello } from './hello.mjs';
  hello('world');

  module.exports = {
    hello: function() {
       return "Hello";
    }
 }

 // server.js
const myModule = require('./mymodule');
let val = myModule.hello(); // val is "Hello"   

$.getScript("my_lovely_script.js", function() {
    alert("Script loaded but not necessarily executed.");
 });

 function dynamicallyLoadScript(url) {
    var script = document.createElement("script");  // create a script DOM node
    script.src = url;  // set its src to the provided URL

    document.head.appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}

var js = document.createElement("script");

js.type = "text/javascript";
js.src = jsFilePath;

document.body.appendChild(js);

var s = new MySuperObject();

Error : MySuperObject is undefined;

function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var head = document.head;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}
var myPrettyCode = function() {
    // Here, do whatever you want
 };
 loadScript("my_lovely_script.js", myPrettyCode);