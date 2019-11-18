import { Sprite } from '../../modules/wrapper';

export default class Globe extends Sprite {
  constructor(app) {
    super(app);
  }
  data() {
    return {
      visible: true,
      resources: ['./assets/globe.png'],
      x: 87,
      y: 109,
      z: 1,
    };
  }
}
