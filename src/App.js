import React, { useState } from 'react';
import { Card, Container, ListGroup, Button, Form, Row, Col } from 'react-bootstrap';
import { FaTrashAlt, FaCheck, FaRedoAlt, FaPencilAlt } from 'react-icons/fa';
import uuid from 'react-uuid';
import Header from './components/Header';

function App() {

  const [todos, setTodos] = useState([
    {
      id: uuid(),
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      is_done: true,
      created_at: new Date().toLocaleDateString()
    },
    {
      id: uuid(),
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      is_done: true,
      created_at: new Date().toLocaleDateString()
    },
    {
      id: uuid(),
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      is_done: false,
      created_at: new Date().toLocaleDateString()
    },
    {
      id: uuid(),
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      is_done: false,
      created_at: new Date().toLocaleDateString()
    },
  ]);

  const [todo, setTodo] = useState('');

  const [hasFeedback, setHasFeedback] = useState(false);

  const [id, setId] = useState('');

  const MESSAGE = 'Todo field is required';

  const handleClick = (_id) => () => {
    setTodos(previous => previous.map(_todo => _todo.id === _id ? {..._todo, is_done: !_todo.is_done } : _todo))
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

    setTodos(previous => 
      !id 
        ? [...previous, { id: uuid(), name: todo, is_done: false, created_at: new Date().toLocaleDateString() }]
        : previous.map(_todo => _todo.id === id ? {..._todo, name: todo } : _todo)
    )
    
    setId('');

    setTodo('');

    setHasFeedback(false);
  }

  const handleRemove = (_id) => () => {
    setTodos(previous => previous.filter(todo => todo.id !== _id));
  }

  const handleEdit = (_id) => () => {
    setId(_id);
    setTodo(todos.find(_todo => _todo.id === _id).name);
  }

  const handleCancel = () => {
    setId('');
    setTodo('');
  }

  return (
    <>
      <Header />
      <Container fluid style={{ paddingTop: 70 }}>
        <div className="d-flex justify-content-center">
          <Card style={{ width: '30rem' }}>
            <Card.Header className="d-flex align-items-center bg-white border-0">
              <h6 className="mb-0">Todo App</h6>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-2">
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
                <div className="d-flex justify-content-end mb-3">
                  <Button className="me-2" type="submit">{id ? 'Update' : 'Submit'}</Button>
                  {id && <Button onClick={handleCancel} variant="danger">Cancel</Button>}
                </div>
              </Form>
              <ListGroup>
                {todos.length === 0 && <h6 className="text-center text-black-50">No Todos.</h6>}
                {todos.map(todo => 
                  <ListGroup.Item key={todo.id}>
                    <Row>
                      <Col md={{ span: 6 }} className="d-flex align-items-center">
                        <p className={`mb-0 ${todo.is_done ? 'text-decoration-line-through' : ''}`}>
                          {`${todo.name} - ${todo.created_at}`}
                        </p>
                      </Col>
                      <Col md={{ span: 6 }} className="d-flex align-items-center justify-content-end">
                        <div>
                          <Button className="me-2" onClick={handleClick(todo.id)}>
                            {todo.is_done ? <FaRedoAlt /> : <FaCheck />}
                          </Button>
                          <Button className="me-2" variant="danger" onClick={handleRemove(todo.id)}>
                            <FaTrashAlt />
                          </Button>
                          <Button variant="warning" onClick={handleEdit(todo.id)}>
                            <FaPencilAlt />
                          </Button>
                        </div>
                      </Col>
                    </Row>
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