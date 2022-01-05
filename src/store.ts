import {
  makeObservable,
  observable,
  computed,
  action,
  autorun,
  reaction,
  when,
} from "mobx";

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
      toggle: action,
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
    console.log(todoTitle);
    const data = new Todo(todoTitle);
    this.todos = [...this.todos, data];
  }
  clearTodo() {
    this.todos = [];
  }
  constructor(todos) {
    makeObservable(this, {
      todos: observable,
      unfinishedTodoCount: computed,
      addTodo: action,
      clearTodo: action,
    });

    autorun(() =>
      console.log("auto run: run each state change", this.todos.length)
    );
    reaction(
      () => this.unfinishedTodoCount,
      (unfinishedTodoCount) => {
        console.log("reaction", unfinishedTodoCount);
      }
    );

    when(
      () => this.todos.length >= 4,
      () => (this.todos = [])
    );
    this.todos = todos;
  }
}

export const store = new TodoList([
  new Todo("Get Coffee"),
  new Todo("Write simpler code"),
]);
