import React, { useState } from "react";
import { FaTimes, FaPlus, FaEdit, FaCheck } from "react-icons/fa";

const SingleTodo = ({
  todo,
  deleteTodo,
  setTodoStatus,
  setUpdatedTodo,
  updateTodo,
  updatedTodo,
}) => {
  const [dispayUpdateTodoForm, setDispayUpdateTodoForm] = useState(false);
  return (
    <div
      key={todo.id}
      className="bg-gray-100 rounded-md shadow px-2 py-2 capitalize hover:outline hover:outline-2 hover:outline-black"
    >
      <div className="flex justify-between">
        <span
          className={`  ${todo.completed ? "line-through text-gray-300" : ""}`}
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
              onClick={() => setDispayUpdateTodoForm(!dispayUpdateTodoForm)}
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
            onClick={() => {
              updateTodo(todo.id);
              setDispayUpdateTodoForm(false);
            }}
          >
            <FaPlus />
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default SingleTodo;
