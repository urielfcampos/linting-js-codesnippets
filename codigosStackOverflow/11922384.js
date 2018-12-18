{key: value, key: value, ...}

[value, value, ...]

const value = obj.someProperty;

// the space is not a valid character in identifier names
const value = obj["some Property"];

// property name as variable
const name = "some Property";
const value = obj[name];

const value = arr[5]; // arr.5 would be a syntax error

// property name / index as variable
const x = 5;
const value = arr[x];

const data = {
    code: 42,
    items: [{
        id: 1,
        name: 'foo'
    }, {
        id: 2,
        name: 'bar'
    }]
};

data.items

data.items[1]

const item_name = data.items[1].name;

const item_name = data['items'][1]['name'];

const foo = {bar: {baz: 42}};
console.log(foo.baz); // undefined

console.log(foo.bar.baz); // 42

for (const prop in data) {
    // `prop` contains the name of each property, i.e. `'code'` or `'items'`
    // consequently, `data[prop]` refers to the value of each property, i.e.
    // either `42` or the array
}

Object.keys(data).forEach(function(prop) {
    // `prop` is the property name
    // `data[prop]` is the property value
  });

  for(let i = 0, l = data.items.length; i < l; i++) {
    // `i` will take on the values `0`, `1`, `2`,..., i.e. in each iteration
    // we can access the next element in the array with `data.items[i]`, example:
    // 
    // var obj = data.items[i];
    // 
    // Since each element is an object (in our example),
    // we can now access the objects properties with `obj.id` and `obj.name`. 
    // We could also use `data.items[i].id`.
}

data.items.forEach(function(value, index, array) {
    // The callback is executed for each element in the array.
    // `value` is the element itself (equivalent to `array[index]`)
    // `index` will be the index of the element in the array
    // `array` is a reference to the array itself (i.e. `data.items` in this case)
}); 

for (const item of data.items) {
    // `item` is the array element, **not** the index
 }

 function getLeaf(node) {
    if (node.leftChild) {
        return getLeaf(node.leftChild); // <- recursive call
    }
    else if (node.rightChild) {
        return getLeaf(node.rightChild); // <- recursive call
    }
    else { // node must be a leaf node
        return node;
    }
}

const first_leaf = getLeaf(root);

function toArray(obj) {
    const result = [];
    for (const prop in obj) {
        const value = obj[prop];
        if (typeof value === 'object') {
            result.push(toArray(value)); // <- recursive call
        }
        else {
            result.push(value);
        }
    }
    return result;
}

> console.log(data.items)
 [ Object, Object ]

 > console.log(data.items[1])
 Object
    id: 2
    name: "bar"
    __proto__: Object
    
    