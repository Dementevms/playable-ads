import { Sprite } from '../../modules/wrapper';

export default class Austin extends Sprite {
  constructor() {
    super();
  }
  data() {
    return {
      visible: true,
      resources: ['./assets/austin.png'],
      x: 696,
      y: 113,
      z: 1,
    };
  }
}
