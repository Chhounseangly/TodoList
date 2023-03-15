import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import TodoModal from "./TodoModal";
import EditModal from "./EditModal";

function TodoTable() {
  const [todos, setTodos] = useState([]);
  const [showTodoModal, setShowTodoModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [todo, setTodo] = useState({});
  const [selectedTask, setSelectedTask] = useState({});

  useEffect(() => {
    fetch("http://localhost:3001/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error("Error:", error));
  }, [todos]);

  const handleEdit = (task) => {
    setSelectedTask(task);
    setShowEditModal(true);
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/todos/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTodos(todos.filter((todo) => todo.id !== id));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.title}</td>
              <td>{todo.dueDate}</td>
              <td>{todo.status}</td>
              <td>{todo.priority}</td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(todo.id)}>
                  Delete
                </Button>
                <Button variant="danger" onClick={() => handleEdit(todo)}>
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <TodoModal show={showTodoModal} onClose={() => setShowTodoModal(false)} />
      <EditModal
        task={selectedTask}
        show={showEditModal}
        onClose={() => setShowEditModal(false)}
      />
    </>
  );
}
export default TodoTable;
