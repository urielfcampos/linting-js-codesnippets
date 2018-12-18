arr.includes(obj);

function include(arr,obj) {
    return (arr.indexOf(obj) != -1);
}

if (!Array.prototype.indexOf)
{

     Array.prototype.indexOf = function(searchElement /*, fromIndex */)

  {


  "use strict";

  if (this === void 0 || this === null)
    throw new TypeError();

  var t = Object(this);
  var len = t.length >>> 0;
  if (len === 0)
    return -1;

  var n = 0;
  if (arguments.length > 0)
  {
    n = Number(arguments[1]);
    if (n !== n)
      n = 0;
    else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0))
      n = (n > 0 || -1) * Math.floor(Math.abs(n));
  }

  if (n >= len)
    return -1;

  var k = n >= 0
        ? n
        : Math.max(len - Math.abs(n), 0);

  for (; k < len; k++)
  {
    if (k in t && t[k] === searchElement)
      return k;
  }
  return -1;
};

}

if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (obj, fromIndex) {
      if (fromIndex == null) {
          fromIndex = 0;
      } else if (fromIndex < 0) {
          fromIndex = Math.max(0, this.length + fromIndex);
      }
      for (var i = fromIndex, j = this.length; i < j; i++) {
          if (this[i] === obj)
              return i;
      }
      return -1;
    };
  }

  Array.prototype.hasObject = (
    !Array.indexOf ? function (o)
    {
      var l = this.length + 1;
      while (l -= 1)
      {
          if (this[l - 1] === o)
          {
              return true;
          }
      }
      return false;
    } : function (o)
    {
      return (this.indexOf(o) !== -1);
    }
  ); 