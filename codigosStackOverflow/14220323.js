function findItem() {
    var item;
    while(item_not_found) {
        // search
    }
    return item;
}

var item = findItem();

// Do something with item
doSomethingElse();

findItem(function(item) {
    // Do something with item
});
doSomethingElse();

// Using 'superagent' which will return a promise.
var superagent = require('superagent')

// This is isn't declared as `async` because it already returns a promise
function delay() {
  // `delay` returns a promise
  return new Promise(function(resolve, reject) {
    // Only `delay` is able to resolve or reject the promise
    setTimeout(function() {
      resolve(42); // After 3 seconds, resolve the promise with value 42
    }, 3000);
  });
}


async function getAllBooks() {
  try {
    // GET a list of book IDs of the current user
    var bookIDs = await superagent.get('/user/books');
    // wait for 3 seconds (just for the sake of this example)
    await delay();
    // GET information about each book
    return await superagent.get('/books/ids='+JSON.stringify(bookIDs));
  } catch(error) {
    // If any of the awaited promises was rejected, this catch block
    // would catch the rejection reason
    return null;
  }
}

// Start an IIFE to use `await` at the top level
(async function(){
  let books = await getAllBooks();
  console.log(books);
})();
var result = foo();
// Code that depends on 'result'

foo(function(result) {
    // Code that depends on 'result'
});

function myCallback(result) {
    // Code that depends on 'result'
}

foo(myCallback);

function foo(callback) {
    $.ajax({
        // ...
        success: callback
    });
}

function foo(callback) {
    $.ajax({
        // ...
        success: function(response) {
            // For example, filter the response
            callback(filtered_response);
        }
    });
}

function delay() {
    // `delay` returns a promise
    return new Promise(function(resolve, reject) {
      // Only `delay` is able to resolve or reject the promise
      setTimeout(function() {
        resolve(42); // After 3 seconds, resolve the promise with value 42
      }, 3000);
    });
  }
  
  delay()
    .then(function(v) { // `delay` returns a promise
      console.log(v); // Log the value once it is resolved
    })
    .catch(function(v) {
      // Or do something else if it is rejected 
      // (it would not happen in this example, since `reject` is not called).
    });

    function ajax(url) {
        return new Promise(function(resolve, reject) {
          var xhr = new XMLHttpRequest();
          xhr.onload = function() {
            resolve(this.responseText);
          };
          xhr.onerror = reject;
          xhr.open('GET', url);
          xhr.send();
        });
      }
      
      ajax("/echo/json")
        .then(function(result) {
          // Code depending on result
        })
        .catch(function() {
          // An error occurred
        });

        function ajax() {
            return $.ajax(...);
        }
        
        ajax().done(function(result) {
            // Code depending on result
        }).fail(function() {
            // An error occurred
        });

        function checkPassword() {
            return $.ajax({
                url: '/password',
                data: {
                    username: $('#username').val(),
                    password: $('#password').val()
                },
                type: 'POST',
                dataType: 'json'
            });
        }
        
        if (checkPassword()) {
            // Tell the user they're logged in
        }

        checkPassword()
.done(function(r) {
    if (r) {
        // Tell the user they're logged in
    } else {
        // Tell the user their password was bad
    }
})
.fail(function(x) {
    // Tell the user something bad happened
});

function foo() {
    var jqXHR = $.ajax({
        //...
        async: false
    });
    return jqXHR.responseText;
}