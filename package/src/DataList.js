import React from "react";

const DataList = (props) => (
  <div className="lists-container">
    <h2>{props.caption}</h2>
    {props.rows.map((row, i) => (
      <div key={i}>
        {props.rowHeaders ? <h3>{row[0]}</h3> : <hr />}
        <dl>
          {props.headers.map(
            (header, i) =>
              (props.rowHeaders ? i > 0 : i >= 0) && (
                <React.Fragment key={i}>
                  <dt>{header}</dt>
                  <dd>{row[i]}</dd>
                </React.Fragment>
              ),
          )}
        </dl>
      </div>
    ))}
  </div>
);

export default DataList;
