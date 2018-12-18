function foo() {
    console.log(this);
}

// normal function call
foo(); // `this` will refer to `window`

// as object method
var obj = {bar: foo};
obj.bar(); // `this` will refer to `obj`

// as constructor function
new foo(); // `this` will refer to an object that inherits from `foo.prototype`
function MyConstructor(data, transport) {
    this.data = data;
    var self = this;
    transport.on('data', function() {
        alert(self.data);
    });
}

function MyConstructor(data, transport) {
    this.data = data;
    var boundFunction = (function() { // parenthesis are not necessary
        alert(this.data);             // but might improve readability
    }).bind(this); // <- here we are calling `.bind()` 
    transport.on('data', boundFunction);
}

function MyConstructor(data, transport) {
    this.data = data;
    transport.on('data', () => alert(this.data));
}
array.map(callback[, thisArg])
var arr = [1, 2, 3];
var obj = {multiplier: 42};

var new_arr = arr.map(function(v) {
    return v * this.multiplier;
}, obj); // <- here we are passing `obj` as second argument
function Foo() {
    this.data = 42,
    document.body.onclick = this.method;
}

Foo.prototype.method = function() {
    console.log(this.data);
};
function method() {
    console.log(this.data);
}


function Foo() {
    this.data = 42,
    document.body.onclick = this.method;
}

Foo.prototype.method = method;
document.body.onclick = this.method.bind(this);
var self = this;
document.body.onclick = function() {
    self.method();
};
document.body.onclick = () => this.method();