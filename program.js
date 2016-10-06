var title = "nothing"
var gameInput = $("#game-input");
var gameOutput  = $("#game-output");
gameInput.keydown(function(keydownEvent) {
  // the key code for enter is 13

  if (keydownEvent.keyCode == 13) {      
//    parseText(gameInput.val());
    var title = gameInput.val()
    console.log(title)
    gameInput.val("");
    
    getWikiIntro(title, function(text) {
  
      $("#output").html(text)
      _generate()
      generate()
      window.location.reload();
    })
    
  
    // Clears the source textbox
    function clear() { document.getElementById('in').value = ''; }

    // Writes to the output textbox
    function set(v) { document.getElementById('out').value = v; }

    
  }  
})



