import React, { Component } from 'react';
import {Button, Form, FormGroup, Label, Input, Col} from 'reactstrap';
import logo from './logo.svg';
import './css/App.css';
//import Modal from 'react-modal';
import {Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class App extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);

        this.state = {
            modal: false
        };
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
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
                          <Col sm={11}>
                            <Input type="text" name="username" id="username" placeholder="   Kasutajanimi" />
                          </Col>
                      </FormGroup>
                      <FormGroup row>
                          <Col sm={11}>
                          <Input type="password" name="password" id="password" placeholder="   Parool" />
                          </Col>
                      </FormGroup>
                      <Button className="login-btn">LOGI SISSE</Button> <Button className="new-user-button" onClick={()=>this.toggle}>
                        Loo uus kasutaja
                        </Button>
                          <div className="text-right p-t-13 p-b-23">
                              <p className="txt1">Unustasid <a href="#" className="txt2">kasutajanime/parooli?</a></p>
                          </div>
                  </Form>
                  </div>
              </div>
          </div>
          <Modal isOpen={this.state.show} toggle={this.toggle} className={this.props.className}>
              <ModalHeader>Modal title</ModalHeader>
              <ModalBody>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </ModalBody>
              <ModalFooter>
                  <Button color="primary">LOO</Button>{' '}
                  <Button color="secondary">TÜHISTA</Button>
              </ModalFooter>
          </Modal>
      </div>
    );
  }
}

export default App;
