import React from 'react';
import './App.css';
import { Navbar, Button, FormControl, Nav, Form } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Mauraders Map</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Restaurants</Nav.Link>
          <Nav.Link href="#features">Reviews</Nav.Link>
          <Nav.Link href="#pricing">About</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
      <div className="Message">
        This is a simple restaurant app!
      </div>
    </div>
  );
}

export default App;
