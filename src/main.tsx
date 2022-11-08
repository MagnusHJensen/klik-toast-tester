import { ChakraProvider } from "@chakra-ui/react";
import { KlikProvider } from "@lego/klik-ui";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <KlikProvider>
      <App />
    </KlikProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
