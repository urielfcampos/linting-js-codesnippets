ObjMaker = function() {this.a = 'first';};
// ObjMaker is just a function, there's nothing special about it that makes 
// it a constructor.

ObjMaker.prototype.b = 'second';
// like all functions, ObjMaker has an accessible prototype property that 
// we can alter. I just added a property called 'b' to it. Like 
// all objects, ObjMaker also has an inaccessible [[prototype]] property
// that we can't do anything with

obj1 = new ObjMaker();
// 3 things just happened.
// A new, empty object was created called obj1.  At first obj1 was the same
// as {}. The [[prototype]] property of obj1 was then set to the current
// object value of the ObjMaker.prototype (if ObjMaker.prototype is later
// assigned a new object value, obj1's [[prototype]] will not change, but you
// can alter the properties of ObjMaker.prototype to add to both the
// prototype and [[prototype]]). The ObjMaker function was executed, with
// obj1 in place of this... so obj1.a was set to 'first'.

obj1.a;
// returns 'first'
obj1.b;
// obj1 doesn't have a property called 'b', so JavaScript checks 
// its [[prototype]]. Its [[prototype]] is the same as ObjMaker.prototype
// ObjMaker.prototype has a property called 'b' with value 'second'
// returns 'second'

SubObjMaker = function () {};
SubObjMaker.prototype = new ObjMaker(); // note: this pattern is deprecated!
// Because we used 'new', the [[prototype]] property of SubObjMaker.prototype
// is now set to the object value of ObjMaker.prototype.
// The modern way to do this is with Object.create(), which was added in ECMAScript 5:
// SubObjMaker.prototype = Object.create(ObjMaker.prototype);

SubObjMaker.prototype.c = 'third';  
obj2 = new SubObjMaker();
// [[prototype]] property of obj2 is now set to SubObjMaker.prototype
// Remember that the [[prototype]] property of SubObjMaker.prototype
// is ObjMaker.prototype. So now obj2 has a prototype chain!
// obj2 ---> SubObjMaker.prototype ---> ObjMaker.prototype

obj2.c;
// returns 'third', from SubObjMaker.prototype

obj2.b;
// returns 'second', from ObjMaker.prototype

obj2.a;
// returns 'first', from SubObjMaker.prototype, because SubObjMaker.prototype 
// was created with the ObjMaker function, which assigned a for us