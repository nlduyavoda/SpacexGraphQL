import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import * as React from "react";
import { render } from "react-dom";
import { QueryClient } from "react-query";
import CollectionOverViewContainer from "./CollectionOverViewContainer";
import StudentForm from "StudentForm/StudentForm";
import InsertForm from "./component/InsertForm";
import List from "component/List";
import Table from "component/FormikForm";
import FormikForm from "component/FormikForm";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
const UDEMY = "https://www.crwn-clothing.com/";
const SPACEX = "https://api.spacex.land/graphql/";
const Pokemon = "https://graphql-pokemon2.vercel.app";
const client = new ApolloClient({
  uri: SPACEX,
  cache: new InMemoryCache(),
});

render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,

  document.getElementById("root")
);
