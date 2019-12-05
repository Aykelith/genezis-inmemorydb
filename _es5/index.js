"use strict";

require("core-js/modules/es.function.bind");

require("core-js/modules/es.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InMemoryDB =
/*#__PURE__*/
function () {
  function InMemoryDB() {
    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, InMemoryDB);

    this._data = {};
    this.settings = settings;
    this.set = this.set.bind(this);
    this.get = this.get.bind(this);
  }

  _createClass(InMemoryDB, [{
    key: "set",
    value: function set(key, value) {
      this._data[key] = value;
    }
  }, {
    key: "get",
    value: function get(key) {
      return this._data[key] || this.settings.defaultGetValue(key);
    }
  }]);

  return InMemoryDB;
}();

exports["default"] = InMemoryDB;