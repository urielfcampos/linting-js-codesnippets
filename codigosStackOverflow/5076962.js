var TestVar;
alert(TestVar); //shows undefined
alert(typeof TestVar); //shows undefined

var TestVar = null;
alert(TestVar); //shows null
alert(typeof TestVar); //shows object

null === undefined // false
null == undefined // true
null === null // true

null = 'value' // ReferenceError
undefined = 'value' // 'value'