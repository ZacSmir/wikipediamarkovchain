gameinput.keydown(function(keydownEvent) {
  // the key code for enter is 13

  if (keydownEvent.keyCode == 13) {      
    parseText(gameinput.val()); 
    gameinput.val("");
    $("#gameinput").val
  }  
})

var title = $("#gameinput").val()
console.log(title)
getWikiIntro(title, function(text) {
  console.log(text)
  return text
})