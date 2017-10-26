export default class Enemy extends Phaser.Sprite {

    constructor({ game, x, y, asset, speed, health}) {
        super(game, x, y, asset);

        this.game = game;
        this.anchor.setTo(1);
        console.log(this.game.width);
        this.scale.setTo(this.game.width/1920, this.game.height/1080);
        this.health = health;
        this.maxHealth = health;
        this.game.physics.arcade.enable(this);
        this.animations.add('run', [0, 1, 2, 3, 4, 5, 6, 7], 20, true);
        this.play('run');

        this.shotSound = this.game.add.sound('enemyShot');

    }

    update() {
        if (this.position.x < this.game.width/4) {
            this.body.velocity.x = 0;
        }
        else if (this.position.x > 0.96 * this.game.world.width) {
            this.position.x = 0.96 * this.game.world.width - 2;
            this.body.velocity.x *= -1;
        }

        if (this.position.y - this.height / 2 > this.game.world.height) {
            this.kill();
        }
    }

    damage(amount) {
        super.damage(amount);
    }

    setBody({ x, y, health, speed }) {
        super.reset(x, y, health);
        this.body.velocity.x = speed.x;
        this.body.velocity.y = speed.y;
    }
}
