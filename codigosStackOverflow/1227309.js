var classList = document.getElementById('divId').className.split(/\s+/);
for (var i = 0; i < classList.length; i++) {
    if (classList[i] === 'someClass') {
        //do something
    }
}

var classList = $('#divId').attr('class').split(/\s+/);
$.each(classList, function(index, item) {
    if (item === 'someClass') {
        //do something
    }
});
