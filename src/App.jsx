import { useRef, useState, useEffect } from "react";
import { BsPlusLg } from "react-icons/bs";
import { FaTimes, FaPlus, FaEdit, FaCheck } from "react-icons/fa";
import AddTodo from "./components/AddTodo";
import SingleTodo from "./components/SingleTodo";

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
    setUpdatedTodo("");
  };

  const setTodoStatus = (todoID) => {
    let mytodos = [...todos];
    let itmtobemodified = mytodos.findIndex((itm) => itm.id == todoID);
    todos[itmtobemodified].completed = !todos[itmtobemodified].completed;

    setTodos(mytodos);
  };

  return (
    <div className="min-h-screen w-full  pt-10">
      <div className=" mx-auto w-6/12 md:w-4/12">
        <h1 className="text-xl font-bold text-center mb-4 capitalize">
          my todo app{" "}
        </h1>
        {selectedTodo && <div>{selectedTodo}</div>}
        {/* add todo container */}
        <AddTodo
          addNewTodo={addNewTodo}
          setNewTodo={setNewTodo}
          newTodo={newTodo}
          inputRef={inputRef}
        />

        {/* view todod */}
        <div className="space-y-3 mt-4">
          {todos.length != 0 ? (
            <>
              {todos.map((todo) => (
                <>
                  <SingleTodo
                    todo={todo}
                    deleteTodo={deleteTodo}
                    setTodoStatus={setTodoStatus}
                    setDispayUpdateTodoForm={setDispayUpdateTodoForm}
                    setUpdatedTodo={setUpdatedTodo}
                    updateTodo={updateTodo}
                    updatedTodo={updatedTodo}
                  />
                </>
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
