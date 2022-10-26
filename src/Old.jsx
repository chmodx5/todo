import { useRef, useState, useEffect } from "react";
import { BsPlusLg } from "react-icons/bs";
import { FaTimes, FaPlus, FaEdit, FaCheck } from "react-icons/fa";
import AddTodo from "./components/AddTodo";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [updatedTodo, setUpdatedTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState("");
  const [dispayUpdateTodoForm, setDispayUpdateTodoForm] = useState(false);

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const addNewTodo = (e) => {
    e.preventDefault();

    const newTodos = [
      ...todos,
      {
        id: todos ? todos.length + 4 : 0,
        title: newTodo,
        completed: false,
      },
    ];
    setTodos(newTodos);
    setNewTodo("");
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  const deleteTodo = (todoID) => {
    let mytodos = todos;
    mytodos = mytodos.filter((itm) => itm.id != todoID);
    setTodos(mytodos);
  };

  const updateTodo = (todoID) => {
    let mytodos = [...todos];
    let itmtobemodified = mytodos.findIndex((itm) => itm.id == todoID);
    todos[itmtobemodified].title = updatedTodo;

    setTodos(mytodos);
  };

  const setTodoStatus = (todoID) => {
    let mytodos = [...todos];
    let itmtobemodified = mytodos.findIndex((itm) => itm.id == todoID);
    todos[itmtobemodified].completed = !todos[itmtobemodified].completed;

    setTodos(mytodos);
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="w-6/12 md:w-4/12">
        {selectedTodo && <div>{selectedTodo}</div>}
        {/* add todo container */}
        <AddTodo
          addNewTodo={addNewTodo}
          setNewTodo={setNewTodo}
          newTodo={newTodo}
          inputRef={inputRef}
        />
        <form onSubmit={addNewTodo} className="relative group">
          <input
            ref={inputRef}
            type="text"
            onChange={(e) => setNewTodo(e.target.value)}
            value={newTodo}
            placeholder="Add task"
            className="py-2 group-hover:outline group-hover:outline-2   px-3 before:focus:outline w-full shadow rounded-lg"
          />
          <button
            className="bg-gray-200 px-3 absolute right-1 top-1 bottom-1 rounded-md hover:text-white   group-hover:text-white group-hover:bg-black  hover:bg-black  "
            type="submit"
          >
            <FaPlus />
          </button>
        </form>
        {/* view todod */}
        <div className="space-y-3 mt-8">
          {todos.length != 0 ? (
            <>
              {todos.map((todo) => (
                <div
                  key={todo.id}
                  className="rounded-md shadow px-2 py-2 capitalize hover:outline hover:outline-2 hover:outline-black"
                >
                  <div className="flex justify-between">
                    <span
                      className={`  ${
                        todo.completed ? "line-through text-gray-300" : ""
                      }`}
                    >
                      {todo.title}
                    </span>
                    <div>
                      <button
                        className="bg-red-300 px-3  bottom-1 rounded-md hover:text-white   text-white group-hover:bg-black  hover:bg-red-600 py-1"
                        onClick={() => deleteTodo(todo.id)}
                      >
                        <FaTimes />
                      </button>{" "}
                      <button
                        className="bg-green-300 px-3 ml-3 bottom-1 rounded-md hover:text-white   group-hover:text-white group-hover:bg-black  hover:bg-green-600 py-1"
                        onClick={() => setTodoStatus(todo.id)}
                      >
                        <FaCheck />
                      </button>
                      {!todo.completed && (
                        <button
                          className="bg-yellow-300 px-3 ml-3 bottom-1 rounded-md hover:text-white   group-hover:text-white group-hover:bg-black  hover:bg-yellow-600 py-1"
                          onClick={() =>
                            setDispayUpdateTodoForm(!dispayUpdateTodoForm)
                          }
                        >
                          <FaEdit />
                        </button>
                      )}
                    </div>
                  </div>

                  {dispayUpdateTodoForm ? (
                    <div className="relative group mt-4">
                      <input
                        type="text"
                        onChange={(e) => setUpdatedTodo(e.target.value)}
                        value={updatedTodo}
                        placeholder="Add task"
                        className="py-2 group-hover:outline group-hover:outline-2   px-3 before:focus:outline w-full shadow rounded-lg"
                      />
                      <button
                        className="bg-gray-200 px-3 absolute right-1 top-1 bottom-1 rounded-md hover:text-white   group-hover:text-white group-hover:bg-black  hover:bg-black  "
                        onClick={() => updateTodo(todo.id)}
                      >
                        <FaPlus />
                      </button>
                    </div>
                  ) : null}
                </div>
              ))}
            </>
          ) : (
            <div>no todos found</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
