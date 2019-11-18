import { Sprite } from '../../modules/wrapper';

export default class Logo extends Sprite {
  constructor() {
    super();
  }
  data() {
    return {
      visible: true,
      resources: ['./assets/logo.png'],
      x: 29,
      y: 3,
      z: 0,
    };
  }
}
