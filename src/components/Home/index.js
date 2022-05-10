import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

function Index({title}){

  const [firstRender, setFirstRender] = useState(false);

  useEffect(() => {
    setFirstRender(true)
  }, []);

  return (
    <>
      {firstRender &&
        <div>
          <Link to="about">{title}</Link>
          <p>This is {title}</p>
        </div>
      }
    </>

  )
}

export default Index;