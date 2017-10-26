import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  init () {}

  preload () {
    
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    centerGameObjects([this.loaderBg, this.loaderBar])

    this.load.setPreloadSprite(this.loaderBar)
    //
    // load your assets
    //
    this.load.image('mushroom', 'assets/images/mushroom2.png');
    this.load.atlasJSONArray('enemy', 'assets/images/spritesheet/enemy.png', 'assets/data/spritesheet/enemy.json');
    
    this.load.atlasJSONArray('button', 'assets/images/spritesheet/button.png', 'assets/data/spritesheet/button.json');

    this.load.audio('bulletHit', ['assets/audio/sound/enemy-explosion.mp3']);
    this.load.audio('menuMusic', ['assets/audio/music/bg_sound.mp3']);
    this.load.audio('battleMusic', ['assets/audio/music/battle.mp3']);
    this.load.audio('menuOver', ['assets/audio/sound/menu-over.mp3']);
    this.load.audio('menuOut', ['assets/audio/sound/menu-out.mp3']);
    this.load.audio('menuDown', ['assets/audio/sound/menu-click.mp3']);
  }

  create () {
    this.state.start('Menu');
  }
}
