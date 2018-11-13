'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDotFragment = require('react-dot-fragment');

var _reactDotFragment2 = _interopRequireDefault(_reactDotFragment);

var _Arrow = require('./Arrow');

var _Arrow2 = _interopRequireDefault(_Arrow);

var _StyleWrapper = require('./StyleWrapper');

var _StyleWrapper2 = _interopRequireDefault(_StyleWrapper);

var _DataList = require('./DataList');

var _DataList2 = _interopRequireDefault(_DataList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_react2.default.Fragment = _react2.default.Fragment || _reactDotFragment2.default;

var Table = function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table(props) {
    _classCallCheck(this, Table);

    var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

    _this.state = {
      tabindex: null,
      headers: [],
      rows: [],
      sortedBy: null,
      sortDir: 'none'
    };

    _this.sortBy = _this.sortBy.bind(_this);
    _this.captionID = 'caption-' + Math.random().toString(36).substr(2, 9);
    return _this;
  }

  _createClass(Table, [{
    key: 'sortBy',
    value: function sortBy(i) {
      var sortDir = void 0;
      var ascending = this.state.sortDir === 'ascending';
      if (i === this.state.sortedBy) {
        sortDir = !ascending ? 'ascending' : 'descending';
      } else {
        sortDir = 'ascending';
      }
      this.setState(function (prevState) {
        return {
          rows: prevState.rows.slice(0).sort(function (a, b) {
            return sortDir === 'ascending' ? a[i] > b[i] : a[i] < b[i];
          }),
          sortedBy: i,
          sortDir: sortDir
        };
      });
    }
  }, {
    key: 'updateTable',
    value: function updateTable() {
      var reducedHeaders = Array.from(new Set(this.props.data.reduce(function (r, e) {
        return [].concat(_toConsumableArray(r), _toConsumableArray(Object.keys(e)));
      }, [])));

      var dataHeaders = this.props.headerOrder ? this.props.headerOrder : reducedHeaders;

      var dataRows = Array.from(this.props.data.map(function (theData, i) {
        return dataHeaders.map(function (element) {
          return theData[element] || null;
        });
      }));
      this.setState({
        headers: dataHeaders,
        rows: dataRows
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateTable();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.data !== prevProps.data) {
        this.updateTable();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _StyleWrapper2.default,
        {
          breakpoint: this.props.breakpoint,
          tableColor: this.props.tableColor,
          headerTextColor: this.props.headerTextColor
        },
        _react2.default.createElement(
          'table',
          {
            className: 'table-container',
            tabIndex: this.state.tabindex,
            'aria-labelledby': this.captionID,
            role: 'group'
          },
          _react2.default.createElement(
            'caption',
            { id: this.captionID },
            this.props.caption,
            this.state.tabindex === '0' && _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'small',
                null,
                '(scroll to see more)'
              )
            )
          ),
          _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
              'tr',
              null,
              this.state.headers.map(function (header, i) {
                return _react2.default.createElement(
                  'th',
                  {
                    role: 'columnheader',
                    scope: 'col',
                    key: i,
                    onClick: function onClick() {
                      return _this2.props.sortable === false ? null : _this2.sortBy(i);
                    },
                    'aria-sort': _this2.state.sortedBy === i ? _this2.state.sortDir : 'none'
                  },
                  header,
                  _this2.state.sortedBy === i && _react2.default.createElement(
                    'button',
                    {
                      'aria-label': 'sort by ' + header + ' in ' + (_this2.state.sortDir !== 'ascending' ? 'ascending' : 'descending') + ' order'
                    },
                    _react2.default.createElement(_Arrow2.default, {
                      sortDir: _this2.state.sortDir,
                      isCurrent: _this2.state.sortedBy === i
                    })
                  )
                );
              })
            )
          ),
          _react2.default.createElement(
            'tbody',
            null,
            this.state.rows.map(function (row, i) {
              return _react2.default.createElement(
                'tr',
                { key: i },
                row.map(function (cell, i) {
                  return _this2.props.rowHeaders && i < 1 ? _react2.default.createElement(
                    'th',
                    { scope: 'row', key: i },
                    cell
                  ) : _react2.default.createElement(
                    'td',
                    { key: i },
                    cell
                  );
                })
              );
            })
          )
        ),
        _react2.default.createElement(_DataList2.default, {
          caption: this.props.caption,
          rows: this.state.rows,
          rowHeaders: this.props.rowHeaders,
          headers: this.state.headers
        })
      );
    }
  }]);

  return Table;
}(_react2.default.Component);

exports.default = Table;