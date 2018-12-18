alert("I'm evaluated in the initial global execution context!");

  setTimeout(function () {
      alert("I'm NOT evaluated in the initial global execution context.");
  }, 1);

  function doWork(callbackfn, thisArg) {
    //...
    if (callbackfn != null) callbackfn.call(thisArg);
}

function MyType() {
    this.someData = "a string";
}

var instance = new MyType();
// Kind of like the following, but there are more steps involved:
// var instance = {};
// MyType.call(instance);

if (true) {
    // What is `this` here?
}

var obj = {
    someData: "a string"
};

function myFun() {
    return this // What is `this` here?
}

obj.staticFunction = myFun;

console.log("this is window:", obj.staticFunction() == window);
console.log("this is obj:", obj.staticFunction() == obj);

var obj = {
    myMethod: function () {
        return this; // What is `this` here?
    }
};
var myFun = obj.myMethod;
console.log("this is window:", myFun() == window);
console.log("this is obj:", myFun() == obj);

function myFun() {
    return this; // What is `this` here?
}
var obj = {
    myMethod: function () {
        eval("myFun()");
    }
};

function myFun() {
    return this; // What is `this` here?
}
var obj = {
    someData: "a string"
};
console.log("this is window:", myFun.call(obj) == window);
console.log("this is obj:", myFun.call(obj) == obj);