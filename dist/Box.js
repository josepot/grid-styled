'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flex = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledSystem = require('styled-system');

var _styled = require('./styled');

var _styled2 = _interopRequireDefault(_styled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// hoc to remove unwanted width attribute
var hoc = function hoc(Comp) {
  return function (_ref) {
    var width = _ref.width,
        props = _objectWithoutProperties(_ref, ['width']);

    return _react2.default.createElement(Comp, _extends({}, props, { w: width }));
  };
};

var flex = exports.flex = function flex(_ref2) {
  var flex = _ref2.flex;
  return flex ? { flex: flex } : null;
};

var Box = hoc((0, _styled2.default)('div', { boxSizing: 'border-box' }, _styledSystem.width, _styledSystem.space, flex));

exports.default = Box;