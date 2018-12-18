$.cookie("test", 1);
$.removeCookie("test");
$.cookie("test", 1, { expires : 10 });

$.cookie("test", 1, {
    expires : 10,           // Expires in 10 days
 
    path    : '/',          // The value of the path attribute of the cookie
                            // (Default: path of page that created the cookie).
 
    domain  : 'jquery.com', // The value of the domain attribute of the cookie
                            // (Default: domain of page that created the cookie).
 
    secure  : true          // If set to true the secure attribute of the cookie
                            // will be set and the cookie transmission will
                            // require a secure protocol (defaults to false).
 });
 var cookieValue = $.cookie("test");
 var cookieValue = $.cookie("test", { path: '/foo' });