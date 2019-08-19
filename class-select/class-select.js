// javascript 
//
/// This page allows the for the selection of class
//

// INITIALIZES THE EVENT LISTENERS 
//
debugger;
var warrClassSelectObj = document.getElementById("warr-class-select").addEventListener("click", function (){
	window.location.href = "../play-page/play-page.html";
	setPageWarr();
});

var mageClassSelectObj = document.getElementById("mage-class-select").addEventListener("click", function(){
	window.location.href = "..play-page/play-page.html";
	setPageMage();
})


var archerClassSelectObj = document.getElementById("archer-class-select").addEventListener("click", function(){
	window.location.href = "..play-page/play-page.htm";
	setPageArcher();
})
