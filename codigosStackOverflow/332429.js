Object.prototype.getName = function() { 
    var funcNameRegex = /function (.{1,})\(/;
    var results = (funcNameRegex).exec((this).constructor.toString());
    return (results && results.length > 1) ? results[1] : "";
 };
 var myArray = [1,2,3];
(myArray.constructor == Array); // true
function Thingy() {
}
Thingy.prototype = {
    method1: function() {
    },
    method2: function() {
    }
};
function a() { this.foo = 1;}
function b() { this.bar = 2; }
b.prototype = new a(); // b inherits from a
var f = new b(); // instantiate a new object with the b constructor
(f.constructor == b); // false
(f.constructor == a); // true
iframe.contentWindow.Array === Array // false
var myArray = [1,2,3];
(myArray instanceof Array); // true
(myArray instanceof Object); // true
3 instanceof Number // false
'abc' instanceof String // false
true instanceof Boolean // false
new Number(3) instanceof Number // true
3..constructor === Number // true
'abc'.constructor === String // true
true.constructor === Boolean // true
if (Function.prototype.name === undefined && Object.defineProperty !== undefined) {
    Object.defineProperty(Function.prototype, 'name', {
        get: function() {
            var funcNameRegex = /function\s+([^\s(]+)\s*\(/;
            var results = (funcNameRegex).exec((this).toString());
            return (results && results.length > 1) ? results[1] : "";
        },
        set: function(value) {}
    });
}
if (Function.prototype.name === undefined && Object.defineProperty !== undefined) {
    Object.defineProperty(Function.prototype, 'name', {
        get: function() {
            var funcNameRegex = /function\s([^(]{1,})\(/;
            var results = (funcNameRegex).exec((this).toString());
            return (results && results.length > 1) ? results[1].trim() : "";
        },
        set: function(value) {}
    });
}
Object.prototype.toString.call('abc') // [object String]
Object.prototype.toString.call(/abc/) // [object RegExp]
Object.prototype.toString.call([1,2,3]) // [object Array]
function type(obj){
    return Object.prototype.toString.call(obj).slice(8, -1);
}
type('abc') // String
// using a named function:
function Foo() { this.a = 1; }
var obj = new Foo();
(obj instanceof Object);          // true
(obj instanceof Foo);             // true
(obj.constructor == Foo);         // true
(obj.constructor.name == "Foo");  // true

// let's add some prototypical inheritance
function Bar() { this.b = 2; }
Foo.prototype = new Bar();
obj = new Foo();
(obj instanceof Object);          // true
(obj instanceof Foo);             // true
(obj.constructor == Foo);         // false
(obj.constructor.name == "Foo");  // false


// using an anonymous function:
obj = new (function() { this.a = 1; })();
(obj instanceof Object);              // true
(obj.constructor == obj.constructor); // true
(obj.constructor.name == "");         // true


// using an anonymous function assigned to a variable
var Foo = function() { this.a = 1; };
obj = new Foo();
(obj instanceof Object);      // true
(obj instanceof Foo);         // true
(obj.constructor == Foo);     // true
(obj.constructor.name == ""); // true


// using object literal syntax
obj = { foo : 1 };
(obj instanceof Object);            // true
(obj.constructor == Object);        // true
(obj.constructor.name == "Object"); // true