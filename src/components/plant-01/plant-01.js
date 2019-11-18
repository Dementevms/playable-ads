import { Sprite } from '../../modules/wrapper';

export default class Plant01 extends Sprite {
  constructor() {
    super();
  }
  data() {
    return {
      visible: true,
      resources: ['./assets/plant_01.png'],
      x: 1122,
      y: 438,
      z: 2,
    };
  }
}
