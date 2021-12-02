import React from "react";
import { storiesOf } from "@storybook/react";

import { Button } from "../components";

const stories = storiesOf("App Test", module);

stories.add("App", () => {
  return (
    <>
      <h1>Buttons</h1>
      <h2>Regular Buttons</h2>
      <Button variant="primary">Default</Button>{" "}
      <Button variant="secondary">Secondary</Button>{" "}
      <Button variant="danger">Danger</Button>{" "}
      <Button variant="light">Light</Button>{" "}
      <Button variant="link">Link</Button>{" "}
      <Button variant="success">Success</Button>{" "}
      <Button variant="warning">Warning</Button>{" "}
      <Button variant="info">Info</Button> <Button variant="dark">Dark</Button>{" "}
      <h2>Outline Buttons (not supported)</h2>
      <Button variant="outline-primary">Default</Button>{" "}
      <Button variant="outline-secondary">Secondary</Button>{" "}
      <Button variant="outline-danger">Danger</Button>{" "}
      <Button variant="outline-light">Light</Button>{" "}
      <Button variant="outline-success">Success</Button>{" "}
      <Button variant="outline-warning">Warning</Button>{" "}
      <Button variant="outline-info">Info</Button>{" "}
      <Button variant="outline-dark">Dark</Button>
      <h2>Sizes</h2>
      <Button variant="outline-primary" size="lg">
        Large
      </Button>{" "}
      <Button variant="outline-secondary" size="sm">
        Small
      </Button>
      <h2>Active state</h2>
      <Button variant="primary" size="lg" active>
        Primary button
      </Button>{" "}
      <Button variant="secondary" size="lg" active>
        Button
      </Button>
      <h2>Disabled state</h2>
      <Button variant="primary" size="lg" disabled>
        Primary button
      </Button>{" "}
      <Button variant="secondary" size="lg" disabled>
        Button
      </Button>
      <h2>Button tags</h2>
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
