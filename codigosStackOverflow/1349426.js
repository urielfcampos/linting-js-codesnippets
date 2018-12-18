function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
  
  console.log(makeid());

  var crypto = require("crypto");
var id = crypto.randomBytes(20).toString('hex');

// "bb5dc8842ca31d4603d6aa11448d1654"

var uuid = require("uuid");
var id = uuid.v4();

// "110ec58a-a0f2-4ac4-8393-c866d813b8d1"

// dec2hex :: Integer -> String
function dec2hex (dec) {
    return ('0' + dec.toString(16)).substr(-2)
  }
  
  // generateId :: Integer -> String
  function generateId (len) {
    var arr = new Uint8Array((len || 40) / 2)
    window.crypto.getRandomValues(arr)
    return Array.from(arr, dec2hex).join('')
  }
  
  console.log(generateId())
  // "82defcf324571e70b0521d79cce2bf3fffccd69"
  
  console.log(generateId(20))
  // "c1a050a4cd1556948d41"