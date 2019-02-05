import React from 'react'
import Fragment from 'react-dot-fragment'

import StyleWrapper from './StyleWrapper'
import DataTable from './DataTable'
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
        <DataTable
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
        />
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
