var obj = {
    key1: value1,
    key2: value2
};
obj.key3 = "value3";
obj["key3"] = "value3";
var getProperty = function (propertyName) {
    return obj[propertyName];
};

getProperty("key1");
getProperty("key2");
getProperty("key3");
var arr = [];
var arr = new Array();