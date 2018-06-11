// this is the code which will be injected into a given page...

// @TODO - improve functions and split into files
function triggerUnblock() {
	// globo.com
	if(window.location.href.indexOf("globo.com") > -1) {
		unblockGlobo();
	}
}

function unblockGlobo() {
	if (document.getElementById('detecta-adblock')) { document.getElementById('detecta-adblock').remove() }
	if (document.getElementById('barreiraRegister')) { document.getElementById('barreiraRegister').remove() }
	if (document.getElementById('barreiraRegisterExclusiva')) { document.getElementById('barreiraRegisterExclusiva').remove() }
	if (document.getElementsByTagName("BODY")[0].style.overflow !== "auto") { document.getElementsByTagName("BODY")[0].style.overflow = "auto" }
}

// document ready
(function() {
	(document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading")
		? triggerUnblock()
		: document.addEventListener('DOMContentLoaded', triggerUnblock);
}());

// window load
window.onload = function(){ triggerUnblock() };
