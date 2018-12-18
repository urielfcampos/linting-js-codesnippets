var BreakException = {};

try {
  [1, 2, 3].forEach(function(el) {
    console.log(el);
    if (el === 2) throw BreakException;
  });
} catch (e) {
  if (e !== BreakException) throw e;
}
[1, 2, 3].some(function(el) {
    console.log(el);
    return el === 2;
  });