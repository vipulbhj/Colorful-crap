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
      chrome.storage.sync.get('colourfulCrapStorage', function(items) {
        var quotes = items['colourfulCrapStorage'];
        quotes[author] = quotes[author] || [];
        quotes[author].push(quote);
        chrome.storage.sync.set(items, function() {
          alert('Quote added successfully');
        });
      });
    }
  });
});
