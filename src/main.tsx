import "@mantine/core/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { KitchenSink } from "./cssmod/KitchenSink";
import { KitchenSink } from "./ve-mantine-theme/KitchenSink";
// import { KitchenSink } from "./ve-vanilla-theme/KitchenSink";

import { MantineProvider } from "@mantine/core";
import { baseTheme } from "./theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider theme={baseTheme} defaultColorScheme="dark">
      <KitchenSink />
    </MantineProvider>
  </React.StrictMode>
);
