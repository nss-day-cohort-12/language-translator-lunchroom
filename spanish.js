var Dictionary = (function(prevDictionary) {
	
	var spanishLexicon = {
		"merry":"merry",
		"christmas":"christmans",
		"and":"y", 
		"happy":"feliz",
		"new":"nuevo", 
		"year":"año",
		"hello":"hola",
		"thank":"gracias",
		"you":"usted",
		"birthday":"cumpleaños",
		"beer":"cerveza",
		"good":"bien",
		"people":"gente",
		"are":"están",
		"crazy":"loca"
	};

	prevDictionary.getSpanishLexicon = function() {
		return spanishLexicon;
	};
	
  prevDictionary.translateFromSpanish = function(userInput) {
      //convert user Input to all lowerCase
      userInput = userInput.toLowerCase();

      //for each value in germanLexicon, replace with the key if found
      for (var key in spanishLexicon){
        userInput = userInput.replace(spanishLexicon[key], key);
      }
      
      
      return Dictionary.handleCaps(userInput);
    }


	prevDictionary.translateToSpanish = function(userInput) {
      //translate userInput to Spanish

      //convert user Input to all lowerCase
    	userInput = userInput.toLowerCase();

      for (var key in spanishLexicon){
        userInput = userInput.replace(key, spanishLexicon[key]);
      }
      return Dictionary.handleCaps(userInput);
  	};
	
	return prevDictionary;

})(Dictionary);	





//prevDictionary.translateToSpanish = function(translate) {
//		word.push(newWord)
//	}




//  One team member creates a Github project and adds the others as collaborators.
//Each team member picks a language.
//Your project should have one HTML file that has a textarea, a select element with an option for each language, a button with a label of "Translate", and an empty DOM element into which the translated text will be inserted.
//The team must discuss and choose a single variable name that will hold all of the logic that the team creates (i.e. see the Sedan example above).
//Each team member will create one JavaScript file that contains one IIFE. Each teammate's IIFE will augment the other teammates' IIFEs.
//The lexicon should be a private variable that cannot be accessed by the other team member's module except through an accessor (getter) method.
//Each IIFE should expose, in its public interface, a method named translateTo{Language} (e.g. translateToSpanish or translateToFinnish) that accepts a single argument. That argument's value should be the text entered in by the user.
//The team should create an extra JavaScript file that handles interacting with the form elements and determining which method should be called.
	 