import { Sprite } from '../../modules/wrapper';

export default class Sofa extends Sprite {
  constructor() {
    super();
  }
  data() {
    return {
      visible: true,
      resources: ['./assets/sofa.png'],
      x: 127,
      y: 324,
      z: 1,
    };
  }
}
