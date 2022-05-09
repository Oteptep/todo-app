import React from 'react';
import { Link } from 'react-router-dom'

function Index(){
	return (
		<div>
			<Link to="about">About</Link>
			<p>This is homepage</p>
		</div>
	)
}

export default Index;