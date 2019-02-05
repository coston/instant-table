import React from 'react'
import Arrow from './Arrow'

const DataTable = props => {
  return (
    <table
          className="table-container"
          tabIndex={props.tabindex}
          aria-labelledby={props.captionID}
          role="group"
        >
          <caption id={props.captionID}>
            {props.caption}
            {props.tabindex === '0' && (
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
                  onClick={() =>
                    props.sortable === false ? null : props.sortBy(i)
                  }
                  aria-sort={
                    props.sortedBy === i ? props.sortDir : 'none'
                  }
                >
                  {header}
                  {props.sortedBy === i && (
                    <button
                      aria-label={`sort by ${header} in ${
                        props.sortDir !== 'ascending'
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
