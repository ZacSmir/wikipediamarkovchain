var title = game-input.val()

getWikiIntro(title, function(text) {
  console.log(text)
  return text
}