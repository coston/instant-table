import React from 'react'
import Fragment from 'react-dot-fragment'

import Arrow from './Arrow'
import StyleWrapper from './StyleWrapper'
import DataList from './DataList'

React.Fragment = React.Fragment || Fragment

const posNeg = bool => (bool ? 1 : -1)

class Table extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tabindex: null,
      headers: [],
      rows: [],
      sortedBy: null,
      sortDir: 'none',
    }

    this.sortBy = this.sortBy.bind(this)
    this.captionID =
      'caption-' +
      Math.random()
        .toString(36)
        .substr(2, 9)
  }

  sortBy(i) {
    let sortDir
    let ascending = this.state.sortDir === 'ascending'
    if (i === this.state.sortedBy) {
      sortDir = !ascending ? 'ascending' : 'descending'
    } else {
      sortDir = 'ascending'
    }
    this.setState(prevState => ({
      rows: prevState.rows
        .slice(0)
        .sort(
          (a, b) =>
            sortDir === 'ascending' ? posNeg(a[i] > b[i]) : posNeg(a[i] < b[i])
        ),
      sortedBy: i,
      sortDir: sortDir,
    }))
  }

  updateTable() {
    const reducedHeaders = Array.from(
      new Set(this.props.data.reduce((r, e) => [...r, ...Object.keys(e)], []))
    )

    const dataHeaders = this.props.headerOrder
      ? this.props.headerOrder
      : reducedHeaders

    const dataRows = Array.from(
      this.props.data.map((theData, i) =>
        dataHeaders.map(element => theData[element] || null)
      )
    )
    this.setState({
      headers: dataHeaders,
      rows: dataRows,
    })
  }

  componentDidMount() {
    this.updateTable()
  }

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.updateTable()
    }
  }

  render() {
    return (
      <StyleWrapper
        breakpoint={this.props.breakpoint}
        tableColor={this.props.tableColor}
        headerTextColor={this.props.headerTextColor}
      >
        <table
          className="table-container"
          tabIndex={this.state.tabindex}
          aria-labelledby={this.captionID}
          role="group"
        >
          <caption id={this.captionID}>
            {this.props.caption}
            {this.state.tabindex === '0' && (
              <div>
                <small>(scroll to see more)</small>
              </div>
            )}
          </caption>
          <thead>
            <tr>
              {this.state.headers.map((header, i) => (
                <th
                  role="columnheader"
                  scope="col"
                  key={i}
                  onClick={() =>
                    this.props.sortable === false ? null : this.sortBy(i)
                  }
                  aria-sort={
                    this.state.sortedBy === i ? this.state.sortDir : 'none'
                  }
                >
                  {header}
                  {this.state.sortedBy === i && (
                    <button
                      aria-label={`sort by ${header} in ${
                        this.state.sortDir !== 'ascending'
                          ? 'ascending'
                          : 'descending'
                      } order`}
                    >
                      <Arrow
                        sortDir={this.state.sortDir}
                        isCurrent={this.state.sortedBy === i}
                      />
                    </button>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.state.rows.map((row, i) => (
              <tr key={i}>
                {row.map(
                  (cell, i) =>
                    this.props.rowHeaders && i < 1 ? (
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
        <DataList
          caption={this.props.caption}
          rows={this.state.rows}
          rowHeaders={this.props.rowHeaders}
          headers={this.state.headers}
        />
      </StyleWrapper>
    )
  }
}

export default Table
