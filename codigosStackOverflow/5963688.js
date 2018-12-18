<div id="foo">
 <button id="but" />
</div>

$("#foo").click(function() {
   // mouse click on div
});

$("#but").click(function(ev) {
   // mouse click on button
   ev.stopPropagation();
});

$("#but").click(function(event){
    event.preventDefault();
   });
  
  
  $("#foo").click(function(){
   alert("parent click event fired !");
  });

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<div id="foo">
  <button id="but">button</button>
</div>

$("#but").click(function(event){
    event.stopPropagation();
   });
  
  
  $("#foo").click(function(){
   alert("parent click event fired !");
  });

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<div id="foo">
  <button id="but">button</button>
</div>