this.$OuterDiv = $('<div></div>')
    .hide()
    .append($('<table></table>')
        .attr({ cellSpacing : 0 })
        .addClass("text")
    )
;
var userInput = window.prompt("please enter selector");
    $(userInput).hide();

    var a = $('<div>')
// a is [<div>​</div>​]
var b = $.parseHTML('<div>')
// b is [<div>​</div>​]
$('<script src="xss-attach.js"></script>')
// jQuery returns [<script src=​"xss-attach.js">​</script>​]
$.parseHTML('<script src="xss-attach.js"></script>')
// jQuery returns []

a.html('123')
// [<div>​123​</div>​]
b.html('123')
// TypeError: Object [object HTMLDivElement] has no method 'html'
$(b).html('123')
// [<div>​123​</div>​]