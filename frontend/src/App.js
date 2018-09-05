import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';
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
                      <FormGroup row>
                          <Label for="username" sm={3}>Kasutaja:</Label>
                          <Col sm={8}>
                            <Input type="text" name="username" id="username" placeholder="Sisestage kasutajanimi" />
                          </Col>
                      </FormGroup>
                      <FormGroup row>
                          <Label for="Password" sm={3}>Parool:</Label>
                          <Col sm={8}>
                          <Input type="password" name="password" id="Password" placeholder="Sisestage parool" />
                          </Col>
                      </FormGroup>
                      <Button className="login-btn">LOGI SISSE</Button> <Button className="new-user-button">Loo uus kasutaja</Button>

                          <div className="text-right p-t-13 p-b-23">
                              <p className="txt1">Unustasid <a href="#" className="txt2">kasutajanime/parooli?</a></p>
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
