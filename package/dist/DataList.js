"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DataList = function DataList(props) {
  return _react2.default.createElement(
    "div",
    { className: "lists-container" },
    _react2.default.createElement(
      "h2",
      null,
      props.caption
    ),
    props.rows.map(function (row, i) {
      return _react2.default.createElement(
        "div",
        { key: i },
        props.rowHeaders ? _react2.default.createElement(
          "h3",
          null,
          row[0]
        ) : _react2.default.createElement("hr", null),
        _react2.default.createElement(
          "dl",
          null,
          props.headers.map(function (header, i) {
            return (props.rowHeaders ? i > 0 : i >= 0) && _react2.default.createElement(
              _react2.default.Fragment,
              { key: i },
              _react2.default.createElement(
                "dt",
                null,
                header
              ),
              _react2.default.createElement(
                "dd",
                null,
                row[i]
              )
            );
          })
        )
      );
    })
  );
};

exports.default = DataList;