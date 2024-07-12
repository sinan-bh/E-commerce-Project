import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, showTodo } from "../Redux/TodoRedux";
import { data } from "../Redux/TodoRedux";

const Tod = () => {
  const [text, setText] = useState("");
  const all = useSelector(data)
  console.log(all);
  const dispatch = useDispatch();
  // const todos = useSelector((state) => state.todos);


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <div>
      <div>
        <h1>ToDo List</h1>
      </div>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">Add</button>
          <div>
            <ul>
              {all.map((list, index) => (
                <li className=" card p-2 m-1" key={index}>
                  <input
                    type="checkbox"
                    checked={list.completed}
                    onChange={() => dispatch(showTodo(list.id))}
                  />
                  <span
                    style={{
                      textDecoration: list.completed ? "line-through" : "none",
                    }}
                  >
                    {list.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Tod;
