beforecreate: function (node, targetNode, type, to) {
    jQuery.get('http://example.com/catalog/create/' + targetNode.id + '?name=' + encode(to.inp[0].value),
  
    function (result) {
      if (result.isOk == false) 
          alert(result.message);
    });
  }