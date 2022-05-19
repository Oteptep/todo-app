import React, { useState } from 'react';
import { Card, Container, ListGroup, Button, Form } from 'react-bootstrap'
import uuid from 'react-uuid'

function App() {

  const [todos, setTodos] = useState([
    {
      id: uuid(),
      name: 'To Clean',
      is_done: true,
      created_at: new Date().toLocaleDateString()
    },
    {
      id: uuid(),
      name: 'To Work',
      is_done: false,
      created_at: new Date().toLocaleDateString()
    },
    {
      id: uuid(),
      name: 'To Take a Bath',
      is_done: false,
      created_at: new Date().toLocaleDateString()
    },
    {
      id: uuid(),
      name: 'To Sleep',
      is_done: true,
      created_at: new Date().toLocaleDateString()
    },
    {
      id: uuid(),
      name: 'To Cry',
      is_done: true,
      created_at: new Date().toLocaleDateString()
    }
  ]);

  const [todo, setTodo] = useState('');

  const [hasFeedback, setHasFeedback] = useState(false);

  const MESSAGE = 'Todo field is required';

  const handleClick = (id) => () => {
    setTodos(previous => previous.map(todo => todo.id === id ? {...todo, is_done: !todo.is_done } : todo))
  }

  const handleChange = (event) => {
    setTodo(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if(todo === '')  {

      setHasFeedback(true);

      return;

    }

    setTodos(previous => [...previous, { id: uuid(), name: todo, is_done: false, created_at: new Date().toLocaleDateString() }])
    
    setTodo('');

    setHasFeedback(false);
  }

  const handleRemove = (id) => () => {
    setTodos(previous => previous.filter(todo => todo.id !== id));
  }

  return (
    <>
      <Container className="mt-5">
        <div className="d-flex justify-content-center">
          <Card style={{ width: '30rem' }}>
            <Card.Header className="d-flex align-items-center bg-white border-0">
              <h6 className="mb-0">Todo App</h6>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Todo</Form.Label>
                  <Form.Control 
                    className={hasFeedback ? 'is-invalid' : ''} 
                    onChange={handleChange} 
                    type="text" 
                    value={todo} 
                    placeholder="Enter Todo" 
                  />
                  {hasFeedback &&
                    <div className="invalid-feedback">
                      {MESSAGE}
                    </div>}
                </Form.Group>
                <div className="clearfix">
                  <Button className="mb-3 float-end" type="submit">Submit</Button>
                </div>
              </Form>
              <ListGroup>
                {todos.length === 0 && <h6 className="text-center">No Todos.</h6>}
                {todos.map(todo => 
                   <ListGroup.Item key={todo.id} className="d-flex justify-content-between">
                    <p 
                      className="mb-0" 
                      style={{ textDecoration: todo.is_done  ? 'line-through' : ''}}>
                      {`${todo.name} - ${todo.created_at}`}
                    </p>
                    <div>
                      <Button className="me-2" onClick={handleClick(todo.id)}>
                        {todo.is_done ? 'Done' : 'Working'}
                      </Button>
                      <Button variant="danger" onClick={handleRemove(todo.id)}>
                        Remove
                      </Button>
                    </div>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  )
}

export default App;