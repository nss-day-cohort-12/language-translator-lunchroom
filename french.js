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
	// var dictionaryArray = Object.keys(frenchLexicon)
	// console.log(dictionaryArray);

	prevDictionary.getFrenchLexicon = function() {
		return frenchLexicon;
	},
	prevDictionary.translateToFrench = function(translate) {
		for (var englishWord in frenchLexicon) {
			console.log(englishWord);
		};
	}

	return prevDictionary;


})(Dictionary);


