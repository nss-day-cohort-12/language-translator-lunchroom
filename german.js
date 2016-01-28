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
    handleCaps: function(userInput) {
      //trim whitespace from before and after userInput
      userInput = userInput.trim();

      for (var i = 0; i < userInput.length - 1; i++) {
        if (userInput[i] === "." || userInput[i] === "!" || userInput === "?"){
          var j = i + 1;
          while(userInput[j] === " "){
            //find the next letter to capitalize
            j++;
          }
          //console.log("j", j);
          //console.log("userInput[j]", userInput[j]);
          userInput = userInput.slice(0, j) + userInput[j].toUpperCase() + userInput.slice(j+1);
        }
      }
      return userInput;
    },
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
      
      return Dictionary.handleCaps(userInput);
    }
  }

})();