$(function() {
  $("#button").click(function() {
    var author = $("#author").val();
    var quote = $("#quote").val();
    if(!author) {
      alert("Please provide a author");
    }
    else if(!quote) {
      alert("Please provide a quote");
    }
    else {
      chrome.storage.sync.get(null,function(items) {
        var keys = Object.keys(items);
        if(keys.include(author)) {
          items[author].push(quote);
        }
        else {
          chrome.storage.sync.set({author: quote});
        }
      });
    }
  });
});
