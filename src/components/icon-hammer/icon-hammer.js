import { Sprite } from '../../modules/wrapper';

export default class IconHammer extends Sprite {
  constructor(app) {
    super(app);
    this.bind();
  }
  data() {
    return {
      visible: false,
      resources: ['./assets/icon_hammer.png'],
      x: 1086,
      y: 252,
      z: 10,
    };
  }
  init() {
    super.init();
    this.interactive = true;
    this.buttonMode = true;
  }
  bind() {
    this.on('pointertap', (e) => {
      this.app.eventEmitter.emit('pointertapIconHammer');
      this.app.animate.fadeOut(this, 300, () => {
        this.visible = false;
      });
    });
    this.app.eventEmitter.on('appLoadComplete', () => {
      setTimeout(() => {
        this.visible = true;
        this.app.animate.fadeIn(this, 300);
      }, 2000);
    });
  }
}
