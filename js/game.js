var SCORE = 0;
var SCORETXT;
var stars;
var star;

var d = 50;
//var circleD = (d * 2)

var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'wrapper', {
	preload: preload,
	create: create,
	update: update
});

function preload() {
	game.load.image('sky', 'images/sky.png');
	game.load.image('star', 'images/star.png');
	game.load.audio('cling', 'audio/diamond.mp3')
}

function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE);
	//	game.physics.arcade.gravity.y = 320;

	SCORETXT = game.add.text(16, 16, 'Score: 0', {
		fontSize: '30px',
		fill: '#222'
	});

	height = game.world.height;
	width = game.world.width;

	this.game.canvas.id = 'game';
	game.stage.backgroundColor = '#7ec0ee';
	cling = this.game.add.audio('cling');

	graphics = game.add.graphics(10, 10);
	graphics.lineStyle(0);
	graphics.beginFill('#222222', 1);
	graphics.drawCircle(game.world.centerX, game.world.centerY, d);
	graphics.endFill();

	window.graphics = graphics;

	stars = game.add.group();
	stars.enableBody = true;
	stars.inputEnabled = true;
	//	stars.body.allowGravity = true;
	//	starArray = [star, star2, star3, star4, star5, star6, star7, star8];

	star = stars.create(Math.floor(Math.random() * 300), 200, 'star');
	star2 = stars.create(Math.floor(Math.random() * 500), Math.floor(Math.random() * 400), 'star');
	star3 = stars.create(Math.floor(Math.random() * 500), Math.floor(Math.random() * 450), 'star');
	star4 = stars.create(Math.floor(Math.random() * 500), Math.floor(Math.random() * 250), 'star');
	star5 = stars.create(Math.floor(Math.random() * 500), Math.floor(Math.random() * 350), 'star');
	star6 = stars.create(Math.floor(Math.random() * 500), Math.floor(Math.random() * 300), 'star');
	star7 = stars.create(Math.floor(Math.random() * 500), Math.floor(Math.random() * 600), 'star');
	star8 = stars.create(Math.floor(Math.random() * 500), Math.floor(Math.random() * 344), 'star');
	star9 = stars.create(Math.floor(Math.random() * 500), Math.floor(Math.random() * 444), 'star');
	star10 = stars.create(Math.floor(Math.random() * 500), Math.floor(Math.random() * 304), 'star');

	star.lifespan = 2900;
	star2.lifespan = 2900;
	star3.lifespan = 2900;
	star4.lifespan = 2900;
	star5.lifespan = 2900;
	star6.lifespan = 2900;
	star7.lifespan = 2900;
	star8.lifespan = 2900;
	star9.lifespan = 2900;
	star10.lifespan = 2900;


	star.events.onInputDown.add(starClick, this);
	star2.events.onInputDown.add(starClick, this);
	star3.events.onInputDown.add(starClick, this);
	star4.events.onInputDown.add(starClick, this);
	star5.events.onInputDown.add(starClick, this);
	star6.events.onInputDown.add(starClick, this);
	star7.events.onInputDown.add(starClick, this);
	star8.events.onInputDown.add(starClick, this);
	star9.events.onInputDown.add(starClick, this);
	star10.events.onInputDown.add(starClick, this);

	star.inputEnabled = true;
	star2.inputEnabled = true;
	star3.inputEnabled = true;
	star4.inputEnabled = true;
	star5.inputEnabled = true;
	star6.inputEnabled = true;
	star7.inputEnabled = true;
	star8.inputEnabled = true;
	star9.inputEnabled = true;
	star10.inputEnabled = true;


}

var starEmitter = function (x, y, size) {
	star = stars.create(x, y, 'star');
	game.physics.arcade.enable(star);
	star.scale.setTo(size, size);
	star.lifespan = 3000;
	star.events.onInputDown.add(starClick, this);

	return star;
}

starInt = setInterval(function () {
	star = stars.create(Math.floor(Math.random() * 300), 200, 'star');
	star2 = stars.create(Math.floor(Math.random() * 500), Math.floor(Math.random() * 400), 'star');
	star3 = stars.create(Math.floor(Math.random() * 500), Math.floor(Math.random() * 450), 'star');
	star4 = stars.create(Math.floor(Math.random() * 700), Math.floor(Math.random() * 250), 'star');
	star5 = stars.create(Math.floor(Math.random() * 500), Math.floor(Math.random() * 350), 'star');
	star6 = stars.create(Math.floor(Math.random() * 800), Math.floor(Math.random() * 300), 'star');
	star7 = stars.create(Math.floor(Math.random() * 500), Math.floor(Math.random() * 600), 'star');
	star8 = stars.create(Math.floor(Math.random() * 300), Math.floor(Math.random() * 344), 'star');
	star9 = stars.create(Math.floor(Math.random() * 500), Math.floor(Math.random() * 444), 'star');
	star10 = stars.create(Math.floor(Math.random() * 500), Math.floor(Math.random() * 304), 'star');

	star.lifespan = 3000;
	star2.lifespan = 3000;
	star3.lifespan = 3000;
	star4.lifespan = 3000;
	star5.lifespan = 3000;
	star6.lifespan = 3000;
	star7.lifespan = 3000;
	star8.lifespan = 3000;
	star9.lifespan = 3000;
	star10.lifespan = 3000;


	star.events.onInputDown.add(starClick, this);
	star2.events.onInputDown.add(starClick, this);
	star3.events.onInputDown.add(starClick, this);
	star4.events.onInputDown.add(starClick, this);
	star5.events.onInputDown.add(starClick, this);
	star6.events.onInputDown.add(starClick, this);
	star7.events.onInputDown.add(starClick, this);
	star8.events.onInputDown.add(starClick, this);
	star9.events.onInputDown.add(starClick, this);
	star10.events.onInputDown.add(starClick, this);

	star.inputEnabled = true;
	star2.inputEnabled = true;
	star3.inputEnabled = true;
	star4.inputEnabled = true;
	star5.inputEnabled = true;
	star6.inputEnabled = true;
	star7.inputEnabled = true;
	star8.inputEnabled = true;
	star9.inputEnabled = true;
	star10.inputEnabled = true;
}, 3000)


function starClick(star, pointer) {
	cling.play();
	star.kill();
	SCORE += 10;
	SCORETXT.text = 'Score: ' + SCORE;
}

function nextLevel() {
	if (SCORE == 500) {
		alert('Next')
	}
}

function growBH() {

	graphics = game.add.graphics(10, 10);
	graphics.lineStyle(0);
	graphics.beginFill('#222222', 1);
	graphics.drawCircle(game.world.centerX, game.world.centerY, d);
	graphics.endFill();

	console.log(circleD);


}

bhInt = setInterval(function () {
	graphics = game.add.graphics(10, 10);
	graphics.lineStyle(0);
	graphics.beginFill('#222222', 1);
	graphics.drawCircle(game.world.centerX, game.world.centerY, (d += 50));
	graphics.endFill();

}, 1500)

function update() {
	//	nextLevel();
}