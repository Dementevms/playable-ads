import { Sprite } from '../../modules/wrapper';

export default class Table extends Sprite {
  constructor() {
    super();
  }
  data() {
    return {
      visible: true,
      resources: ['./assets/table.png'],
      x: 202,
      y: 196,
      z: 0,
    };
  }
}
