
var array1 = ["Vijendra","Singh"];
var array2 = ["Singh", "Shakya"];

var array3 = array1.concat(array2); // Merges both arrays
// [ 'Vijendra', 'Singh', 'Singh', 'Shakya' ]

const array1 = ["Vijendra","Singh"];
const array2 = ["Singh", "Shakya"];
const array3 = [...array1, ...array2];

Array.prototype.unique = function() {
    var a = this.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
};

var array1 = ["Vijendra","Singh"];
var array2 = ["Singh", "Shakya"];
// Merges both arrays and gets unique items
var array3 = array1.concat(array2).unique(); 

function arrayUnique(array) {
    var a = array.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
}

var array1 = ["Vijendra","Singh"];
var array2 = ["Singh", "Shakya"];
    // Merges both arrays and gets unique items
var array3 = arrayUnique(array1.concat(array2));

Object.defineProperty(Array.prototype, 'unique', {
    enumerable: false,
    configurable: false,
    writable: false,
    value: function() {
        var a = this.concat();
        for(var i=0; i<a.length; ++i) {
            for(var j=i+1; j<a.length; ++j) {
                if(a[i] === a[j])
                    a.splice(j--, 1);
            }
        }

        return a;
    }
});