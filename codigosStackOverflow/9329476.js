var a = ["a", "b", "c"];
a.forEach(function(entry) {
    console.log(entry);
});
var index;
var a = ["a", "b", "c"];
for (index = 0; index < a.length; ++index) {
    console.log(a[index]);
}
var index, len;
var a = ["a", "b", "c"];
for (index = 0, len = a.length; index < len; ++index) {
    console.log(a[index]);
}

var index;
var a = ["a", "b", "c"];
for (index = a.length - 1; index >= 0; --index) {
    console.log(a[index]);
}

let a = ["a", "b", "c"];
for (let index = 0; index < a.length; ++index) {
    let value = a[index];
}
//console.log(index); // Would cause "ReferenceError: index is not defined"
//console.log(value); // Would cause "ReferenceError: value is not defined"

let divs = document.querySelectorAll("div");
for (let index = 0; index < divs.length; ++index) {
    divs[index].addEventListener('click', e => {
        alert("Index is: " + index);
    });
}

// `a` is a sparse array
var key;
var a = [];
a[0] = "a";
a[10] = "b";
a[10000] = "c";
for (key in a) {
    if (a.hasOwnProperty(key)  &&        // These are explained
        /^0$|^[1-9]\d*$/.test(key) &&    // and then hidden
        key <= 4294967294                // away below
        ) {
        console.log(a[key]);
    }
}

function arrayHasOwnIndex(array, prop) {
    return array.hasOwnProperty(prop) && /^0$|^[1-9]\d*$/.test(prop) && prop <= 4294967294; // 2^32 - 2
}

for (key in a) {
    if (arrayHasOwnIndex(a, key)) {
        console.log(a[key]);
    }
}

for (key in a) {
    // "Good enough" for most cases
    if (String(parseInt(key, 10)) === key && a.hasOwnProperty(key)) {
        console.log(a[key]);
    }
}

var val;
var a = ["a", "b", "c"];
for (val of a) {
    console.log(val);
}

var a = ["a", "b", "c"];
var it = a.values();
var entry;
while (!(entry = it.next()).done) {
    console.log(entry.value);
}

Array.prototype.forEach.call(node.childNodes, function(child) {
    // Do something with `child`
});

// (This is all presumably in some scoping function)
var forEach = Array.prototype.forEach;

// Then later...
forEach.call(node.childNodes, function(child) {
    // Do something with `child`
});

// Arrow function (ES2015):
var divs = Array.from(document.querySelectorAll(".some-class"), element => element.tagName);

// Standard function (since `Array.from` can be shimmed):
var divs = Array.from(document.querySelectorAll(".some-class"), function(element) {
    return element.tagName;
});