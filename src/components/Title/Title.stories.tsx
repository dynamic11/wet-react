import React from "react";
import { storiesOf } from "@storybook/react";

import Title from "./Title";

const stories = storiesOf("Typography", module);

stories.add("Titles", () => {
  return (
    <>
      <Title level={1}>h1. Heading 1</Title>
      <Title level={2}>h2. Heading 2</Title>
      <Title level={3}>h3. Heading 3</Title>
      <Title level={4}>h4. Heading 4</Title>
      <Title level={5}>h5. Heading 5</Title>
      <Title level={6}>h6. Heading 6</Title>
    </>
  );
});
