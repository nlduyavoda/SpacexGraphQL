import * as React from "react";
import { render } from "react-dom";
import { observer } from "mobx-react-lite";
import { makeObservable, observable, computed, action } from "mobx";

// state of a Todo
class Todo {
  id = Math.random();
  title = "";
  finished = false;

  // action
  toggle() {
    this.finished = !this.finished;
  }

  constructor(title) {
    makeObservable(this, {
      title: observable,
      finished: observable,
      toggle: action
    });
    this.title = title;
  }
}

// state of TodoList
class TodoList {
  todos = [];

  // computed
  get unfinishedTodoCount() {
    return this.todos.filter((todo) => !todo.finished).length;
  }

  // actions:
  // TODO: implement addTodo method
  addTodo(todoTitle) {
    const data =new Todo(todoTitle);
    this.todos = [...this.todos, data]
  }
  constructor(todos) {
    makeObservable(this, {
      todos: observable,
      unfinishedTodoCount: computed
    });
    this.todos = todos;
  }
}

const TodoListView = observer(({ todoList }) => {
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()

        // on submit, get todo title
        const todoTitle = e.currentTarget.elements['todo-title'].value

        // if exist -> add todo
        // TODO: implement an addTodo action in TodoList
        if (todoTitle) {
            todoList.addTodo(todoTitle);
        }
      }}>
        <input type="text" name="todo-title" placeholder="Write your todo title..."/>
        <button type="submit">Submit</button>
      </form>
      <div>
        <ul>
          {todoList.todos.map(todo => (
            <TodoView todo={todo} key={todo.id} />
          ))}
        </ul>
        Tasks left: {todoList.unfinishedTodoCount}
      </div>
    </div>
  )
});

const TodoView = observer(({ todo }) => (
  <li>
    <input
      type="checkbox"
      checked={todo.finished}
      onChange={() => todo.toggle()}
    />
    {todo.title}
  </li>
));

const store = new TodoList([
  new Todo("Get Coffee"),
  new Todo("Write simpler code")
]);

render(<TodoListView todoList={store} />, document.getElementById("root"));
