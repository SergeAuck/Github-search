import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

//dev-tw5ym7boeg15wdmb.us.auth0.com
//LQNvmugHgqGYU9y0XBaYKtuyr9keYIe2

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-tw5ym7boeg15wdmb.us.auth0.com"
      clientId="LQNvmugHgqGYU9y0XBaYKtuyr9keYIe2"
      authorizationParams={{
        redirect_uri: window.location.origin,
        CacheLocation: "localstorage",
      }}
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
