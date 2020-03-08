import React from 'react';
import './App.css';
import { Navbar, Button, FormControl, Nav, Form } from 'react-bootstrap';
import yelp from 'yelp-fusion';

function App() {

  const handleSubmit = async event => {
    event.preventDefault();
    console.log("inhandlesubmit");

    let position;
    position = await (new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, {})
    }));
    console.log("Position is: ", position);


    const client = yelp.client('TDr1QaMthKTujiAiGD54UiobVukzVUEpe1NQOE6nBQDb3b_JHdbgMlZOyKW2zH4uAXKCxfVO9bWLJOnmcVa5Nyx3BNHYmSbErSwRPv9dkcBMMHePK4FhY5Y32dBdXnYx');

    client.search({
      term: 'Chinese',
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    }).then(response => {
      console.log(response.jsonBody.businesses[0].name);
    }).catch(e => {
      console.log(e);
    });
  }



  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Mauraders Map</Navbar.Brand>
        <Nav className="mr-auto">
          {/* <Nav.Link href="#home">Restaurants</Nav.Link>
          <Nav.Link href="#features">Reviews</Nav.Link>
          <Nav.Link href="#pricing">About</Nav.Link> */}
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
      <div className="Message">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="choice">
            <Form.Label>What you you like to eat today?</Form.Label>
            <Form.Control as="select">
              <option>Chinese </option>
              <option>Burgers</option>
              <option>Indian</option>
              <option>Italian</option>
              <option>Fast Food</option>
              <option>Mexican</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
