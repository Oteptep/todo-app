import React from 'react';
import { Link } from 'react-router-dom'

function Index({title}){

  return (
    <div>
      <Link to="/">{title}</Link>
      <p>This is {title}</p>
    </div>
  )
}

export default Index;