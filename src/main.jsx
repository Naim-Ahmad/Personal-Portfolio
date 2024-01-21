
import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import "./index.css";

import Emailjs from "@emailjs/browser";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";

Emailjs.init("hHTXS9JawQYx_zKJU");

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
