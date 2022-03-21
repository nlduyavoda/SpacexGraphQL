import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import "./index.scss";
import { QueryClient, QueryClientProvider } from "react-query";
const UDEMY = "https://www.crwn-clothing.com/";
const SPACEX = "https://api.spacex.land/graphql/";
const Pokemon = "https://graphql-pokemon2.vercel.app";
const client = new ApolloClient({
  uri: SPACEX,
  cache: new InMemoryCache(),
});
const queryClient = new QueryClient();

render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);
