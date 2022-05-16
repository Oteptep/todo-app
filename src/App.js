import React, { useState } from 'react';
import { Card, Container, ListGroup, Button } from 'react-bootstrap'

function App() {

  const [list, setList] = useState([
    {
      id: 1,
      name: 'Test',
      done: true,
      created_at: new Date().toLocaleDateString()
    },
    {
      id: 2,
      name: 'Test',
      done: false,
      created_at: new Date().toLocaleDateString()
    },
    {
      id: 3,
      name: 'Test',
      done: false,
      created_at: new Date().toLocaleDateString()
    },
    {
      id: 4,
      name: 'Test',
      done: true,
      created_at: new Date().toLocaleDateString()
    },
    {
      id: 5,
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
            <Card.Header className="d-flex align-items-center bg-white">
              <h6 className="mb-0">Todo App</h6>
            </Card.Header>
            <Card.Body>
              <ListGroup>
                {list.map(data => 
                   <ListGroup.Item className="d-flex justify-content-between">
                    <p 
                      className="mb-0" 
                      style={{ textDecoration: data.done  ? 'line-through' : ''}}>
                      {`${data.name} ${data.id} - ${data.created_at}`}
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