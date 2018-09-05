import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import logo from './logo.svg';
import './css/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

  render() {
    return (
      <div className="App">
          <body>
          <div className="limiter">
              <div className="wrap-login100">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1 className="App-title">Kohtumised käeulatuses!</h1>
              <div className="container-login100">
                  <Form>
                      <FormGroup>
                          <Label for="Eesnimi">Eesnimi:</Label>
                          <Input type="text" name="firstname" id="firstname" placeholder="Sisestage eesnimi" />
                      </FormGroup>
                      <FormGroup>
                          <Label for="Perenimi">Perenimi:</Label>
                          <Input type="text" name="surname" id="surname" placeholder="Sisestage perekonnanimi" />
                      </FormGroup>
                      <FormGroup>
                          <Label for="Email">Email:</Label>
                          <Input type="email" name="email" id="Email" placeholder="Sisestage email" />
                      </FormGroup>
                      <FormGroup>
                          <Label for="Password">Password</Label>
                          <Input type="password" name="password" id="Password" placeholder="Sisestage parool" />
                      </FormGroup>
                      <Button className="send-button">Saada</Button> <Button className="new-user-button">Loo uus kasutaja</Button>

                          <div className="text-right p-t-13 p-b-23">
						<span className="txt1">
							Unustasid
						</span>
                              <a href="#" className="txt2">
                                  kasutajanime/parooli?
                              </a>
                          </div>
                  </Form>
                  </div>
              </div>
          </div>
          </body>
      </div>

    );
  }
}

export default App;
