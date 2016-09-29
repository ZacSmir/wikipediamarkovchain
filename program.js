var gameInput = $("#game-input");
var gameOutput  = $("#game-output");
gameInput.keydown(function(keydownEvent) {
  // the key code for enter is 13

  if (keydownEvent.keyCode == 13) {      
//    parseText(gameInput.val());
    var title = gameInput.val()
    console.log(title)
    gameInput.val("");
    
  }  
})

getWikiIntro(title, function(text) {

  return text

})


//var title = gameInput.val()
//console.log(title)
//getWikiIntro(title, function(text) {
//  console.log(text)
//  return text
//})