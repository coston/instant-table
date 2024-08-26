# ⌗ instant-table

Input data, output a react responsive table ✨

[![npm package version](https://badge.fury.io/js/instant-table.svg)](https://www.npmjs.com/package/instant-table)&nbsp;
[![npm downloads](https://img.shields.io/npm/dm/instant-table.svg)](https://www.npmjs.com/package/instant-table)&nbsp;
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io)

## Live Demo

[https://instant-table.coston.io](https://instant-table.coston.io)

## Features

- Instantly build a table from your array of objects
- Automatic headers
- Responsive conversion to HTML `<dl>` key-value format at mobile breakpoint
- Great Accessibility
- Customizations

## Install

Install with npm:

```sh
npm i instant-table
```

## Usage

```jsx
<Table data={mockData.slice(0, 20)} />
```

## Options

| Prop            | Type      | Argument   | Default            | Description                             |
| --------------- | --------- | ---------- | ------------------ | --------------------------------------- |
| data            | `array`   | `required` | `null`             | array of objects                        |
| breakpoint      | `string`  | `optional` | `768px`            | Width at which the table becomes a list |
| headerOrder     | `array`   | `optional` | first object order | Choose columns to display with order    |
| rowHeaders      | `boolean` | `optional` | `false`            | convert first column to row headers     |
| caption         | `string`  | `optional` | `null`             | add a table caption                     |
| sortable        | `boolean` | `optional` | `true`             | set to false to disable sortability     |
| tableColor      | `string`  | `optional` | `black`            | set header background color             |
| headerTextColor | `string`  | `optional` | `white`            | set header text color                   |

## Contributing

Please help ship data faster! Submit any issues and/or make a pull request!
