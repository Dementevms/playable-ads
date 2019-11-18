import { Sprite } from '../../modules/wrapper';

export default class Plant03 extends Sprite {
  constructor() {
    super();
  }
  data() {
    return {
      visible: true,
      resources: ['./assets/plant_02.png'],
      x: 1135,
      y: 164,
      z: 0,
    };
  }
}
