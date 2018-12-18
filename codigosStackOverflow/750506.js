var funcs = [];

function createfunc(i) {
    return function() { console.log("My value: " + i); };
}

for (var i = 0; i < 3; i++) {
    funcs[i] = createfunc(i);
}

for (var j = 0; j < 3; j++) {
    funcs[j]();                        // and now let's run each one to see
}
var someArray = [ /* whatever */ ];
// ...
someArray.forEach(function(arrayElement) {
  // ... code code code for this one element
  someAsynchronousFunction(arrayElement, function() {
    arrayElement.doSomething();
  });
});

for (let i = 0; i < 3; i++) {
    funcs[i] = function() {
        console.log("My value: " + i);
    };
}