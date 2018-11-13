'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  &:focus {\n    box-shadow: 0 0 0 4px DodgerBlue;\n    outline: none;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  body {\n    overflow-x: hidden;\n  }\n\n  .table-container {\n    overflow-x: auto;\n  }\n\n  @media (max-width: ', ') {\n    .table-container {\n      display: none;\n    }\n  }\n\n  table {\n    border-collapse: collapse;\n    color: ', ';\n  }\n\n  th,\n  td {\n    border: 1px solid\n      ', ';\n    padding: 0.75rem;\n    text-align: left;\n  }\n\n  th {\n    font-weight: bold;\n    white-space: nowrap;\n  }\n\n  th {\n    background: ', ';\n    color: ', ';\n  }\n\n  tr:first-of-type th:not(:last-child) {\n    border-right-color: #fff;\n  }\n\n  tr:first-child th:first-child,\n  tr:not(:first-child):not(:last-child) th {\n    border-bottom-color: #fff !important;\n  }\n\n  caption {\n    margin-bottom: 0.5rem;\n  }\n\n  .lists-container {\n    display: block;\n  }\n\n  @media (min-width: ', ') {\n    .lists-container {\n      display: none;\n    }\n  }\n\n  dl {\n    display: flex;\n    flex-wrap: wrap;\n    word-break: break-word;\n    flex: 0 0 50%;\n    margin: 0;\n    word-break: break-all;\n  }\n\n  dl > * {\n    flex: 0 0 50%;\n    margin: 0;\n  }\n\n  dt {\n    padding-right: 0.5rem;\n    font-weight: bold;\n  }\n\n  dt:nth-child(4n + 1),\n  dt:nth-child(4n + 1) + dd {\n    background-color: #eee;\n  }\n\n  th button {\n    background: inherit;\n    color: currentColor;\n    border: 0;\n    padding: 0.125rem 0.5rem;\n    border-radius: 0.25rem;\n    font-weight: bold;\n    vertical-align: middle;\n    margin-left: 0.333rem;\n  }\n\n  h3 {\n    background: ', ';\n    color: #fff;\n    padding: 0.5rem;\n  }\n'], ['\n  &:focus {\n    box-shadow: 0 0 0 4px DodgerBlue;\n    outline: none;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  body {\n    overflow-x: hidden;\n  }\n\n  .table-container {\n    overflow-x: auto;\n  }\n\n  @media (max-width: ', ') {\n    .table-container {\n      display: none;\n    }\n  }\n\n  table {\n    border-collapse: collapse;\n    color: ', ';\n  }\n\n  th,\n  td {\n    border: 1px solid\n      ', ';\n    padding: 0.75rem;\n    text-align: left;\n  }\n\n  th {\n    font-weight: bold;\n    white-space: nowrap;\n  }\n\n  th {\n    background: ', ';\n    color: ', ';\n  }\n\n  tr:first-of-type th:not(:last-child) {\n    border-right-color: #fff;\n  }\n\n  tr:first-child th:first-child,\n  tr:not(:first-child):not(:last-child) th {\n    border-bottom-color: #fff !important;\n  }\n\n  caption {\n    margin-bottom: 0.5rem;\n  }\n\n  .lists-container {\n    display: block;\n  }\n\n  @media (min-width: ', ') {\n    .lists-container {\n      display: none;\n    }\n  }\n\n  dl {\n    display: flex;\n    flex-wrap: wrap;\n    word-break: break-word;\n    flex: 0 0 50%;\n    margin: 0;\n    word-break: break-all;\n  }\n\n  dl > * {\n    flex: 0 0 50%;\n    margin: 0;\n  }\n\n  dt {\n    padding-right: 0.5rem;\n    font-weight: bold;\n  }\n\n  dt:nth-child(4n + 1),\n  dt:nth-child(4n + 1) + dd {\n    background-color: #eee;\n  }\n\n  th button {\n    background: inherit;\n    color: currentColor;\n    border: 0;\n    padding: 0.125rem 0.5rem;\n    border-radius: 0.25rem;\n    font-weight: bold;\n    vertical-align: middle;\n    margin-left: 0.333rem;\n  }\n\n  h3 {\n    background: ', ';\n    color: #fff;\n    padding: 0.5rem;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyleWrapper = _styledComponents2.default.div(_templateObject, function (props) {
  return props.breakpoint ? props.breakpoint : '768px';
}, function (props) {
  return props.textColor ? props.textColor : '#000';
}, function (props) {
  return props.borderColor ? props.borderColor : '#ccc';
}, function (props) {
  return props.tableColor ? props.tableColor : '#000';
}, function (props) {
  return props.headerTextColor ? props.headerTextColor : '#fff';
}, function (props) {
  return props.breakpoint ? props.breakpoint : '768px';
}, function (props) {
  return props.tableColor ? props.tableColor : '#000';
});
exports.default = StyleWrapper;