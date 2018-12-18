// Restricts input for the given textbox to the given inputFilter.
function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
      textbox.addEventListener(event, function() {
        if (inputFilter(this.value)) {
          this.oldValue = this.value;
          this.oldSelectionStart = this.selectionStart;
          this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
          this.value = this.oldValue;
          this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        }
      });
    });
  }

 // Restrict input to digits and '.' by using a regular expression filter.
setInputFilter(document.getElementById("myTextBox"), function(value) {
    return /^\d*\.?\d*$/.test(value);
  });
  
  setInputFilter(document.getElementById("myTextBox"), function(value) {
    return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 1500);
  });

  