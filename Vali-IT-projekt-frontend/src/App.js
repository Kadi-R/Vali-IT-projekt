import React, { Component } from 'react';
import {Button, Form, FormGroup, Input, Col} from 'reactstrap';
import logo from './images/logo.svg';
import './css/App.css';
import Modal from 'react-responsive-modal';

class App extends Component {
    constructor(props) {
        super(props);

        this.onOpenModal = this.onOpenModal.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);

        this.state = {
            open: false
        };
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };


  render() {
      const {open} = this.state;
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
                      <Button className="login-btn">LOGI SISSE</Button>
                      <Button className="new-user-button" onClick={this.onOpenModal}>LOO KASUTAJA</Button>
                      <Modal open={open} onClose={this.onCloseModal} centered classNames={{ overlay: 'custom-overlay', modal: 'custom-modal'}}>
                          <h4>Uue kasutaja loomine</h4>
                          <Form>
                              <FormGroup>
                                  <Input type="text" name="firstname" id="firstname" placeholder="Eesnimi" />
                              </FormGroup>
                              <FormGroup>
                                  <Input type="text" name="surname" id="surname" placeholder="Perekonnanimi" />
                              </FormGroup>
                              <FormGroup>
                                  <Input type="text" name="email" id="email" placeholder="Email"/>
                              </FormGroup>
                              <FormGroup>
                                  <Input type="password" name="password" id="password-modal" placeholder="Parool" />
                              </FormGroup>
                          </Form>
                          <Button color="warning">LOO</Button>{' '}
                          <Button color="secondary" onClick={this.onCloseModal}>TÜHISTA</Button>{' '}
                      </Modal>
                          <div className="text-right p-t-13 p-b-23">
                              <p className="txt1">Unustasid <a href='#' className="txt2" onClick={this.onOpenModal}>kasutajanime/parooli?</a></p>
                              <Modal open={open} onClose={this.onCloseModal} centered classNames={{ overlay: 'custom-overlay', modal: 'custom-modal' }}>
                                  <h4>Parooli taastamine</h4>
                                  <Form>
                                      <FormGroup>
                                          <Input type="text" name="forgot-email" id="forgot-email" placeholder="Sisesta email" />
                                      </FormGroup>
                                  </Form>
                                  <Button color="warning">SAADA</Button>{' '}
                                  <Button color="secondary" onClick={this.onCloseModal}>TÜHISTA</Button>{' '}
                              </Modal>
                          </div>
                  </Form>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
