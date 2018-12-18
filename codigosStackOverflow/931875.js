x = new Array(5);
alert(x.length); // 5

var a = [],            // these are the same
    b = new Array(),   // a and b are arrays with length 0

    c = ['foo', 'bar'],           // these are the same
    d = new Array('foo', 'bar'),  // c and d are arrays with 2 strings

    // these are different:
    e = [3]             // e.length == 1, e[0] == 3
    f = new Array(3),   // f.length == 3, f[0] == undefined

;

