import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faMinus } from "@fortawesome/free-solid-svg-icons";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { text: "Help Me", isDone: false },
    { text: "I'll wake up and start coding", isDone: true },
    { text: "My third task", isDone: false },
  ]);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value !== "") {
      addTodo(value);
      setValue("");
    }
  };

  const completedTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const uncompletedTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = false;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  function addTodo(text) {
    const newTodo = [...todos, { text }];
    setTodos(newTodo);
  }
  return (
    <div>
      <div className=" flex flex-col justify-center items-center py-20">
        {todos.map((todoKey, index) => {
          return (
            <div className="py-2 rounded shadow-md my-2 flex w-1/3 justify-between items-center bg-white hover:bg-gray-100 transition-colors transform ease-in">
              <p
                className={`${
                  todoKey.isDone ? "line-through text-gray-300" : ' "" '
                } p-2 text-xl font-bold`}
              >
                {todoKey.text}
              </p>
              <div className="">
                {todoKey.isDone ? (
                  <button
                    className="bg-blue-400 p-1 mx-2 rounded hover:bg-blue-600 transition-all transform ease-in"
                    onClick={() => uncompletedTodo(index)}
                  >
                    <FontAwesomeIcon icon={faMinus} className="text-white" />
                  </button>
                ) : (
                  <button
                    className="bg-green-400 p-1 mx-2 rounded hover:bg-green-600 transition-all transform ease-in"
                    onClick={() => completedTodo(index)}
                  >
                    <FontAwesomeIcon icon={faCheck} className="text-white" />
                  </button>
                )}

                <button
                  className="bg-red-400 p-1 mx-2 rounded hover:bg-red-600 transition-all transform ease-in"
                  onClick={() => deleteTodo(index)}
                >
                  <FontAwesomeIcon icon={faTimes} className="text-white" />
                </button>
              </div>
            </div>
          );
        })}

        <form onSubmit={handleSubmit} className="w-1/3 my-2">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="bg-gray-200 border-2 rounded  p-3 w-full"
            maxLength="25"
            placeholder="Enter Task Here"
          ></input>
        </form>
      </div>
    </div>
  );
}
