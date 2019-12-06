var plateformes = new Array();
var rightPressed = false;
var leftPressed = false;
var dieCounter = 0;
var bookArray = [PLATEFORME1_IMG, PLATEFORME2_IMG, PLATEFORME3_IMG, PLATEFORME4_IMG, PLATEFORME5_IMG, PLATEFORME6_IMG, PLATEFORME7_IMG, PLATEFORME8_IMG, PLATEFORME9_IMG];
createPlateformes(0, 100000);


var heros = new Hero();
heros.print();

function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function addPoint(point) {
	currentPoint += point;
	document.getElementById('score').innerHTML = 'Score: ' + currentPoint;
}

document.addEventListener('keydown', function(event){
	
	if( event.keyCode == 39){
		rightPressed = true;
	}
	else if( event.keyCode == 37){
		leftPressed = true;
	}
	else if( event.keyCode == 27 && dieCounter == 0 ){
		GAME_PAUSE = !GAME_PAUSE;
		document.getElementById('pause').innerHTML = 'PAUSE<br> Score : ' + currentPoint;
		if(!GAME_PAUSE)
		document.getElementById('pause').innerHTML = '';
	}
	else if( event.keyCode == 32 ){
		window.location.reload(false);
	}
	
});

document.addEventListener('keyup', function(event){
	
	if( event.keyCode == 39){
		rightPressed = false;
	}
	else if( event.keyCode == 37){
		leftPressed = false;
	}
});


function sceneUp() {
	var up = Math.floor((heros.y + 250) / 10); 
	addPoint(up);
	heros.y += up;
	upPlateformes(up);
}

function go() {
	if(GAME_PAUSE != true) {
		canvas.fillStyle = 'white';
		canvas.fillRect(0, 0, game.width, game.height);
		printPlateformes(plateformes);
		heros.go();
		if(heros.y <= 250) {
			sceneUp();	
		}
	}
}
heros.jump(30);
setInterval(go, 50);