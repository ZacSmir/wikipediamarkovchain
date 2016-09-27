var title = "#game-input".val()
console.log(title)
getWikiIntro(title, function(text) {
  console.log(text)
  return text
})