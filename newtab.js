$(function() {
	var quotesFetched = {};
	function getFourColor(index) {
		var arr = [];
		for(var i=0;i<4;i++) {
			if(index == 5)
				index = 0;
			arr.push(colors[index]);
			index++;
		}
		return arr;
	}

	function unnamed() {
		quoteKeys = Object.keys(quotesFetched);
		// console.log(quoteKeys);
		var lenColors = colors.length;
		var lenQuotes = quoteKeys.length;
		var randQuoteKey = Math.floor(Math.random() * 4631802156411384 % lenQuotes);
		var key = quoteKeys[randQuoteKey];
		// console.log(key);
		allQuotesByKey = quotesFetched[key];
		var lenQuoteByKey = allQuotesByKey.length;
		var randQuoteByKey = Math.floor(Math.random() * 9887008941393133 % lenQuoteByKey);
		var finalQuote = allQuotesByKey[randQuoteByKey];
		var finalQuoteSize = finalQuote.length;
		var partFour = Math.floor(finalQuoteSize/4);
		var randIndex = Math.floor(Math.random() * 122384694433594 % 4);
		var newColorArr = getFourColor(randIndex);
		var start = 0;
		var end = partFour;
		var quoteReCreated = '';
		for(var i=0;i<4;i++) {
			var select = '#color'+i;
			quoteReCreated += '<span id="color'+i+'">'+finalQuote.substring(start,end)+'</span>';
			$(select).css("color",newColorArr[i]);
			start = end;
			end = start+partFour+1;
		}
		$("#one").html(quoteReCreated);
		$("#author").text('-'+key);
		for(var i=0;i<4;i++) {
			var select = '#color'+i;
			$(select).css("color",newColorArr[i]);
		}

	}

	function start() {
		chrome.storage.sync.get(null,function(items) {
			quotesFetched = items;
			console.log(items);
			unnamed();
			// One min wait.
			setInterval(unnamed,60000);
		});
	}

	chrome.storage.onChanged.addListener(function() {
		location.reload();
	});

	setTimeout(start,100);
});