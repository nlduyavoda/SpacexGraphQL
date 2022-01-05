import { observer } from "mobx-react-lite";
// import useQuery

import "./index.scss";

// APIs:
const fetchMembers = async () => {
  const result = await fetch("/members", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  });

  return result.json();
};

export const TodoListView = observer<{ todoList }>(({ todoList }) => {
  const status = 'loading'
  const data = [] 
  // use useQuery to get data from api fetchMembers

  return (
    <div className="todo">
      <form
        className="todo-form"
        onSubmit={(e) => {
          e.preventDefault();

          // on submit, get todo title
          const todoTitle = e.currentTarget.elements["todo-title"].value;

          const assignedMember = e.currentTarget.elements["assign-to"].value;
          console.log("🚀 ~ file: TodoListView.tsx ~ line 31 ~ assignedMember", assignedMember)

          // if exist -> add todo
          // TODO: implement an addTodo action in TodoList
          if (todoTitle) {
            todoList.addTodo(todoTitle);
          }
        }}
      >
        {status === "loading" ? (
          "fetching members..."
        ) : (
          <select name="assign-to">
            {data.map((member) => (
              <option key={member}>{member}</option>
            ))}
          </select>
        )}
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

const TodoView = observer<{ todo }>(({ todo }) => (
  <li
    onClick={() => todo.toggle()}
    className={todo.finished ? "text-line-through" : ""}
  >
    <input
      type="checkbox"
      checked={todo.finished}
      onChange={() => todo.toggle()}
    />
    {todo.title}
  </li>
));
