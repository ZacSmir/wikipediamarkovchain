//function getWikiIntro(title, processor) {
//  $.ajax({
//    method: "GET",
//    url: "http://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exlimit=max&explaintext&exintro&titles=" + title,    
//    dataType: "jsonp",
//    jsonp: "callback",
//    success: function(res) {
//      var pages = res.query && res.query.pages
//      if (pages) {
//        var pageKeys = Object.keys(pages);
//        var text = pages[pageKeys[0]].extract;          
//        var processed = processor(text);
//        $(".text-display").text(processed);
//      }                
//    }
//  })
//}