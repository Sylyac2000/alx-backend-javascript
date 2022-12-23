export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  set size(value) {
    this._size = value;
  }

  get location() {
    return this._location;
  }

  set location(value) {
    this._location = value;
  }

  // The valueOf() method is called when cast to a number
  valueOf() {
    return this._size;
  }

  // The toString() method is called when cast to a string
  toString() {
    return this._location;
  }
}
