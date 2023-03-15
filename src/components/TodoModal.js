import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import '../style/TodoModal.css'
    

function TodoModal({ show, onClose }) {
    const [title, setTitle] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [status, setStatus] = useState('');
    const [priority, setPriority] = useState('');
    

    const handleSubmit = (event) => {
        event.preventDefault();
        if (title==='' || dueDate==='' || status==='' || priority==='') {
            alert('All fields are required!');
            return;
        }
        const todo = { title, dueDate, status, priority }
        fetch('http://localhost:3001/todos', {
          method: 'POST',
          body: JSON.stringify(todo),
          headers: { 'Content-Type': 'application/json' },
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            setTitle('');
            setDueDate('');
            setStatus('');
            setPriority('');
            onClose();
          })
          .catch(error => {
            console.error('Error:', error);
          });
      }
    
    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header >
                <Modal.Title>Add Todo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter Todo Title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Due Date</Form.Label>
                        <Form.Control type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Status</Form.Label>
                        <Form.Control as="select" value={status} onChange={(e) => setStatus(e.target.value)} required>
                            <option value="">Select Status</option>
                            <option value="todo">Todo</option>
                            <option value="in-progress">In Progress</option>
                            <option value="done">Done</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Priority</Form.Label>
                        <Form.Control as="select" value={priority} onChange={(e) => setPriority(e.target.value)} required>
                            <option value="">Select Priority</option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Add Todo
                    </Button>
                    <Button variant="secondary" onClick={onClose}>Close</Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default TodoModal;

