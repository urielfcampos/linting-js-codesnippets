var x = Number("1000")
var x = parseInt("1000", 10); // you want to use radix 10
    // so you get a decimal number even with a leading 0 and an old browser ([IE8, Firefox 20, Chrome 22 and older][1])
    var x = +"1000";
    var x = Math.floor("1000.01"); //floor automatically converts string to number

    var floor = Math.floor;
var x = floor("1000.01");
var floor = Math.floor;
var x = floor(parseFloat("1000.01"));
var round = Math.round;
var x = round("1000"); //equivalent to round("1000",0)