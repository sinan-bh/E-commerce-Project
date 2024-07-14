import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoRedux, { addTodo, deleteTodo, editTodo } from "../Redux/TodoRedux";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import "./Todo.css";

const Todo = () => {
  const [text, setText] = useState("");
  const [editText, setEditText] = useState("");
  const [iseditText, setIsEditText] = useState(null);
  const todos = useSelector((state) => state.todos.list);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  const handleEditTodo = (id) => {
    dispatch(editTodo({ id, text: editText }));
    setIsEditText(null);
    setEditText("");
  };

  return (
    <div>
      <div className="header">
        <h1>ToDo List</h1>
      </div>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <input
            className="addTodo ms-5 p-2"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="addBtn ms-2 rounded" type="submit">
            Add
          </button>
          <div className="todoList">
            <ul>
              {todos.map((list) => (
                <li className="card todoCard" key={list.id}>
                  {iseditText === list.id ? (
                    <>
                      <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                      />
                      <button className="saveBtn" onClick={() => handleEditTodo(list.id)}>
                        Save
                      </button>
                    </>
                  ) : (
                    <>
                      <div>{list.text}</div>
                      <span>
                        <FiEdit
                          className="edit ms-2"
                          onClick={() => {setIsEditText(list.id)
                            setEditText(list.text)
                          }}
                        />
                        <MdDelete
                          className="deleteTodo"
                          onClick={() => dispatch(deleteTodo(list.id))}
                        />
                      </span>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Todo;
