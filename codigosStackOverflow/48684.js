$(document).ready(function() {
    $("a").click(function(event) {
        alert(event.target.id);
    });
});

$(document).ready(function() {
    $("a").click(function(event) {
        // this.append wouldn't work
        $(this).append(" Clicked");
    });
});

