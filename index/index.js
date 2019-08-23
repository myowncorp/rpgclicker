// It all begins with this page. This is the initial transformation
	var playChar = {
	name: "" ,
	charClass: "",
	lvl: 1,
	hp: 0,
	atk: 0,
	def: 0,
	crit: 0,
	}	
	
loadStartPage();
// This is the first page that the player should see
function loadStartPage() {
	document.getElementById("main-body").innerHTML = 
		`<DOCTYPE! html>
		<html lang="EN">
		   <head>
			  <meta charset="utf-8" />
			  <link rel="stylesheet" type="text/css" href="index.css" />
		   </head>
		   <body id="main-body">
			<div id="grid-container">
				 <div id="title-main">
					Classic Rpg
				 </div>
				 <div id="start-button-button"><img src="graphics/start-button-1.png" alt="Start button" id="start-button"></img></div>
				 <div id="auto-blockout">
				 </div>
			  </div>
			 <script src="index.js"> </script>
		   </body>
		</html>`

	document.getElementById("start-button-button").addEventListener("click", loadClassSelect);
}


function loadClassSelect() {
	//This is the HTMl for the class selection page
	document.getElementById("main-body").innerHTML = 
		`<!DOCTYPE html>
		<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
			<head>
				<meta charset="utf-8" />
				<title>char-select-page</title>
				<link rel="stylesheet" type="text/css" href="class-select.css">

			</head>

			<body id="main-body">
			<div id="grid-container">
				<div id="place-holder-row"> </div>

	
				<div class="class-select" id="warr-select-box">
				Warrior
				</div>

				<div class="class-select" id="mage-select-box">
				Mage
				</div>

				<div class="class-select" id="archer-select-box">
				Archer
				</div>

			</div>
			<script src="index.js"></script>
			</body>
		</html>`

	localStorage = window.localStorage;

	document.getElementById("warr-select-box").addEventListener("click", function () {
		playChar.charClass="warrior";
		localStorageClassStore(playChar.charClass);
		gamePlayScreen();
	

		});

	 document.getElementById("mage-select-box").addEventListener("click", function() {
		playChar.charClass="mage";
		localStorageClassStore(playChar.charClass);
		gamePlayScreen();
			
	});


	document.getElementById("archer-select-box").addEventListener("click", function() {
		playChar.charcClass="archer";
		localStorageClassStore(playChar.charClass);
		gamePlayScreen();

	});

	function localStorageClassStore(charClass) {
	localStorage.setItem("playCharClass", charClass);

	}

}

function gamePlayScreen() {
	//this is the HTML that you play on
	document.getElementById("main-body").innerHTML=
		`<!DOCTYPE html>

		<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
		<head>
			<meta charset="utf-8" />
			<title>game-play-screen</title>
			<link rel="stylesheet" type="text/css" href="play-page.css" />
	
		</head>
		<body>
			<div id="grid-container">
				<div id="left-column">
					<!-- something like a menu list or something -->
					<div id=""></div>
				</div>
				<div id="central-column"> </div>

				<div id="right-column"> 
					<div id="stat-table">
						<div class="stat-table-row">
							<div class="stat-table-stat-name"> Health </div>
							<div class="stat-table-stat-current"> </div> 
							<div class="stat-table-stat-base"> </div>
						</div>
				</div>
	
	
		<script src="index.js"></script>
		</body>
		</html>`
	//create an Array of class stat-table-stat-current;
	var statMenuArray = document.getElementsByClassName("stat-table-stat-current");
	
	//load the stats based on the selected characters 
	charClassFirstTimeStatLoad();


	function charClassFirstTimeStatLoad(){
		if(playChar.charClass == "warrior"){
			createWarrior();

		} else if(playChar.charClass == "mage"){
			createMage();

		} else if(playChar.charClass == "archer"){
			createArcher();
		}
		var statMenuArray = document.getElementsByClassName("stat-table-stat-current");
		for(var i in statMenuArray)
		{
			statMenuArray[i].innerText = playChar.hp;
		}
	}

	function createWarrior() {
			playChar.name = "warrior-name-test";
			playChar.hp = 20;
			playChar.atk = 12;
			playChar.def = 5;
			playChar.crit = 0;
	}

	function createMage() {
			playChar.name = "mage-name-test";
			playChar.hp= 10;
			playChar.atk = 25;
			playChar.def = 0;
			playChar.crit = 5;
	}
	
	function createArcher() {
			playChar.name = "archer-name-test";
			playChar.hp= 15;
			playChar.atk = 20;
			playChar.def = 3;
			playChar.crit = 3;
	}
		
}
