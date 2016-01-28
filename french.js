


var Dictionary = (function (prevDictionary) {

	var frenchLexicon = {
		"merry":"joyeux", 
		"christmas":"noël", 
		"birthday":"anniversaire",	
		"year":"an",
		"day":"jour", 
		"hello":"salut",
		"thank":"remercier",
		"you":"toi",
		"beer":"bière",
		"people":"personnes",
		"goodbye": "au revoir",	
		"crazy":"fou",
		"new":"neuf", 
		"good":"bien",
		"happy":"content", 
		"best":"meilleur",	
		"are":"sommes",
		"and":"et", 
		"this":"ce",
		"the":"la",

	};
	
	prevDictionary.getFrenchLexicon = function() {
		return frenchLexicon;
	};

	prevDictionary.translateToFrench = function(userInput) {
		//translate userInput to French

		//convert user Input to all lowerCase
		userInput = userInput.toLowerCase();
		for (var key in frenchLexicon) {
			userInput = userInput.replace(key, frenchLexicon[key]);
	}
	return Dictionary.handleCaps(userInput);
	};
	
	return prevDictionary;
})(Dictionary);






var Dictionary = (function (prevDictionary) {

	var frenchLexicon = {
		"merry":"joyeux", 
		"christmas":"noël", 
		"birthday":"anniversaire",	
		"year":"an",
		"day":"jour", 
		"hello":"salut",
		"thank":"remercier",
		"you":"toi",
		"beer":"bière",
		"people":"personnes",
		"goodbye": "au revoir",	
		"crazy":"fou",
		"new":"neuf", 
		"good":"bien",
		"happy":"content", 
		"best":"meilleur",	
		"are":"sommes",
		"and":"et", 
		"this":"ce",
		"the":"la",

	};

	prevDictionary.translateFromFrench = function(userInput) {
		//translate userInput to French

		//convert user Input to all lowerCase
		userInput = userInput.toLowerCase();
		for (var key in frenchLexicon) {
			userInput = userInput.replace(frenchLexicon[key], key );
	}
	return Dictionary.handleCaps(userInput);
	};
	
	return prevDictionary;
})(Dictionary);






