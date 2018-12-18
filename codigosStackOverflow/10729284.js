const util = require('util')

console.log(util.inspect(myObject, {showHidden: false, depth: null}))

// alternative shortcut
console.log(util.inspect(myObject, false, null, true /* enable colors */))

{ a: 'a',  b: { c: 'c', d: { e: 'e', f: { g: 'g', h: { i: 'i' } } } } }
