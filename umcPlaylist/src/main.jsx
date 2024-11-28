import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import GlobalStyle from "./global.jsx";
import { Provider } from "react-redux";
import cartStore from "./redux/cartStore";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyle />
    <Provider store={cartStore}>
      <App />
    </Provider>
  </StrictMode>
);
