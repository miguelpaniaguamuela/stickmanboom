import Phaser from 'phaser'
import WebFont from 'webfontloader'

import config from '../config'

export default class extends Phaser.State {

 init(){



 }

  preload () {
    this.load.image('loaderBg', './assets/images/loader-bg.png');
    this.load.image('loaderBar', './assets/images/loader-bar.png');
    this.load.image('background', './assets/images/background.png');
  }

  create () {
	game.aspectRatio = 16/9;
  	game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	game.scale.pageAlignHorizontally = true;
	game.scale.pageAlignVertically = true;
	game.scale.setScreenSize = true;
	game.scale.parentIsWindow = true;

	game.scale.maxWidth = 1920;            
	game.scale.maxHeight = 1080


	this.game.physics.startSystem(Phaser.Physics.ARCADE);
	this.state.start('Preload')
  }

}
