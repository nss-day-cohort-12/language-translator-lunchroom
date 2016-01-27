var Dictionary = (function() {

  var germanLexicon = {
    "good": "gut",
    "christmas": "Weihnachten",
    "happy": "lustig",
    "new": "neu",
    "year": "Jahr",
    "beer": "Bier"
  };

  return {
    getGermanLexicon: function() {
      return germanLexicon;
    },
    translateToGerman: function(userInput) {
      //translate userInput to German

      //convert user Input to all lowerCase
      userInput = userInput.toLowerCase();

      for (var key in germanLexicon){
        userInput = userInput.replace(key, germanLexicon[key]);
      }
      return userInput;
    }
  };

})();