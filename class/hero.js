function Hero() {
	this.x = 195;
	this.y = 500;
	this.speed = 0;
	this.width = 44;
	this.height = 63;
	this.print = function() {
		canvas.drawImage(DOODLE_IMG, this.x, this.y);
	}
	this.move = function(nx, ny) {
		this.x += nx;
		this.y += ny;
	};
	this.jump = function(initSpeed) {
		this.speed = initSpeed;
	};
	this.go = function() {
		if(this.x > game.width-this.width/2)
			this.x = -this.width/2;
		else if(this.x < -this.width/2) {
			this.x = game.width-this.width/2;
		}
		if( this.y > game.height){
			death = true;
			DIE();
		}
		this.move(15 * rightPressed - 15 * leftPressed, - this.speed);
		colisionManage(this);
		this.speed -= FALL;
		this.print();
	};
}