
//import statements
import React from 'react';
import './App.css';
//importing react elements that can be used on the webpage
import { Navbar, Button, FormControl, Nav, Form } from 'react-bootstrap';
//imports yelp api
import yelp from 'yelp-fusion';

//
function App() {

  //function that occurs once submit button is pressed. It is async event
  const handleSubmit = async event => {
    event.preventDefault();
    //enters to the console that the function is being run since the button has selected
    console.log("inhandlesubmit");

    //position variable
    let position;
    //await for location information to be gathered, await used for async event
    //location of user stored in position
    position = await (new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, {})
    }));
    //location is logged to the console
    console.log("Position is: ", position);

    //logs to console location of nearest chinese food spots in the area based on position (current location) of the user
    let myURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=" + "Chinese food&latitude=" + position.coords.latitude + "&longitude=" + position.coords.longitude;
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer TDr1QaMthKTujiAiGD54UiobVukzVUEpe1NQOE6nBQDb3b_JHdbgMlZOyKW2zH4uAXKCxfVO9bWLJOnmcVa5Nyx3BNHYmSbErSwRPv9dkcBMMHePK4FhY5Y32dBdXnYx");
    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
    fetch(myURL, requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result);
        return <p>This is the answer:</p>
      })
      .catch(error => console.log("error", error));
  }



  return (
    //Navigation Bar
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Mauraders Map</Navbar.Brand>
        <Nav className="mr-auto">
        </Nav>
        <Form inline>
          {/* Search button and form doesn't work */}
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
      {/* "Form" for user to choose their desired food type. Once submit button selected. handlesubmit function is run */}
      <div className="Message">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="choice">
            <Form.Label>What you you like to eat today?</Form.Label>
            <Form.Control as="select">
              {/* Food Options from yelp api */}
              <option>Chinese </option>
              <option>Burgers</option>
              <option>Indian</option>
              <option>Italian</option>
              <option>Fast Food</option>
              <option>Mexican</option>
            </Form.Control>
          </Form.Group>
          {/* Submit button to get local restaurants based on food option */}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
