
function Plateforme(x, y) {
	this.x = x;
	this.y = y;
	this.width = 79;
	this.height = 30;
	this.imgIdx = Math.floor(Math.random() * Math.floor(bookArray.length));;
	this.print = function() {
		canvas.drawImage(bookArray[this.imgIdx], this.x, this.y);
	}
}

function printPlateformes(pf) {
	for(var i = 0; i < pf.length; i++) {
		pf[i].print();
	}
}

function colisionManage(hero) {
	var pf = plateformes;
	for(var i = 0; i < pf.length; i++) {		
		if((hero.x >= pf[i].x && hero.x <= (pf[i].x + pf[i].width)) 
		|| ( (hero.x + hero.width) >= pf[i].x && (hero.x + hero.width) <= (pf[i].x + pf[i].width) )) {
			if(((hero.y + hero.height) >= pf[i].y && (hero.y + hero.height) <= (pf[i].y + pf[i].height))) {
				if(hero.speed < 0) {
					hero.jump(30);
				}
			}
		}
	}
}

function upPlateformes(up) {
	var pf = plateformes;
	var continuer = true;
	for(var i = 0; i < pf.length; i++) {
		pf[i].y += up;
	}
	while(continuer == true) {
		if(pf[0].y >= game.height+10) {
			pf.shift();
		} else {
			continuer = false;
		}
		
	}
}

function DIE() {
	var pf = plateformes;
	for(var i = 0; i < pf.length; i++) {

		pf[i].y -= 100;
	}
	dieCounter ++
	if(dieCounter >= 8){
		document.getElementById('gameover').innerHTML = 'GAME OVER<br> Score : ' + currentPoint;
	}
}

function createPlateformes(begin, end) {
	var continuer = true;
	if(yMax <= 2500) {
		if(begin == 0) {
			plateformes.push(new Plateforme(150, 580));
		}
		while(continuer == true) {
			var y = rand(yMax+50, yMax+100);
			var x = rand(0, game.width - 79/2);
			yMax = y;
			y = game.height-y;
			plateformes.push(new Plateforme(x, y));
			if(yMax >= end) {
				continuer = false;
			}
		}
	}
	 else {
		while(continuer == true) {
			var y = rand(yMax+100, yMax+160);
			var x = rand(0, game.width);
			yMax = y;
			y = game.height-y;
			plateformes.push(new Plateforme(x, y));
			if(yMax <= end) {
				continuer = false;
			}
		}
	}
}