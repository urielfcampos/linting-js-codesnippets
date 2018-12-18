var a = []; // Create a new empty array.
a[5] = 5;   // Perfectly legal JavaScript that resizes the array.

for (var i = 0; i < a.length; i++) {
    // Iterate over numeric indexes from 0 to 5, as everyone expects.
    console.log(a[i]);
}

/* Will display:
   undefined
   undefined
   undefined
   undefined
   undefined
   5
*/

var a = [];
a[5] = 5;
for (var x in a) {
    // Shows only the explicitly set index of "5", and ignores 0-4
    console.log(x);
}

/* Will display:
   5
*/
// Somewhere deep in your JavaScript library...
Array.prototype.foo = 1;

// Now you have no idea what the below code will do.
var a = [1, 2, 3, 4, 5];
for (var x in a){
    // Now foo is a part of EVERY array and 
    // will show up here as a value of 'x'.
    console.log(x);
}

/* Will display:
   0
   1
   2
   3
   4
   foo
*/