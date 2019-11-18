import * as PIXI from 'pixi.js';
import utils from './utils';

class Container extends PIXI.Container {
  constructor(app, components, props) {
    super();
    this.app = app;
    this.components = components;
    this.props = props;
    this.init();
  }
  data() {
    return $__data;
  }
  init() {
    $__init(this);
    const { components, resources } = utils.generator(
      this.app,
      this.components,
      this.props
    );
    this.components = components;
    if(resources){
      this.resources = this.resources.concat(resources);
    }
    utils.addChilds(this, components);
    this.sortChildren();
  }
}

class Sprite extends PIXI.Sprite {
  constructor(app, props) {
    super();
    this.app = app;
    this.props = props;
    this.init();
  }
  data() {
    return $__data;
  }
  init() {
    $__init(this);
    this.texture = PIXI.Texture.from(this.resources[0]);
  }
}

class Graphics extends PIXI.Graphics {
  constructor(app) {
    super();
    this.app = app;
    this.init();
  }
  data() {
    return $__data;
  }
  init() {
    $__init(this);
  }
}

const $__data = {
  resources: [],
  visible: false,
  x: 0,
  y: 0,
  z: 0,
};

const $__init = (self) => {
  const { resources, visible, x, y, z } = self.data();
  self.position.set(x, y);
  self.zIndex = z;
  self.visible = visible;
  self.resources = resources || [];
};

export { Container, Sprite, Graphics };
