import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';

function Index(){
  return (
    <div>
      <Link to="/">Home</Link>
      <p>This is aboutpage</p>
    </div>
  )
}

export default Index;