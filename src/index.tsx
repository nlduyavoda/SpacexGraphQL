import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import * as React from "react";
import { render } from "react-dom";
import { QueryClient } from "react-query";
import CollectionOverViewContainer from "./CollectionOverViewContainer";
import StudentForm from "StudentForm/StudentForm";
import InsertForm from "./component/InsertForm";
import List from "component/List";
import Table from "component/FormikForm";
import UpdateForm from "./component/UpdateForm";
import FormikForm from "component/FormikForm";
const UDEMY = "https://www.crwn-clothing.com/";
const SPACEX = "https://api.spacex.land/graphql/";
const client = new ApolloClient({
  uri: SPACEX,
  cache: new InMemoryCache(),
});

render(
  <ApolloProvider client={client}>
    {/* <FormikForm /> */}
    {/* <CollectionOverViewContainer /> */}
    <List />
    {/* <Table/> */}
    {/* <InsertForm /> */}
  </ApolloProvider>,
  document.getElementById("root")
);
