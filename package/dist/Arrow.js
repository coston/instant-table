'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  stroke: currentColor;\n  stroke-width: 20;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  fill: none;\n  width: auto;\n  height: 1.5em;\n'], ['\n  stroke: currentColor;\n  stroke-width: 20;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  fill: none;\n  width: auto;\n  height: 1.5em;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Arrow = function Arrow(props) {
  var ascending = props.sortDir === 'ascending';
  return _react2.default.createElement(
    Svg,
    { viewBox: '0 0 100 200', width: '100', height: '200' },
    !(!ascending && props.isCurrent) && _react2.default.createElement('polyline', { points: '20 50, 50 20, 80 50' }),
    _react2.default.createElement('line', { x1: '50', y1: '20', x2: '50', y2: '180' }),
    !(ascending && props.isCurrent) && _react2.default.createElement('polyline', { points: '20 150, 50 180, 80 150' })
  );
};

exports.default = Arrow;


var Svg = _styledComponents2.default.svg(_templateObject);