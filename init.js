var game = document.getElementById('game');
var canvas = game.getContext('2d');

game.width = 400;
game.height = 800;

var DOODLE_IMG = new Image();
var BUTTON_PAUSE = new Image();
DOODLE_IMG.src = "img/shin-chan.png";

var PLATEFORME1_IMG = new Image();
PLATEFORME1_IMG.src = "img/pinkBook.png";

var PLATEFORME2_IMG = new Image();
PLATEFORME2_IMG.src = "img/orangeBook.png";

var PLATEFORME3_IMG = new Image();
PLATEFORME3_IMG.src = "img/blueBook.png";

var PLATEFORME4_IMG = new Image();
PLATEFORME4_IMG.src = "img/brownBook.png";

var PLATEFORME5_IMG = new Image();
PLATEFORME5_IMG.src = "img/greenBook.png";

var PLATEFORME6_IMG = new Image();
PLATEFORME6_IMG.src = "img/yellowBook.png";

var PLATEFORME7_IMG = new Image();
PLATEFORME7_IMG.src = "img/lightGreenBook.png";

var PLATEFORME8_IMG = new Image();
PLATEFORME8_IMG.src = "img/purpleBook.png";

var PLATEFORME9_IMG = new Image();
PLATEFORME9_IMG.src = "img/redBook.png";

var FALL = 3;

var GAME_PAUSE = false;

var yMax = 0;
var yCurrent = 0;
var currentPoint = 0;