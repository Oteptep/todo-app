import React from 'react';
import { Card, Container, ListGroup } from 'react-bootstrap'

function App() {


  const list = [
    {
      name: 'Test',
      done: true,
      created_at: new Date().toLocaleDateString()
    },
    {
      name: 'Test',
      done: false,
      created_at: new Date().toLocaleDateString()
    },
    {
      name: 'Test',
      done: false,
      created_at: new Date().toLocaleDateString()
    },
    {
      name: 'Test',
      done: true,
      created_at: new Date().toLocaleDateString()
    },
    {
      name: 'Test',
      done: true,
      created_at: new Date().toLocaleDateString()
    }
  ];


  return (
    <>
      <Container className="mt-5">
        <div className="d-flex justify-content-center">
          <Card style={{ width: '30rem' }}>
            <Card.Header className="d-flex align-items-center bg-white">
              <h6 className="mb-0">Todo App</h6>
            </Card.Header>
            <Card.Body>
              <ListGroup>
                {list.map(data => <ListGroup.Item><p className="mb-0" style={{ textDecoration: data.done  ? 'line-through' : ''}}>{`${data.name} - ${data.created_at}`}</p></ListGroup.Item>)}
              </ListGroup>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  )
}

export default App;