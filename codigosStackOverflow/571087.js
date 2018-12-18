$('#foo').click(function() { console.log('clicked!') });

var clickEvents = $('#foo').data("events").click;
jQuery.each(clickEvents, function(key, value) {
  console.log(value) // prints "function() { console.log('clicked!') }"
})

var clickEvents = $('#foo').data("events").click;
jQuery.each(clickEvents, function(key, handlerObj) {
  console.log(handlerObj.handler) // prints "function() { console.log('clicked!') }"
})

var clickEvents = $._data($('#foo')[0], "events").click;
jQuery.each(clickEvents, function(key, handlerObj) {
  console.log(handlerObj.handler) // prints "function() { console.log('clicked!') }"
})
