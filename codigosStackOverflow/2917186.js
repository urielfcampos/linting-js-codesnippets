var newCodes = function() {
    var dCodes = fg.codecsCodes.rs;
    var dCodes2 = fg.codecsCodes2.rs;
    return [dCodes, dCodes2];
};

var codes = newCodes();
var dCodes = codes[0];
var dCodes2 = codes[1];

var newCodes = function() {
    var dCodes = fg.codecsCodes.rs;
    var dCodes2 = fg.codecsCodes2.rs;
    return {
        dCodes: dCodes,
        dCodes2: dCodes2
    };
};

var codes = newCodes();
var dCodes = codes.dCodes;
var dCodes2 = codes.dCodes2;
