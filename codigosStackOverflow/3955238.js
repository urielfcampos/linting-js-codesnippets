var myNode = document.getElementById("foo");
myNode.innerHTML = '';

var myNode = document.getElementById("foo");
while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
}
