// javascript 
//
/// This page allows the for the selection of class
//

// INITIALIZES THE EVENT LISTENERS 
//

//initialize localStorage
localStorage = window.localStoraage;



var playChar = {
	name: "" ,
	charClass: "",
	lvl: 1,
	hp: 0,
	atk: 0,
	def: 0,
	crit: 0,
}
	var warrClassSelectObj = document.getElementById("warr-select-box").addEventListener("click", function () {
		playChar.charClass="warrior";
		localStorageClassStore(playChar.charClass);
		gamePlayScreen();
	

		});

	var mageClassSelectObj = document.getElementById("mage-select-box").addEventListener("click", function() {
		playChar.charClass="mage";
		localStorageClassStore(playChar.charClass);
		gamePlayScreen();
			
	});


	var archerClassSelectObj = document.getElementById("archer-select-box").addEventListener("click", function() {
		playChar.charcClass="archer";
		localStorageClassStore(playChar.charClass);
		gamePlayScreen();

	});


function createWarrior() {
	// name will pulled from localstorage bassed on "submitted" data
	playChar.name = "Warrior-name-test"
	playChar.hp = 15;
	playChar.atk = 5;
	playChar.def = 3;
	playChar.crit = 0;

}

function localStorageClassStore(charClass) {
	localStorage.setItem("playCharClass", charClass);
}

function gamePlayScreen() {

	var bodyGrab = document.getElementById("main-body");
	// Clean off the screen and update it correctly.
	bodyGrab.innerHTML = "<div>";

}