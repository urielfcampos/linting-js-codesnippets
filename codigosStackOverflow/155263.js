$("#id_of_textbox").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#id_of_button").click();
    }
});
$("#pw").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#myButton").click();
    }
});

$("#myButton").click(function() {
  alert("Button code executed.");
});

document.getElementById("id_of_textbox")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("id_of_button").click();
    }
});

document.getElementById("pw")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("myButton").click();
    }
});

function buttonCode()
{
  alert("Button code executed.");
}