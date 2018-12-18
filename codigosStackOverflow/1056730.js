getDate() // Returns the date
getMonth() // Returns the month
getFullYear() // Returns the year
var d = new Date();
var curr_date = d.getDate();
var curr_month = d.getMonth() + 1; //Months are zero based
var curr_year = d.getFullYear();
console.log(curr_date + "-" + curr_month + "-" + curr_year);