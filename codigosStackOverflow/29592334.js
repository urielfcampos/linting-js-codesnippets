var thing = new Thing(); // eslint-disable-line no-use-before-define
thing.sayHello();

function Thing() {

     this.sayHello = function() { console.log("hello"); };

}