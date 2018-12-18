function cbWrapper(data, funct){
    if($("#myForm", data).length > 0)
        top.location.href="login.htm";//redirection
    else
        funct(data);
}

$.post("myAjaxHandler", 
       {
        param1: foo,
        param2: bar
       },
       function(data){
           cbWrapper(data, myActualCB);
       }, 
       "html"
);