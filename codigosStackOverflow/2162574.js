$("#selectList").append(new Option("option text", "value"));

var o = new Option("option text", "value");
/// jquerify the DOM object 'o' so we can use the html method
$(o).html("option text");
$("#selectList").append(o);
