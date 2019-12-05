export default class InMemoryDB {
  constructor(settings = {}) {
    this._data = {};
    this.settings = settings;
    this.set = this.set.bind(this);
    this.get = this.get.bind(this);
  }

  set(key, value) {
    this._data[key] = value;
  }

  get(key) {
    return this._data[key] || this.settings.defaultGetValue(key);
  }

}