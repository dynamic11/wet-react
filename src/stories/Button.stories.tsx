import React from "react";
import { storiesOf } from "@storybook/react";

import { Button } from "../components";

const stories = storiesOf("App Test", module);

stories.add("App", () => <Button label="Hello World" />);
