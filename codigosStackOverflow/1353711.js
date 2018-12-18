if (Object.prototype.toString.call(d) === "[object Date]") {
    // it is a date
    if (isNaN(d.getTime())) {  // d.valueOf() could also work
      // date is not valid
    } else {
      // date is valid
    }
  } else {
    // not a date
  }

  function isValidDate(d) {
    return d instanceof Date && !isNaN(d);
  }
  var timestamp = Date.parse('foo');

if (isNaN(timestamp) == false) {
  var d = new Date(timestamp);
}