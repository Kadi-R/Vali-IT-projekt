import React, { Component } from 'react';
import ReactDOM from "react-dom";
import {Button, Form, FormGroup, Label, Input, Col} from 'reactstrap';
import logo from './logo.svg';
import './css/App.css';
import Modal from 'react-modal';

class App extends Component {
    constructor(props,context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

  render() {
    return (
      <div className="App">
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
                      <Button className="login-btn">LOGI SISSE</Button> <Button className="new-user-button" onClick={this.handleShow}>
                        Loo uus kasutaja
                        </Button>
                          <div className="text-right p-t-13 p-b-23">
                              <p className="txt1">Unustasid <a href="#" className="txt2">kasutajanime/parooli?</a></p>
                          </div>
                  </Form>
                  </div>
              </div>
          </div>
          <Modal show={this.handleShow()} onClose={this.handleClose}>
              <div>I am a modal</div>
              <form>
                  <input />
                  <button>tab navigation</button>
                  <button>stays</button>
                  <button>inside</button>
                  <button>the modal</button>
              </form>
              <button onClick={this.handleClose}>close</button>
          </Modal>
      </div>
    );
  }
}

export default App;
