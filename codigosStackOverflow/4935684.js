var json = '{"result":true,"count":1}',
    obj = JSON.parse(json);

alert(obj.count);

/* or ES6 */

const json = '{"result":true,"count":1}' || {};
const { result, count } = JSON.parse(json);
alert(result);
alert(count);

var json = '{"result":true,"count":1}',
    obj = JSON && JSON.parse(json) || $.parseJSON(json);