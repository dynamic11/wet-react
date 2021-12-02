import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "./Button";

const stories = storiesOf("Buttons", module);

stories.add("Regular", () => {
  return (
    <>
      <h1>Regular Buttons</h1>
      <Button variant="primary">Default</Button>{" "}
      <Button variant="secondary">Secondary</Button>{" "}
      <Button variant="danger">Danger</Button>{" "}
      <Button variant="light">Light</Button>{" "}
      <Button variant="link">Link</Button>{" "}
      <Button variant="success">Success</Button>{" "}
      <Button variant="warning">Warning</Button>{" "}
      <Button variant="info">Info</Button> <Button variant="dark">Dark</Button>{" "}
    </>
  );
});

stories.add("Outlined (not supported)", () => {
  return (
    <>
      <h1>Outline Buttons (not supported)</h1>
      <Button variant="outline-primary">Default</Button>{" "}
      <Button variant="outline-secondary">Secondary</Button>{" "}
      <Button variant="outline-danger">Danger</Button>{" "}
      <Button variant="outline-light">Light</Button>{" "}
      <Button variant="outline-success">Success</Button>{" "}
      <Button variant="outline-warning">Warning</Button>{" "}
      <Button variant="outline-info">Info</Button>{" "}
      <Button variant="outline-dark">Dark</Button>
    </>
  );
});

stories.add("Sizes", () => {
  return (
    <>
      <h1>Sizes</h1>
      <Button variant="outline-primary" size="lg">
        Large
      </Button>{" "}
      <Button variant="outline-secondary" size="sm">
        Small
      </Button>
    </>
  );
});

stories.add("Active/Disabled", () => {
  return (
    <>
      <h1>Active state</h1>
      <Button variant="primary" size="lg" active>
        Primary button
      </Button>{" "}
      <Button variant="secondary" size="lg" active>
        Button
      </Button>
      <h1>Disabled state</h1>
      <Button variant="primary" size="lg" disabled>
        Primary button
      </Button>{" "}
      <Button variant="secondary" size="lg" disabled>
        Button
      </Button>
    </>
  );
});

stories.add("Tags", () => {
  return (
    <>
      <h1>Button tags</h1>
      <p>
        Normally components will render a HTML <code>Button</code> element.
        However you can render whatever you'd like, adding a href prop will
        automatically render an <code>a</code> element. You can use the as prop
        to render whatever your heart desires. React Bootstrap will take care of
        the proper ARIA roles for you.
      </p>
      <Button variant="primary" href="#">
        Link
      </Button>{" "}
      <Button type="submit">Button</Button>{" "}
      <Button as="input" type="button" value="Input" />{" "}
      <Button as="input" type="submit" value="Submit" />{" "}
      <Button as="input" type="reset" value="Reset" />
    </>
  );
});
