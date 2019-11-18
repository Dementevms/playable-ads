import { Sprite } from '../../../modules/wrapper';

export default class Image extends Sprite {
  constructor() {
    super();
  }
  data() {
    return {
      visible: true,
      resources: ['./assets/final.png'],
      x: 391,
      y: 53,
      z: 1,
    };
  }
}
