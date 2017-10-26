/* globals __DEV__ */
import Phaser from 'phaser'
import Enemy from '../entities/enemy';
import Mushroom from '../sprites/Mushroom';

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    this.music = this.game.add.audio('battleMusic');
    this.background = this.add.sprite(0,0,'background')
    this.background.width = this.game.width;
    this.background.height = this.game.height;
    this.bulletHitSound = this.add.sound('bulletHit');

    this.enemies = this.add.group();
    this.enemies.enableBody = true;

    this.enemyTime = 0;
    this.enemyInterval = 1.5;

    this.music.loopFull();
  }

  update() {

    this.enemyTime += this.game.time.physicsElapsed;

    if (this.enemyTime > this.enemyInterval) {
        this.enemyTime = 0;

        this.createEnemy({
            game: this.game,
            x: this.world.width,
            y: this.game.rnd.integerInRange(this.world.height/1.35, this.world.height/1.1),
            speed: {
                x: this.game.rnd.integerInRange(5, 10) * 10 * (Math.random() > 0.5 ? 1 : -1),
                y: 0
            },
            health: 9,
            asset: 'enemy'
        });
    }
  }

  createEnemy(data) {

    let enemy = this.enemies.getFirstExists(false);

    if (!enemy) {
        enemy = new Enemy(data);
        enemy.inputEnabled = true;
        enemy.input.useHandCursor = true;
        enemy.events.onInputDown.add(this.onDown, this);
        this.enemies.add(enemy);
    }
    enemy.setBody(data);
  }

  onDown(sprite, pointer) {
    this.bulletHitSound.play("",0,0.5);
    sprite.damage(3);

  }

}
  