import * as React from 'react';
import { render } from 'react-dom';
import { observer } from 'mobx-react-lite';
import {
  makeObservable,
  observable,
  computed,
  action,
  autorun,
  reaction,
  when
} from 'mobx';
import './index.scss';

// state of a Todo
class Todo {
  id = Math.random();
  title = '';
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
      clearTodo: action
    });

    autorun(() =>
      console.log('auto run: run each state change', this.todos.length)
    );
    reaction(
      () => this.unfinishedTodoCount,
      (unfinishedTodoCount) => {
        console.log('reaction', unfinishedTodoCount);
      }
    );

    when(
      () => this.todos.length >= 4,
      () => (this.todos = [])
    );
    this.todos = todos;
  }
}

const TodoListView = observer(({ todoList }) => {
  return (
    <div className="todo">
      <form
        className="todo-form"
        onSubmit={(e) => {
          e.preventDefault();

          // on submit, get todo title
          const todoTitle = e.currentTarget.elements['todo-title'].value;

          // if exist -> add todo
          // TODO: implement an addTodo action in TodoList
          if (todoTitle) {
            todoList.addTodo(todoTitle);
          }
        }}
      >
        <input
          type="text"
          name="todo-title"
          placeholder="Write your todo title..."
        />
        <button type="submit">Submit</button>
      </form>
      <div className="todo-body">
        <ul>
          {todoList.todos.map((todo) => (
            <TodoView todo={todo} key={todo.id} />
          ))}
        </ul>
      </div>
      <div className="todo-footer">
        <div className="todo-footer__txt">
          Tasks left: {todoList.unfinishedTodoCount}
        </div>
        <button onClick={() => todoList.clearTodo()}>Clear</button>
      </div>
    </div>
  );
});

const TodoView = observer(({ todo }) => (
  <li
    onClick={() => todo.toggle()}
    className={todo.finished ? 'text-line-through' : ''}
  >
    <input
      type="checkbox"
      checked={todo.finished}
      onChange={() => todo.toggle()}
    />
    {todo.title}
  </li>
));

const store = new TodoList([
  new Todo('Get Coffee'),
  new Todo('Write simpler code')
]);

render(<TodoListView todoList={store} />, document.getElementById('root'));
