import * as PIXI from 'pixi.js';
import { Container } from '../../../modules/wrapper';

export default class Item extends Container {
  constructor(app, props) {
    super(app, null, props);
    this.bind();
  }
  data() {
    return {
      resources: ['assets/menu/cell.png', 'assets/menu/cell_choosed.png'],
      visible: true,
      x: 0,
      y: 0,
      z: 0,
    };
  }
  init() {
    super.init();
    this.id = this.props.id;
    this.background = this.createSprite(this.resources[0]);
    this.background.buttonMode = true;
    this.background.interactive = true;
    this.defaultTexture = this.background.texture;
    this.activeTexture = PIXI.Texture.from(this.resources[1]);
    this.image = this.createSprite(this.props.path);
  }
  bind() {
    this.background.on('pointertap', () => {
      this.app.eventEmitter.emit('pointertapCell', this);
    });
    this.background.on('pointerover', () => {
      this.background.texture = this.activeTexture;
    });
    this.background.on('pointerout', () => {
      this.background.texture = this.defaultTexture;
    });
  }
  createSprite(path) {
    const sprite = new PIXI.Sprite.from(path);
    this.addChild(sprite);
    return sprite;
  }
}
