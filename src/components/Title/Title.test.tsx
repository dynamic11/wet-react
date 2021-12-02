import React from "react";
import { render } from "@testing-library/react";

import Title from "./Title";

describe("Title", () => {
  test("renders the level 1 Title component", () => {
    render(<Title level={1}>Hello world!</Title>);
  });
  test("renders the level 2 Title component", () => {
    render(<Title level={2}>Hello world!</Title>);
  });
  test("renders the level 3 Title component", () => {
    render(<Title level={3}>Hello world!</Title>);
  });
  test("renders the level 4 Title component", () => {
    render(<Title level={4}>Hello world!</Title>);
  });
  test("renders the level 5 Title component", () => {
    render(<Title level={5}>Hello world!</Title>);
  });
  test("renders the level 6 Title component", () => {
    render(<Title level={6}>Hello world!</Title>);
  });
});
