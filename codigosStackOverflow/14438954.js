function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

// usage example:
var a = ['a', 1, 'a', 2, '1'];
var unique = a.filter( onlyUnique ); // returns ['a', 1, 2, '1']

// usage example:
var myArray = ['a', 1, 'a', 2, '1'];
var unique = myArray.filter((v, i, a) => a.indexOf(v) === i); 

// unique is ['a', 1, 2, '1']

var myArray = ['a', 1, 'a', 2, '1'];

let unique = [...new Set(myArray)]; 

// unique is ['a', 1, 2, '1']
