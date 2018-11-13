import React from 'react'
import Arrow from './Arrow'

const DataTable = props => {
  return (
    <table
      className="table-container"
      tabIndex={props.tabIndex}
      aria-labelledby={props.captionID}
      role="group"
    >
      <caption id={props.captionID}>
        {props.caption}
        {props.tabIndex === '0' && (
          <div>
            <small>(scroll to see more)</small>
          </div>
        )}
      </caption>
      <thead>
        <tr>
          {props.headers.map((header, i) => (
            <th
              role="columnheader"
              scope="col"
              key={i}
              onClick={() => (props.sortable ? props.sortedBy(i) : null)}
              aria-sort={props.sortedBy === i ? props.sortDir : 'none'}
            >
              {header}
              {props.sortedBy === i && (
                <button
                  aria-label={`sort by ${header} in ${
                    this.state.sortDir !== 'ascending'
                      ? 'ascending'
                      : 'descending'
                  } order`}
                >
                  <Arrow
                    sortDir={props.sortDir}
                    isCurrent={props.sortedBy === i}
                  />
                </button>
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.rows.map((row, i) => (
          <tr key={i}>
            {row.map(
              (cell, i) =>
                props.rowHeaders && i < 1 ? (
                  <th scope="row" key={i}>
                    {cell}
                  </th>
                ) : (
                  <td key={i}>{cell}</td>
                )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default DataTable

{
  /* <DataTable
          tabIndex={this.state.tabindex}
          captionID={this.captionID}
          caption={this.props.caption}
          headers={this.state.headers}
          rows={this.state.rows}
          sortBy={this.sortBy}
          sortedBy={this.state.sortedBy}
          sortDir={this.state.sortDir}
          sortable={this.props.sortable}
          rowHeaders={this.props.rowHeaders}
        /> */
}
