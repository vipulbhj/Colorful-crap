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
            alert(author);
            chrome.storage.sync.get(null,function(items) {
                var keys = Object.keys(items);
                var found = false;
                for(var i=0,l=keys.length;i<l;i++) {
                    if(keys[i] === author) {
                        found = true;
                        break;
                    }
                }
                if(found) {
                    items[author].push(quote);
                }
                else {
                    var ob = {};
                    ob[author] = [quote];
                    chrome.storage.sync.set(ob);
                }
                // console.log(items);
            });
        }
    });
});