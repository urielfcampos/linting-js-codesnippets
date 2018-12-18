$.when(ajax1(), ajax2(), ajax3(), ajax4()).done(function(a1, a2, a3, a4){
    // the code here will be executed when all four ajax requests resolve.
    // a1, a2, a3 and a4 are lists of length 3 containing the response text,
    // status, and jqXHR object for each of the four ajax calls respectively.
});

function ajax1() {
    // NOTE:  This function must return the value 
    //        from calling the $.ajax() method.
    return $.ajax({
        url: "someUrl",
        dataType: "json",
        data:  yourJsonData,            
        ...
    });
}

