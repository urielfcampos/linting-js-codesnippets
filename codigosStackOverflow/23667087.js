var outerScopeVar;
helloCatAsync();
alert(outerScopeVar);

function helloCatAsync() {
    setTimeout(function() {
        outerScopeVar = 'Nya';
    }, Math.random() * 2000);
}

// 1. Call helloCatAsync passing a callback function,
//    which will be called receiving the result from the async operation
helloCatAsync(function(result) {
    // 5. Received the result from the async function,
    //    now do whatever you want with it:
    alert(result);
});

// 2. The "callback" parameter is a reference to the function which
//    was passed as argument from the helloCatAsync call
function helloCatAsync(callback) {
    // 3. Start async operation:
    setTimeout(function() {
        // 4. Finished async operation,
        //    call the callback passing the result as argument
        callback('Nya');
    }, Math.random() * 2000);
}

// 1. Call helloCatAsync passing a callback function,
//    which will be called receiving the result from the async operation
console.log("1. function called...")
helloCatAsync(function(result) {
    // 5. Received the result from the async function,
    //    now do whatever you want with it:
    console.log("5. result is: ", result);
});

// 2. The "callback" parameter is a reference to the function which
//    was passed as argument from the helloCatAsync call
function helloCatAsync(callback) {
    console.log("2. callback here is the function passed as argument above...")
    // 3. Start async operation:
    setTimeout(function() {
    console.log("3. start async operation...")
    console.log("4. finished async operation, calling the callback, passing the result...")
        // 4. Finished async operation,
        //    call the callback passing the result as argument
        callback('Nya');
    }, Math.random() * 2000);
}