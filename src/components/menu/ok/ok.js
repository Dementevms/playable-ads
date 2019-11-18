import { Sprite } from '../../../modules/wrapper';

export default class Ok extends Sprite {
  constructor(app) {
    super(app);
    this.bind();
  }
  data() {
    return {
      visible: false,
      resources: ['./assets/menu/ok.png'],
      x: 68.5,
      y: 110,
      z: 1,
    };
  }
  init() {
    super.init();
    this.interactive = true;
    this.buttonMode = true;
    this.pivot.set(79, 0);
  }
  bind() {
    this.on('pointertap', () => {
      this.app.eventEmitter.emit('pointertapMenuOk', this);
    });
    this.app.eventEmitter.on('pointertapCell', (component) => {
      this.move(component);
    });
  }
  move(component) {
    const x = component.x + component.width / 2;
    this.x = x;
    this.visible = true;
  }
}
