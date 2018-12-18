jQuery("<a>").prop("tagName"); //==> "A"
jQuery("<h1>").prop("tagName"); //==> "H1"
jQuery("<coolTagName999>").prop("tagName"); //==> "COOLTAGNAME999"

jQuery.fn.tagName = function() {
    return this.prop("tagName");
  };

  jQuery("<a>").tagName(); //==> "A"
  jQuery("<h1>").tagName(); //==> "H1"
  jQuery("<coolTagName999>").tagName(); //==> "COOLTAGNAME999"

  jQuery.fn.tagNameLowerCase = function() {
    return this.prop("tagName").toLowerCase();
  };
  
  jQuery("<a>").tagNameLowerCase(); //==> "a"
jQuery("<h1>").tagNameLowerCase(); //==> "h1"
jQuery("<coolTagName999>").tagNameLowerCase(); //==> "cooltagname999"