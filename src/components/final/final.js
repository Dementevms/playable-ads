import * as PIXI from 'pixi.js';
import { Container } from '../../modules/wrapper';

import Image from './image/image';
import Btn from './btn/btn';

const components = {
  Image,
  Btn,
};

export default class Final extends Container {
  constructor(app) {
    super(app, components);
    this.bind();
  }
  data() {
    return {
      visible: false,
      x: 0,
      y: 0,
      z: 100,
    };
  }
  init() {
    this.background();
    super.init();
    this.interactive = true;
  }
  bind() {
    this.app.eventEmitter.on('pointertapMenuOk', () => {
      this.visible = true;
    });
  }
  background() {
    const bg = new PIXI.Graphics();
    bg.beginFill(0x000000, 0.75);
    bg.drawRect(0, 0, 10000, 10000);
    bg.endFill();
    bg.zIndex = 0;
    this.addChild(bg);
  }
}
