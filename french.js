var Dictionary = (function (prevDictionary) {

	var frenchLexicon = {
		"merry":"joyeux", 
		"christmas":"noël", 
		"and":"et", 
		"happy":"content", 
		"new":"neuf", 
		"year":"an",
		"hello":"salut",
		"thank":"remercier",
		"you":"toi",
		"birthday":"anniversaire",
		"beer":"bière",
		"is":"est",
		"good":"bien",
		"people":"personnes",
		"are":"sommes",
		"crazy":"fou"
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
	return userInput;
	};
	
	return prevDictionary;
})(Dictionary);




