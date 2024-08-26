'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Arrow = require('./Arrow');

var _Arrow2 = _interopRequireDefault(_Arrow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DataTable = function DataTable(props) {
  return _react2.default.createElement(
    'table',
    {
      className: 'table-container',
      tabIndex: props.tabindex,
      'aria-labelledby': props.captionID,
      role: 'group'
    },
    _react2.default.createElement(
      'caption',
      { id: props.captionID },
      props.caption,
      props.tabindex === '0' && _react2.default.createElement(
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
        props.headers.map(function (header, i) {
          return _react2.default.createElement(
            'th',
            {
              role: 'columnheader',
              scope: 'col',
              key: i,
              onClick: function onClick() {
                return props.sortable === false ? null : props.sortBy(i);
              },
              'aria-sort': props.sortedBy === i ? props.sortDir : 'none'
            },
            header,
            props.sortedBy === i && _react2.default.createElement(
              'button',
              {
                'aria-label': 'sort by ' + header + ' in ' + (props.sortDir !== 'ascending' ? 'ascending' : 'descending') + ' order'
              },
              _react2.default.createElement(_Arrow2.default, {
                sortDir: props.sortDir,
                isCurrent: props.sortedBy === i
              })
            )
          );
        })
      )
    ),
    _react2.default.createElement(
      'tbody',
      null,
      props.rows.map(function (row, i) {
        return _react2.default.createElement(
          'tr',
          { key: i },
          row.map(function (cell, i) {
            return props.rowHeaders && i < 1 ? _react2.default.createElement(
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
  );
};

exports.default = DataTable;


{
  /* <DataTable
          tabIndex={props.tabindex}
          captionID={props.captionID}
          caption={props.caption}
          headers={props.headers}
          rows={props.rows}
          sortBy={props.sortBy}
          sortedBy={props.sortedBy}
          sortDir={props.sortDir}
          sortable={props.sortable}
          rowHeaders={props.rowHeaders}
        /> */
}