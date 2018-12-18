function htmlEncode(value){
    // Create a in-memory div, set its inner text (which jQuery automatically encodes)
    // Then grab the encoded contents back out. The div never exists on the page.
    return $('<div/>').text(value).html();
  }
  
  function htmlDecode(value){
    return $('<div/>').html(value).text();
  }

  