export default class Utils {
  static generator(app, items) {
    const components = [];
    let resources = [];
    for (let item in items) {
      const component = ((item) => {
        return new items[item](app);
      })(item);
      components.push(component);
      const res = component.resources;
      if (res) {
        resources = resources.concat(res);
      }
    }
    return { components, resources };
  }

  static addChilds(container, components) {
    for (let component in components) {
      container.addChild(components[component]);
    }
  }
}
