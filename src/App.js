import React, { useState } from 'react';
import { Card, Container, ListGroup, Button } from 'react-bootstrap'
import uuid from 'react-uuid'

function App() {

  const [list, setList] = useState([
    {
      id: uuid(),
      name: 'Test',
      done: true,
      created_at: new Date().toLocaleDateString()
    },
    {
      id: uuid(),
      name: 'Test',
      done: false,
      created_at: new Date().toLocaleDateString()
    },
    {
      id: uuid(),
      name: 'Test',
      done: false,
      created_at: new Date().toLocaleDateString()
    },
    {
      id: uuid(),
      name: 'Test',
      done: true,
      created_at: new Date().toLocaleDateString()
    },
    {
      id: uuid(),
      name: 'Test',
      done: true,
      created_at: new Date().toLocaleDateString()
    }
  ]);


  const handleClick = (id) => () => {
    setList(previous => previous.map(item => item.id === id ? {...item, done: !item.done } : item))
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
              <ListGroup>
                {list.map((data, key) => 
                   <ListGroup.Item key={data.id} className="d-flex justify-content-between">
                    <p 
                      className="mb-0" 
                      style={{ textDecoration: data.done  ? 'line-through' : ''}}>
                      {`${data.name} ${key + 1} - ${data.created_at}`}
                    </p>
                    <Button onClick={handleClick(data.id)}>
                      {data.done ? 'Done' : 'Working'}
                    </Button>
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