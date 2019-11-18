import { Sprite } from '../../../modules/wrapper';

export default class Btn extends Sprite {
  constructor(app) {
    super(app);
  }
  data() {
    return {
      visible: true,
      resources: ['./assets/btn.png'],
      x: 684,
      y: 561,
      z: 1,
    };
  }
  init() {
    super.init();
    this.interactive = true;
    this.buttonMode = true;
    this.anchor.set(0.5);
    this.app.animate.pinpong(this, 0.15, 1000, 'scale');
  }
  pointertap() {
    window.location.href = 'https://www.playrix.ru/';
  }
}
