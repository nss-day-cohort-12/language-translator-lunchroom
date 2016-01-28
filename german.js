var Dictionary = (function() {

  var germanLexicon = {
    "good": "gut",
    "christmas": "Weihnachten",
    "happy": "lustig",
    "new": "neu",
    "year": "Jahr",
    "beer": "Bier",
    "hello": "hallo",
    "you": "du",
    "the": "der",
    "birthday": "Geburtstag",
    "anniversary": "Jahrestag",
    "and": "und"
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
      
      userInput = userInput[0].toUpperCase() + userInput.slice(1);
      
      
      for (var i = 0; i < userInput.length; i++) {
        if (userInput[i] === "." || userInput[i] === "!" || userInput === "?"){
          var j = i + 1;
          while(userInput[j] === " "){
            j++;
          }
          userInput = userInput.slice(0, j) + userInput[j].toUpperCase() + userInput.slice(j+1);
        }
      }

      return userInput;
    }
  };

})();