import { Container } from '../../modules/wrapper';

import Item from './item/item';
import Ok from './ok/ok';

const components = {
  Ok,
};

export default class Menu extends Container {
  constructor(app) {
    super(app, components);
    this.bind();
  }
  data() {
    return {
      visible: false,
      x: 842,
      y: 6,
      z: 10,
    };
  }
  init() {
    super.init();
    this.createItems();
  }
  bind() {
    this.app.eventEmitter.on('pointertapIconHammer', () => {
      this.show();
    });
  }
  createItems() {
    const items = this.getItems();
    items.forEach((item, index) => {
      const component = new Item(this.app, item);
      const x = 137 * index;
      component.x = x;
      this.resources = this.resources.concat(component.resources);
      this.resources.push(item.path);
      this.components.push(component);
      this.addChild(component);
      this.sortChildren();
    });
  }
  getItems() {
    return [
      {
        id: 'stair01',
        path: './assets/menu/stair-01.png',
      },
      {
        id: 'stair02',
        path: './assets/menu/stair-02.png',
      },
      {
        id: 'stair03',
        path: './assets/menu/stair-03.png',
      },
    ];
  }
  show() {
    this.visible = true;
    const cell01 = this.components[1];
    const cell02 = this.components[2];
    const cell03 = this.components[3];
    cell01.scale.set(0,0);
    cell02.scale.set(0,0);
    cell03.scale.set(0,0);
    this.app.animate.scale(cell01, 1, 150, () => {
      this.app.animate.scale(cell02, 1, 150, () => {
        this.app.animate.scale(cell03, 1, 150, () => {});
      });
    });
  }
}
