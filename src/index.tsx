import * as React from "react";

import { QueryClient, QueryClientProvider } from "react-query";
import { render } from "react-dom";
import { TodoListView } from "./TodoListView";
import { store } from "./store";

const { worker } = require('./mocks/browser')
worker.start()

const queryClient = new QueryClient();

render(
  <QueryClientProvider client={queryClient}>
    <TodoListView todoList={store} />
  </QueryClientProvider>,
  document.getElementById("root")
);
