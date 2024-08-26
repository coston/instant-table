"use client";

import React from "react";
import Demo from "react-pkg-demo";
import Table from "instant-table";
import mockData from "../data/mockData";

function HomePage({ content }: { content: string }) {
  const color = "#e3cbc3";

  return (
    <Demo
      color={color}
      packageName={"instant-table"}
      icon={"⌗"}
      scope={{ Table, mockData }}
      markdown={content}
    />
  );
}

export default HomePage;
