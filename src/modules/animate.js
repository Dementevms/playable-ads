export default class Animate {
  constructor(app) {
    this.app = app;
  }
  fadeIn(sprite, time, callback) {
    sprite.alpha = 0;
    this.alpha(sprite, 1, time, callback);
  }
  fadeOut(sprite, time, callback) {
    sprite.alpha = 1;
    this.alpha(sprite, -1, time, callback);
  }
  x(sprite, value, time, callback) {
    const props = [{ name: 'x', value, time }];
    this.$__animate(sprite, props, callback);
  }
  y(sprite, value, time, callback) {
    const props = [{ name: 'y', value, time }];
    this.$__animate(sprite, props, callback);
  }
  alpha(sprite, value, time, callback) {
    const props = [{ name: 'alpha', value, time }];
    this.$__animate(sprite, props, callback);
  }
  scale(sprite, value, time, callback) {
    const props = [
      { name: 'scale', subname: 'x', value, time },
      { name: 'scale', subname: 'y', value, time },
    ];
    this.$__animate(sprite, props, callback);
  }
  scaleX(sprite, value, time, callback) {
    const props = [{ name: 'scale', subname: 'x', value, time }];
    this.$__animate(sprite, props, callback);
  }
  scaleY(sprite, value, time, callback) {
    const props = [{ name: 'scale', subname: 'y', value, time }];
    this.$__animate(sprite, props, callback);
  }
  pinpong(sprite, value, time, animation) {
    this[animation](sprite, value, time, () => {
      const $__value = value * -1;
      this.pinpong(sprite, $__value, time, animation);
    });
  }
  $__animate(sprite, props, callback) {
    this.$__setDeltaValue(sprite, props);
    const reference = this.$__reference(sprite, props);
    Object.freeze(reference);
    const animate = (delta) => {
      let complete = false;
      props.forEach((prop) => {
        if (!prop.subname) {
          const check = this.$__check(
            sprite[prop.name],
            prop,
            reference[prop.name]
          );
          sprite[prop.name] = check.spriteProp;
          complete = check.complete;
        } else {
          const check = this.$__check(
            sprite[prop.name][prop.subname],
            prop,
            reference[prop.name + prop.subname]
          );
          sprite[prop.name][prop.subname] = check.spriteProp;
          complete = check.complete;
        }
      });
      if (complete) {
        this.app.ticker.remove(animate);
        props.forEach((prop) => {
          if (!prop.subname) {
            let target = +reference[prop.name] + prop.value;
            sprite[prop.name] = target;
          } else {
            let target = +reference[prop.name + prop.subname] + prop.value;
            sprite[prop.name][prop.subname] = target;
          }
        });
        if (callback) {
          callback();
        }
      }
    };
    this.app.ticker.add(animate);
  }
  $__check(spriteProp, prop, referenceProp) {
    const dir = prop.value > 0 ? 1 : -1;
    const target = +referenceProp + prop.value;
    const a = dir === 1 && spriteProp >= target;
    const b = dir === -1 && spriteProp <= target;
    const complete = a || b;
    if (!complete) {
      spriteProp += prop.deltaValue;
    }
    return {
      complete,
      spriteProp,
    };
  }
  $__reference(sprite, props) {
    const result = [];
    props.forEach((prop) => {
      if (!prop.subname) {
        result[prop.name] = sprite[prop.name];
      } else {
        result[prop.name + prop.subname] = sprite[prop.name][prop.subname];
      }
    });
    return result;
  }
  $__setDeltaValue(sprite, props) {
    const deltaMS = this.app.ticker.deltaMS;
    props.forEach((prop) => {
      prop.deltaValue = prop.value / (prop.time / deltaMS);
    });
  }
}
