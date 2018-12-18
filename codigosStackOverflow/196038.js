document.getElementById("MyElement").classList.add('MyClass');

document.getElementById("MyElement").classList.remove('MyClass');

if ( document.getElementById("MyElement").classList.contains('MyClass') )

document.getElementById("MyElement").classList.toggle('MyClass');

document.getElementById("MyElement").className = "MyClass";

document.getElementById("MyElement").className += " MyClass";

document.getElementById("MyElement").className =
   document.getElementById("MyElement").className.replace
      ( /(?:^|\s)MyClass(?!\S)/g , '' )
/* Code wrapped for readability - above is all one statement */

(?:^|\s) # Match the start of the string, or any single whitespace character

MyClass  # The literal text for the classname to remove

(?!\S)   # Negative lookahead to verify the above is the whole classname
         # Ensures there is no non-space character following
         # (i.e. must be end of string or a space)

         if ( document.getElementById("MyElement").className.match(/(?:^|\s)MyClass(?!\S)/) )

         $('#MyElement').addClass('MyClass');

$('#MyElement').removeClass('MyClass');

if ( $('#MyElement').hasClass('MyClass') )

$('#MyElement').toggleClass('MyClass');
$('#MyElement').click(changeClass);

$(':button:contains(My Button)').click(changeClass);