import React from 'react';
import { Navbar, Nav, Container, Image  } from 'react-bootstrap';

function Header() {

	return (
		<Navbar bg="light" expand="lg" fixed="top">
			<Container>
				<Navbar.Brand>					
					<Image
						width={30}
						src="https://th.bing.com/th/id/R.f81a6f373c244b1f70f4b7402b5ab372?rik=rbXh4ieLuKt%2bmA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f09%2fReact_logo_logotype_emblem.png&ehk=QhGOkKcUKCU7FBQgHOajOiJqJBACUTD2Ni6LsfqzCEA%3d&risl=&pid=ImgRaw&r=0"
					/>
					<h6 className="d-inline-block ms-2">React</h6>
				</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
		      <Nav.Link href="#home">Home</Nav.Link>
		      <Nav.Link href="#features">Features</Nav.Link>
		      <Nav.Link href="#pricing">Pricing</Nav.Link>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Header;