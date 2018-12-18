var myString = "something format_abc";
var myRegexp = /(?:^|\s)format_(.*?)(?:\s|$)/g;
var match = myRegexp.exec(myString);
console.log(match[1]); // abc

var myString = "something format_abc";
var myRegexp = /(?:^|\s)format_(.*?)(?:\s|$)/g;
match = myRegexp.exec(myString);
while (match != null) {
  // matched text: match[0]
  // match start: match.index
  // capturing group n: match[n]
  console.log(match[0])
  match = myRegexp.exec(myString);
}
function getMatches(string, regex, index) {
    index || (index = 1); // default to the first capturing group
    var matches = [];
    var match;
    while (match = regex.exec(string)) {
      matches.push(match[index]);
    }
    return matches;
  }
  
  
  // Example :
  var myString = 'something format_abc something format_def something format_ghi';
  var myRegEx = /(?:^|\s)format_(.*?)(?:\s|$)/g;
  
  // Get an array containing the first capturing group for every match
  var matches = getMatches(myString, myRegEx, 1);
  
  // Log results
  document.write(matches.length + ' matches found: ' + JSON.stringify(matches))
  console.log(matches);