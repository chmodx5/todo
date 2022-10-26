import React from "react";
import { FaTimes, FaPlus, FaEdit, FaCheck } from "react-icons/fa";

const AddTodo = ({ addNewTodo, setNewTodo, newTodo, inputRef }) => {
  return (
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
  );
};

export default AddTodo;
