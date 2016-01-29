
// event listener for translate button
var button = document.getElementById("translate");
button.addEventListener("click", translate);

setInterval(function randomColorGen() {
var randomColor = '#' + (function co(lor){   return (lor +=
  [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
  && (lor.length == 6) ?  lor : co(lor); })('');
  
  // console.log();
  var h1 = document.querySelector('.h1');
  h1.style.color = randomColor;
  
}, 500);

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
	var flagImage = document.getElementById('flag');

	flagImage.classList.remove('spanish', 'german', 'france');

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
  	    speak("en-UK", "In Spanish that is.");
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
  		speak("en-UK", "In French that is.");
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
  	  speak("en-UK", "In German that is.");	
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


  //handle cases where fromLanguage is not English

   else {

    if (fromLanguage === "Spanish" && toLanguage === "German"){
      //adds german flag css
  	  flagImage.classList.add('german');

      var translatedText = Dictionary.translateToGerman(Dictionary.translateFromSpanish(text));

      //enters translated text to innerHTML
      document.getElementById("translatedText").innerHTML = translatedText;
      speak("en-UK", "In German that is.");
      speak("de", translatedText);

     
    }

    else if (fromLanguage === "Spanish" && toLanguage === "French"){
      //adds french flag css
  	  flagImage.classList.add('france');

      var translatedText = Dictionary.translateToFrench(Dictionary.translateFromSpanish(text));

      //enters translated text to innerHTML
      document.getElementById("translatedText").innerHTML = translatedText;
      speak("en-UK", "In French that is.");
      speak("fr", translatedText);

      
    }


    else if (fromLanguage === "French" && toLanguage === "German"){
      //adds german flag css
  	  flagImage.classList.add('german');
      var translatedText = Dictionary.translateToGerman(Dictionary.translateFromFrench(text));

      //enters translated text to innerHTML
      document.getElementById("translatedText").innerHTML = translatedText;
      speak("en-UK", "In German that is.");
      speak("de", translatedText);

    }

    else if (fromLanguage === "French" && toLanguage === "Spanish"){
      //adds spanish flag css
  	  flagImage.classList.add('spanish');
      var translatedText = Dictionary.translateToSpanish(Dictionary.translateFromFrench(text));

      //enters translated text to innerHTML
      document.getElementById("translatedText").innerHTML = translatedText;
      speak("en-UK", "In Spanish that is.");
      speak("es", translatedText);

    }

    else if (fromLanguage === "German" && toLanguage === "Spanish"){
      //adds spanish flag css
  	  flagImage.classList.add('spanish');
      var translatedText = Dictionary.translateToSpanish(Dictionary.translateFromGerman(text));

      //enters translated text to innerHTML
      document.getElementById("translatedText").innerHTML = translatedText;
      speak("en-UK", "In Spanish that is.");
      speak("es", translatedText);

    }

    else if (fromLanguage === "German" && toLanguage === "French") {
      //adds french flag css
  	  flagImage.classList.add('france');
      var translatedText = Dictionary.translateToFrench(Dictionary.translateFromGerman(text));

      //enters translated text to innerHTML
      document.getElementById("translatedText").innerHTML = translatedText;
      speak("en-UK", "In French that is.");
      speak("fr", translatedText);

    }
    else if (fromLanguage === toLanguage) {
    	var msg = new SpeechSynthesisUtterance("WHY ARE YOU TRYING TO TRANSLATE TO THE SAME LANGUAGE. LOOKS LIKE SOMEONE NEEDS TO GO BACK TO FIRST GRADE. IDIOT");

    	msg.lang = 'en-UK';
  	    window.speechSynthesis.speak(msg);
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
}




