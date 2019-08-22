
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

	var playChar = {
	name: "" ,
	charClass: "",
	lvl: 1,
	hp: 0,
	atk: 0,
	def: 0,
	crit: 0,
	}	
	
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

				<div id="right-column"> </div>
	
		<script src="play-page.js"></script>
		</body>
		</html>`	
}

