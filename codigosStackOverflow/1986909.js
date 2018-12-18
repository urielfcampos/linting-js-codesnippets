function theFunction(name, profession) {
    console.log("My name is " + name + " and I am a " + profession +".");
}
theFunction("John", "fireman");
theFunction.apply(undefined, ["Susan", "school teacher"]);
theFunction.call(undefined, "Claude", "mathematician");
theFunction.call(undefined, ...["Matthew", "physicist"]); // used with the spread operator

f.call(thisObject, a, b, c); // Fixed number of arguments

f.apply(thisObject, arguments); // Forward this function's arguments

var args = [];
while (...) {
    args.push(some_value());
}
f.apply(thisObject, args); // Unknown number of arguments

var obj = {};
obj.value = 10;
/** @param {...number} additionalValues */
obj.addValues = function(additionalValues) {
  for (var i = 0; i < arguments.length; i++) {
    this.value += arguments[i];
  }
  return this.value;
};
// Evaluates to 30 because obj is used as the value for 'this' when
// obj.addValues() is called, so obj.value becomes 10 + 20.
obj.addValues(20);

var f = obj.addValues;
// Evaluates to NaN because window is used as the value for 'this' when
// f() is called. Because and window.value is undefined, adding a number to
// it results in NaN.
f(20);
// This also has the unintentional side effect of adding a value to window:
alert(window.value); // Alerts NaN