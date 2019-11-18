import { Sprite } from '../../modules/wrapper';

export default class BookStand extends Sprite {
  constructor() {
    super();
  }
  data() {
    return {
      visible: true,
      resources: ['./assets/book_stand.png'],
      x: 834,
      y: -28,
      z: 0,
    };
  }
}
