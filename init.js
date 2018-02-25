var colors = [
	'#0a527a',
	'#962a49',
	'#9bae5d',
	'#887db4',
	'#cfa76a' 
	];

var quotes = {
	"Unknown":["The future depends on what you do today."
			],
	"Steve Jobs":["Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
					"That's been one of my mantras — focus and simplicity. Simple can be harder than complex: You have to work hard to get your thinking clean to make it simple. But it's worth it in the end because once you get there, you can move mountains."
			],
	"Bill Gates" : ["If you are born poor its not your mistake, But if you die poor its your mistake.",
					"I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it.",
					"Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
					"Be nice to nerds. Chances are you'll end up working for one."
			]		
};

function checkForFirstUse() { 
	chrome.storage.sync.get("Unknown",function(items) {
		if(typeof items["Unknown"] === 'undefined') {
			chrome.storage.sync.set(quotes,function() {
				console.log("Quotes have been initialized");
			});
		} 
	});
}
checkForFirstUse();


