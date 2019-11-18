import { Sprite } from '../../modules/wrapper';

export default class Plant02 extends Sprite {
  constructor() {
    super();
  }
  data() {
    return {
      visible: true,
      resources: ['./assets/plant_02.png'],
      x: 456,
      y: -42,
      z: 0,
    };
  }
}
