
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
	// takes selector options and returns them as an Index
	var selector = document.getElementById("selectLanguage").selectedIndex;
	console.log("Selected Index: ", selector);

	//get text input value	
	var text = document.getElementById("text").value;
	console.log("Entered Text: ", text);	

	if (selector === 1) {
		console.log("Spanish");

		//take text string and run through translator
		var translatedText = Dictionary.translateToSpanish(text);
		console.log("translatedText", translatedText);

		//enters translated text to innerHTML
		document.getElementById('translatedText').innerHTML = translatedText;

    speak("es", translatedText);

		return;
	}
	else if (selector === 2) {
		console.log("French");
		
		//take text string and run through translator
		var translatedText = Dictionary.translateToFrench(text);
		console.log("translatedText", translatedText);

		//enters translated text to innerHTML
		document.getElementById('translatedText').innerHTML = translatedText;
		
		speak("fr", translatedText);

		return;
	}
	else if (selector === 3) {
		console.log("German");
	
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




