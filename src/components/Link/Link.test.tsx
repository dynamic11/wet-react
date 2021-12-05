import React from "react";
import { render } from "@testing-library/react";

import Link from "./Link";

describe("Link", () => {
  test("renders sample links", () => {
    render(
      <Link href="https://www.google.com/" target="_blank">
        Hello world!
      </Link>
    );
  });
});
