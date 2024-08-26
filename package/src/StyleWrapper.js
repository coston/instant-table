import styled from 'styled-components'

const StyleWrapper = styled.div`
  &:focus {
    box-shadow: 0 0 0 4px DodgerBlue;
    outline: none;
  }

  * {
    box-sizing: border-box;
  }

  body {
    overflow-x: hidden;
  }

  .table-container {
    overflow-x: auto;
  }

  @media (max-width: ${props =>
      props.breakpoint ? props.breakpoint : '768px'}) {
    .table-container {
      display: none;
    }
  }

  table {
    border-collapse: collapse;
    color: ${props => (props.textColor ? props.textColor : '#000')};
  }

  th,
  td {
    border: 1px solid
      ${props => (props.borderColor ? props.borderColor : '#ccc')};
    padding: 0.75rem;
    text-align: left;
  }

  th {
    font-weight: bold;
  }

  th {
    background: ${props => (props.tableColor ? props.tableColor : '#000')};
    color: ${props => (props.headerTextColor ? props.headerTextColor : '#fff')};
  }

  tr:first-of-type th:not(:last-child) {
    border-right-color: #fff;
  }

  tr:first-child th:first-child,
  tr:not(:first-child):not(:last-child) th {
    border-bottom-color: #fff !important;
  }

  caption {
    margin-bottom: 0.5rem;
  }

  .lists-container {
    display: block;
  }

  @media (min-width: ${props =>
      props.breakpoint ? props.breakpoint : '768px'}) {
    .lists-container {
      display: none;
    }
  }

  dl {
    display: flex;
    flex-wrap: wrap;
    word-break: break-word;
    flex: 0 0 50%;
    margin: 0;
    word-break: break-all;
  }

  dl > * {
    flex: 0 0 50%;
    margin: 0;
  }

  dt {
    padding-right: 0.5rem;
    font-weight: bold;
  }

  dt:nth-child(4n + 1),
  dt:nth-child(4n + 1) + dd {
    background-color: #eee;
  }

  th button {
    background: inherit;
    color: currentColor;
    border: 0;
    padding: 0.125rem 0.5rem;
    border-radius: 0.25rem;
    font-weight: bold;
    vertical-align: middle;
    margin-left: 0.333rem;
  }

  h3 {
    background: ${props => (props.tableColor ? props.tableColor : '#000')};
    color: #fff;
    padding: 0.5rem;
  }
`
export default StyleWrapper
