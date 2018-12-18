function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}

var d1 = new Date();

/* Executes function after 5 seconds. */
setTimeout(function(){
    var d2 = clone(d1);
    alert("d1 = " + d1.toString() + "\nd2 = " + d2.toString());
}, 5000);

function clone(obj) {
    var copy;

    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
}

// This would be cloneable:
var tree = {
    "left"  : { "left" : null, "right" : null, "data" : 3 },
    "right" : null,
    "data"  : 8
};

// This would kind-of work, but you would get 2 copies of the 
// inner node instead of 2 references to the same copy
var directedAcylicGraph = {
    "left"  : { "left" : null, "right" : null, "data" : 3 },
    "data"  : 8
};
directedAcyclicGraph["right"] = directedAcyclicGraph["left"];

// Cloning this would cause a stack overflow due to infinite recursion:
var cyclicGraph = {
    "left"  : { "left" : null, "right" : null, "data" : 3 },
    "data"  : 8
};
cyclicGraph["right"] = cyclicGraph;