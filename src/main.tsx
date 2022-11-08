import { createStandaloneToast as createChakraStandaloneToast } from "@chakra-ui/react";
import { createStandaloneToast, KlikProvider, theme } from "@lego/klik-ui";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const { ToastContainer: KlikToastContainer } = createStandaloneToast();
const { ToastContainer: ChakraToastContainer } = createChakraStandaloneToast();

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <KlikProvider theme={theme}>
      <App />
      <KlikToastContainer />
      <ChakraToastContainer />
    </KlikProvider>
  </React.StrictMode>
);
