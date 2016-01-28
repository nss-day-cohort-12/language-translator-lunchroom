var Dictionary = (function() {

  var germanLexicon = {
    "good": "gut",
    "christmas": "Weihnachten",
    "happy": "lustig",
    "new": "neu",
    "year": "Jahr",
    "beer": "Bier",
    "hello": "hallo",
    "is": "ist",
    "you": "du",
    "the": "der",
    "birthday": "Geburtstag",
    "anniversary": "Jahrestag",
    "and", "und"
  };

  return {
    getGermanLexicon: function() {
      return germanLexicon;
    },
    translateToGerman: function(userInput) {
      //convert user Input to all lowerCase
      userInput = userInput.toLowerCase();

      //for each key in germanLexicon, replace with the key's value if found
      for (var key in germanLexicon){
        userInput = userInput.replace(key, germanLexicon[key]);
      }
      return userInput;
    }
  };

})();