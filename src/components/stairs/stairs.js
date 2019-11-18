import * as PIXI from 'pixi.js';
import { Container } from '../../modules/wrapper';

export default class Stairs extends Container {
  constructor(app) {
    super(app);
    this.bind();
  }
  data() {
    return {
      visible: true,
      x: 0,
      y: 0,
      z: 0,
    };
  }
  init() {
    super.init();
    this.createItems();
  }
  bind() {
    this.app.eventEmitter.on('pointertapCell', (component) => {
      this.change(component.id);
    });
  }
  createItems() {
    const items = this.getItems();
    items.forEach((item, index) => {
      const component = new PIXI.Sprite.from(item.path);
      component.visible = false;
      component.position.set(item.x, item.y);
      this.resources.push(item.path);
      this.components.push(component);
      this.addChild(component);
    });
    this.components[0].visible = true;
    this.currentStair = this.components[0];
  }
  getItems() {
    return [
      {
        id: 'stair00',
        path: '../assets/new-stair-00.png',
        x: 833,
        y: 54,
      },
      {
        id: 'stair01',
        path: './assets/new-stair-01.png',
        x: 898,
        y: -13,
      },
      {
        id: 'stair02',
        path: './assets/new-stair-02.png',
        x: 898,
        y: -13,
      },
      {
        id: 'stair03',
        path: './assets/new-stair-03.png',
        x: 898,
        y: -13,
      },
    ];
  }
  change(id) {
    this.components[1].visible = false;
    this.components[2].visible = false;
    this.components[3].visible = false;
    this.currentStair.visible = true;
    this.hide(this.currentStair);
    switch (id) {
      case 'stair01':
        this.show(this.components[1]);
        break;
      case 'stair02':
        this.show(this.components[2]);
        break;
      case 'stair03':
        this.show(this.components[3]);
        break;
    }
  }
  show(component) {
    component.alpha = 0;
    component.visible = true;
    component.y = component.y - 100;
    const props = [
      { name: 'alpha', value: 1, time: 300 },
      { name: 'y', value: 100, time: 300 },
    ];
    this.app.animate.$__animate(component, props, () => {
      this.currentStair = component;
    });
  }
  hide(component) {
    component.alpha = 1;
    const props = [
      { name: 'alpha', value: -1, time: 150 },
      { name: 'y', value: 100, time: 150 },
    ];
    this.app.animate.$__animate(component, props, () => {
      component.visible = false;
      component.y = component.y - 100;
    });
  }
}
