function sortNumber(a,b) {
    return a - b;
}

var numArray = [140000, 104, 99];
numArray.sort(sortNumber);
alert(numArray.join(","));

numArray.sort((a, b) => a - b); // For ascending sort
numArray.sort((a, b) => b - a); // For descending sort