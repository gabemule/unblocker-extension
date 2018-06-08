// this is the code which will be injected into a given page...

(function() {

	if (document.getElementById('barreiraRegister')) {
		document.getElementById('barreiraRegister').remove();
	}
	
	if (document.getElementById('barreiraRegisterExclusiva')) {
		document.getElementById('barreiraRegisterExclusiva').remove();
	}
	
	document.getElementsByTagName("BODY")[0].style.overflow = "auto";

})();