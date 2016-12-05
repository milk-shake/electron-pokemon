export default class SuperContestEffect {
  constructor(options) {

    let _id = null;
    let _appeal = null;
    let _flavorText = null;

    Object.defineProperty(this, 'id', {
      enumarable: true,
      get() {
        return _id;
      }
    });

    Object.defineProperty(this, 'appeal', {
      enumarable: true,
      get() {
        return _appeal;
      }
    });

    Object.defineProperty(this, 'flavorText', {
      enumarable: true,
      get() {
        return _flavorText;
      }
    });

    console.log(options);

    _id = parseInt(options.id) || null;
    _appeal = parseInt(options.appeal) || 0;
    _flavorText = options.flavorText || "No flavor text";

    Object.seal(this);
  }
}
