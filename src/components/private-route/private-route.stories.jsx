import React from "react";
import { storiesOf } from "@storybook/react";
import PrivateRoute from "./private-route.component.jsx";

storiesOf("components/PrivateRoute", module).add("test", () => (
  <PrivateRoute />
));
