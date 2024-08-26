import React from "react";
import styled from "styled-components";

const Arrow = (props) => {
  let ascending = props.sortDir === "ascending";
  return (
    <Svg viewBox="0 0 100 200" width="100" height="200">
      {!(!ascending && props.isCurrent) && (
        <polyline points="20 50, 50 20, 80 50" />
      )}
      <line x1="50" y1="20" x2="50" y2="180" />
      {!(ascending && props.isCurrent) && (
        <polyline points="20 150, 50 180, 80 150" />
      )}
    </Svg>
  );
};

export default Arrow;

const Svg = styled.svg`
  stroke: currentColor;
  stroke-width: 20;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  width: auto;
  height: 1.5em;
`;
