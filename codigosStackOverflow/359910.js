window["functionName"](arguments);

window["My.Namespace.functionName"](arguments); // fail

window["My"]["Namespace"]["functionName"](arguments); // succeeds

function executeFunctionByName(functionName, context /*, args */) {
    var args = Array.prototype.slice.call(arguments, 2);
    var namespaces = functionName.split(".");
    var func = namespaces.pop();
    for(var i = 0; i < namespaces.length; i++) {
      context = context[namespaces[i]];
    }
    return context[func].apply(context, args);
  }

  executeFunctionByName("My.Namespace.functionName", window, arguments);
  
  executeFunctionByName("Namespace.functionName", My, arguments); 