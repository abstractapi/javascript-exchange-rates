"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AbstractExchangeRates = void 0;

var core = _interopRequireWildcard(require("@abstractapi/javascript-core"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AbstractExchangeRates = function AbstractExchangeRates() {
  _classCallCheck(this, AbstractExchangeRates);
};

exports.AbstractExchangeRates = AbstractExchangeRates;

_defineProperty(AbstractExchangeRates, "apiKey", void 0);

_defineProperty(AbstractExchangeRates, "configure", function (apiKey) {
  AbstractExchangeRates.apiKey = apiKey;
});

_defineProperty(AbstractExchangeRates, "live", function (base, target) {
  if (!base) {
    throw new Error('Base is not provided.');
  }

  var query = "base=".concat(base);
  if (target && target !== "") query += "&target=".concat(target);
  return core.makeApiCall('exchange-rates', AbstractExchangeRates.apiKey, query, 'live');
});

_defineProperty(AbstractExchangeRates, "historical", function (base, date, target) {
  if (!base) {
    throw new Error('Base is not provided.');
  }

  if (!date) {
    throw new Error('Date is not provided.');
  }

  var query = "base=".concat(base, "&date=").concat(date);
  if (target && target !== "") query += "&target=".concat(target);
  return core.makeApiCall('exchange-rates', AbstractExchangeRates.apiKey, query, 'historical');
});

_defineProperty(AbstractExchangeRates, "convert", function (base, target, date, base_amount) {
  if (!base) {
    throw new Error('Base is not provided.');
  }

  if (!target) {
    throw new Error('Target is not provided.');
  }

  var query = "base=".concat(base, "&target=").concat(target);
  if (date && date !== "") query += "&date=".concat(date);
  if (base_amount && base_amount !== "") query += "&base_amount=".concat(base_amount);
  return core.makeApiCall('exchange-rates', AbstractExchangeRates.apiKey, query, 'convert');
});