export default class InMemoryDB {
    constructor() {
        this._data = {};

        this.set = this.set.bind(this);
        this.get = this.get.bind(this);
    }

    set(key, value) {
        this._data[key] = value;
    }

    get(key) {
        return this._data[key];
    }
};