
// event listener for translate button
var button = document.getElementById("translate");
button.addEventListener("click", translate);


function speak(language, translatedText) {
  //speak the translated text in the given language
    var msg = new SpeechSynthesisUtterance(translatedText);
    msg.pitch = 0;
    msg.lang = language;
    window.speechSynthesis.speak(msg);
} 

function translate() {
	console.log("Translate");
	// takes toLanguage options and returns them as an Index
	var toLanguage = document.getElementById("toLanguage").value;
	console.log("toLanguage: ", toLanguage);

	//get reference to flag container
	var flagImage = document.getElementById('flag')

	//get text input value	
	var text = document.getElementById("text").value;
	console.log("Entered Text: ", text);

  var fromLanguage = document.getElementById("fromLanguage").value;
  console.log("from lanaguage", fromLanguage);

  if (fromLanguage === "English"){


  	if  (toLanguage === "Spanish") {
  		console.log("Spanish");

  		//adds spanish flag css
  		flagImage.classList.add('spanish');
  		
  		//take text string and run through translator
  		var translatedText = Dictionary.translateToSpanish(text);
  		console.log("translatedText", translatedText);

  		//enters translated text to innerHTML
  		document.getElementById('translatedText').innerHTML = translatedText;

      speak("es", translatedText);

  		return;
  	}
  	else if  (toLanguage === "French") {
  		console.log("French");

  		//adds french flag css
  		flagImage.classList.add('france');
  		
  		//take text string and run through translator
  		var translatedText = Dictionary.translateToFrench(text);
  		console.log("translatedText", translatedText);

  		//enters translated text to innerHTML
  		document.getElementById('translatedText').innerHTML = translatedText;
  		
  		speak("fr", translatedText);

  		return;
  	}
  	else if  (toLanguage === "German") {
  		console.log("German");

  		//adds german flag css
  		flagImage.classList.add('german');
  	
  		//take text string and run through translator
  		var translatedText = Dictionary.translateToGerman(text);
  		console.log("translatedText", translatedText);

  		//enters translated text to innerHTML
  		document.getElementById("translatedText").innerHTML = translatedText;

      speak("de", translatedText);

  		return;
  	}
  	else {
  		//adds speech reader function to alert
  		var msg = new SpeechSynthesisUtterance("Please Select a Language");
  	    msg.lang = 'zh-Hans';
  	    window.speechSynthesis.speak(msg);
  	    var msg = new SpeechSynthesisUtterance("Or for those who cannot speak Mandarin. Please Select a Language y'all");
  	    msg.lang = 'en-UK';
  	    window.speechSynthesis.speak(msg);
  	    alert("Please Select a Language");
  		}
  }




   else {

    if (fromLanguage === "Spanish" && toLanguage === "German"){
      var translatedText = Dictionary.translateToGerman(Dictionary.translateFromSpanish(text));

      //enters translated text to innerHTML
      document.getElementById("translatedText").innerHTML = translatedText;
      
      speak("de", translatedText);
    }

    else if (fromLanguage === "Spanish" && toLanguage === "French"){
      var translatedText = Dictionary.translateToFrench(Dictionary.translateFromSpanish(text));

      //enters translated text to innerHTML
      document.getElementById("translatedText").innerHTML = translatedText;
      
      speak("fr", translatedText);
    }


    else if (fromLanguage === "French" && toLanguage === "German"){
      var translatedText = Dictionary.translateToGerman(Dictionary.translateFromFrench(text));

      //enters translated text to innerHTML
      document.getElementById("translatedText").innerHTML = translatedText;
      
      speak("de", translatedText);
    }

    else if (fromLanguage === "French" && toLanguage === "Spanish"){
      var translatedText = Dictionary.translateToSpanish(Dictionary.translateFromFrench(text));

      //enters translated text to innerHTML
      document.getElementById("translatedText").innerHTML = translatedText;
      
      speak("es", translatedText);
    }

    else if (fromLanguage === "German" && toLanguage === "Spanish"){
      var translatedText = Dictionary.translateToSpanish(Dictionary.translateFromGerman(text));

      //enters translated text to innerHTML
      document.getElementById("translatedText").innerHTML = translatedText;
      
      speak("es", translatedText);
    }

    else {
      var translatedText = Dictionary.translateToFrench(Dictionary.translateFromGerman(text));

      //enters translated text to innerHTML
      document.getElementById("translatedText").innerHTML = translatedText;
      
      speak("fr", translatedText);
    }

  }
}




