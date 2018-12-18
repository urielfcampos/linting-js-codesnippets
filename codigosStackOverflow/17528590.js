TrelloClipboard = new class
  constructor: ->
    @value = ""

    $(document).keydown (e) =>
      # Only do this if there's something to be put on the clipboard, and it
      # looks like they're starting a copy shortcut
      if !@value || !(e.ctrlKey || e.metaKey)
        return

      if $(e.target).is("input:visible,textarea:visible")
        return

      # Abort if it looks like they've selected some text (maybe they're trying
      # to copy out a bit of the description or something)
      if window.getSelection?()?.toString()
        return

      if document.selection?.createRange().text
        return

      _.defer =>
        $clipboardContainer = $("#clipboard-container")
        $clipboardContainer.empty().show()
        $("<textarea id='clipboard'></textarea>")
        .val(@value)
        .appendTo($clipboardContainer)
        .focus()
        .select()

    $(document).keyup (e) ->
      if $(e.target).is("#clipboard")
        $("#clipboard-container").empty().hide()

  set: (@value) ->

