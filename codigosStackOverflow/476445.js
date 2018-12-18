var whatIWant = someString || "Cookies!";
alert(Boolean(null)); // false
alert(Boolean(undefined)); // false
alert(Boolean(0)); // false
alert(Boolean("")); // false
alert(Boolean("false")); // true -- gotcha! :)
var whatIWant = null || new ShinyObject(); // is a new shiny object
var whatIWant = undefined || "well defined"; // is "well defined"
var whatIWant = 0 || 42; // is 42
var whatIWant = "" || "a million bucks"; // is "a million bucks"
var whatIWant = "false" || "no way"; // is "false"
function coalesce() {
    var len = arguments.length;
    for (var i=0; i<len; i++) {
        if (arguments[i] !== null && arguments[i] !== undefined) {
            return arguments[i];
        }
    }
    return null;
}

var xyz = {};
xyz.val = coalesce(null, undefined, xyz.val, 5);

// xyz.val now contains 5