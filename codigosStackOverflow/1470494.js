// These are both globals
var foo = 1;
bar = 2;

function()
{
    var foo = 1; // Local
    bar = 2;     // Global

    // Execute an anonymous function
    (function()
    {
        var wibble = 1; // Local
        foo = 2; // Inherits from scope above (creating a closure)
        moo = 3; // Global
    }())
}

/* global scope */
var local = true;
var global = true;

function outer() {
    /* local scope */
    var local = true;
    var global = false;

    /* nearest scope = outer */
    local = !global;

    function inner() {
        /* nearest scope = outer */
        local = false;
        global = false;

        /* nearest scope = undefined */
        /* defaults to defining a global */
        public = global;
    }
}