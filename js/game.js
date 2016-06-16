var game = new Phaser.Game('100%', '100%', Phaser.AUTO, 'wrapper', {
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

	this.game.canvas.id = 'game';
	game.stage.backgroundColor = '#7ec0ee';

	//	star = game.add.image(0, 0, 'star');

	cling = this.game.add.audio('cling');

	//	emitter = game.add.emitter(0, 0, 100);
	//	emitter.makeParticles('star');
	//	emitter.gravity = 200;


	game.input.onDown.add(starClick, this);
}

function starClick(pointer) {
	//	emitter.x = pointer.x;
	//	emitter.y = pointer.y;
	//	emitter.start(true, 5000, null, 20);
	cling.play();
	star.kill();
}

function update() {}