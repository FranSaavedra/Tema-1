/*
Write a function named helloWorld that:
takes 1 argument, a language code (e.g. "es", "de", "en")
returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
Call that function for each of the supported languages and log the result to make sure it works.*/

function helloWorld (lang) {
	if (lang == 'es'){
		document.write("Hola mundo" + "<br/>");
	}else if (lang == 'de') {
		document.write("Hallo Welt" + "<br/>");
	}else{
		document.write("Hello World" + "<br/>");
	}
}
helloWorld('en');
helloWorld('de');
helloWorld('es');
helloWorld();