
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

	//get reference to flag container
	var flagImage = document.getElementById('flag')

	//get text input value	
	var text = document.getElementById("text").value;
	console.log("Entered Text: ", text);	

	if (selector === 1) {
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
	else if (selector === 2) {
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
	else if (selector === 3) {
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




