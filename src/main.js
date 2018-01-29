import 'pixi'
import 'p2'
import Phaser from 'phaser'

import Enemy from './entities/enemy';
import BootState from './states/Boot'
import PreloadState from './states/Preload'
import MenuState from './states/Menu'
import PlayState from './states/Play'


import config from './config'

class Game extends Phaser.Game {
  constructor () {
    const docElement = document.docuntElement
    /*const width = docElement.clientWidth < config.gameWidth ? config.gameWidth : docElement.clientWidth
    const height = docElement.clientHeight < config.gameHeight ? config.gameHeight : docElement.clientHeight*/
    const width = docElement.clientWidth
    const height = docElement.clientHeight
    super(1920, 1080, Phaser.CANVAS, 'content', null)

    this.state.add('Boot', BootState, false)
    this.state.add('Preload', PreloadState, false)
    this.state.add('Menu', MenuState, false)
    this.state.add('Play', PlayState, false)

    this.state.start('Boot')
  }

}
window.game = new Game()
