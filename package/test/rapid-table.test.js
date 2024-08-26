import React from "react";
import { render } from "@testing-library/react";
import Table from "../src/index";

test("Render Table", () => {
  const { asFragment } = render(<Table data={mockData} />);
  expect(asFragment()).toMatchSnapshot();
});

test("Render Table with customizations", () => {
  const { asFragment } = render(
    <Table
      data={mockData}
      breakpoint="800px"
      headerOrder={["Email", "IP Address", "Last Name", "First Name"]}
      rowHeaders
      caption="Great Data"
      sortable={false}
      tableColor="#44a08d"
      headerTextColor="black"
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

const mockData = [
  {
    id: 1,
    "First Name": "Blanch",
    "Last Name": "Elby",
    Email: "belby0@bing.com",
    Gender: "Female",
    "IP Address": "112.81.107.207",
  },
  {
    id: 2,
    "First Name": "Gilli",
    "Last Name": "Ebourne",
    Email: "gebourne1@cornell.edu",
    Gender: "Female",
    "IP Address": "175.193.73.246",
  },
  {
    id: 3,
    "First Name": "Barny",
    "Last Name": "Curzon",
    Email: "bcurzon2@forbes.com",
    Gender: "Male",
    "IP Address": "122.156.241.94",
  },
];
