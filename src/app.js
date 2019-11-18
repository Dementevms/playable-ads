import * as PIXI from 'pixi.js';
import EventEmitter from 'eventemitter3';
import Animate from './modules/animate';
import Components from './components/components';

export default class App extends PIXI.Application {
  constructor() {
    super({
      antialias: true,
      transparent: false,
      resolution: 1,
      resizeTo: window,
    });
    this.init();
    this.bind();
  }
  init() {
    this.eventEmitter = new EventEmitter();
    this.animate = new Animate(this);
    this.components = new Components(this);
    this.components.visible = false;
    const background = new PIXI.Sprite.from('./assets/background.png');
    this.stage.addChild(background, this.components);
    this.stage.sortChildren();
    const resources = [...new Set(this.components.resources)];
    this.loader.add(resources).load(() => {
      this.eventEmitter.emit('appLoadComplete');
      this.setAppSize();
    });
  }
  bind() {
    window.addEventListener(
      'resize',
      () => {
        this.view.classList.remove('visible');
        setTimeout(() => {
          this.setAppSize();
        }, 100);
      },
      false
    );
  }
  setAppSize() {
    this.components.visible = false;
    const width = window.innerWidth;
    this.view.width = width;
    this.view.height = width * ASPECT_RATIO;
    this.view.classList.add('visible');
    this.stage.width = width;
    this.stage.height = width * ASPECT_RATIO;
    this.components.visible = true;
  }
}
