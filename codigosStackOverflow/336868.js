// TypeError: functionOne is not a function
functionOne();

var functionOne = function() {
  console.log("Hello!");
};

// Outputs: "Hello!"
functionTwo();

function functionTwo() {
  console.log("Hello!");
}

if (test) {
    // Error or misbehavior
    function functionThree() { doSomething(); }
 }