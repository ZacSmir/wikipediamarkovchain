var gameInput = $("#game-input");
var gameOutput  = $("#game-output");
gameInput.keydown(function(keydownEvent) {
  // the key code for enter is 13

  if (keydownEvent.keyCode == 13) {      
    parseText(gameInput.val()); 
    console.log(gameInput);
    gameInput.val("");
  }  
})



//var title = $("#gameinput").val()
//console.log(title)
//getWikiIntro(title, function(text) {
//  console.log(text)
//  return text
//})