import React from 'react'
import {Component} from 'react'
import './css/AppPage.css';
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import Modal from 'react-responsive-modal';
import {userActions} from "./actions/user.actions";

const API = 'https://localhost:3000/login';
const DEFAULT_QUERY = 'redux';


class AppPage extends Component {
    constructor(props) {
        super(props);

        this.onOpenModal1 = this.onOpenModal1.bind(this);
        this.onOpenModal2 = this.onOpenModal2.bind(this);
        this.onOpenModal3 = this.onOpenModal3.bind(this);
        this.onOpenModal4 = this.onOpenModal4.bind(this);

        this.onCloseModal1 = this.onCloseModal1.bind(this);
        this.onCloseModal2 = this.onCloseModal2.bind(this);
        this.onCloseModal3 = this.onCloseModal3.bind(this);
        this.onCloseModal4 = this.onCloseModal4.bind(this);

        this.state = {
            openFirstModal: false,
            openSecondModal: false,
            openThirdModal: false,
            openFourthModal: false,
            data: null,
            event_name: '',
            time: '',
            description: '',
            submitted: false
        };
    }

    componentDidMount() {
        fetch(API + DEFAULT_QUERY)
            .then(response => response.json())
            .then(data => this.setState({hits: data.hits}));
    }

    onOpenModal1 = () => {
        this.setState({openFirstModal: true});
    };
    onOpenModal2 = () => {
        this.setState({openSecondModal: true});
    };
    onOpenModal3 = () => {
        this.setState({openThirdModal: true});
    };
    onOpenModal4 = () => {
        this.setState({openFourthModal: true});
    };

    onCloseModal1 = () => {
        this.setState({openFirstModal: false});
    };
    onCloseModal2 = () => {
        this.setState({openSecondModal: false});
    };
    onCloseModal3 = () => {
        this.setState({openThirdModal: false});
    };

    onCloseModal4 = () => {
        this.setState({openFourthModal: false});
    };


    render() {
        const {openFirstModal, openSecondModal, openThirdModal, openFourthModal} = this.state;
        const {event_name, time, description, submitted} = this.state;
        return (
            <div className="AppPage">
                <body>
                <div className="Wrap">
                    <header>
                        <nav>
                            <Button type="button" id="logout" className="btn btn-secondary" onClick={this.onOpenModal1}>LOGI
                                VÄLJA</Button>
                            <Modal id="log-out-modal" open={openFirstModal} onClose={this.onCloseModal1} centered
                                   classNames={{overlay: 'custom-overlay', modal: 'custom-modal1'}}>
                                <h4>Välja logimine</h4>
                                <p>
                                    OLED SA KINDEL?
                                </p>
                                <Button color="warning">LOGI VÄLJA</Button>{' '}
                                <Button color="secondary" onClick={this.onCloseModal1}>TÜHISTA</Button>{' '}
                            </Modal>
                        </nav>
                    </header>

                    <div className="Greeting">
                        <h1> Hello - Triin</h1>
                    </div>
                    <div className="wrapper">
                        <div className="container3">
                            <table>
                                <thead>
                                <tr>
                                    <th>Nimi</th>
                                    <th>Aeg</th>
                                    <th>Kirjeldus</th>
                                    <th>Tehtud</th>
                                    <th>Valikud</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Arsti aeg</td>
                                    <td>30. oktoober 2018</td>
                                    <td>Silmaarsti aeg. Silmaarsti nimi on: dr Kukk</td>
                                    <td><Input type="checkbox" id="checkbox2"/>{' '}</td>
                                    <div className="buttons">
                                        <Button type="button" id="change" className="btn btn-secondary" onClick={this.onOpenModal2}>MUUDA</Button>
                                        <Modal open={openSecondModal} onClose={this.onCloseModal2} centered
                                               classNames={{overlay: 'custom-overlay', modal: 'custom-modal2'}}>

                                            <h4>Kirje muutmine</h4>
                                            <Form>
                                                <FormGroup>
                                                    <Input type="text" name="event_name" id="event_name"
                                                           placeholder="Ürituse nimi"/>
                                                </FormGroup>
                                                <FormGroup>
                                                    <Input type="text" name="date" id="date"
                                                           placeholder="Aeg"/> {/*sql-is oli date*/}
                                                </FormGroup>
                                                <FormGroup>
                                                    <textarea type="text" class="form-control" rows="5" name="description" placeholder="Kirjeldus"/>
                                                </FormGroup>
                                            </Form>
                                            <Button color="warning">SALVESTA</Button>{' '}
                                            <Button color="secondary" onClick={this.onCloseModal2}>TÜHISTA</Button>{' '}
                                        </Modal>
                                        <Button type="button" id = "delete" className="secondary" onClick={this.onOpenModal3}>KUSTUTA</Button>
                                        <Modal open={openThirdModal} onClose={this.onCloseModal3} centered
                                               classNames={{overlay: 'custom-overlay', modal: 'custom-modal3'}}>
                                            <h4>Kirje kustutamine</h4>
                                            <p>
                                                OLED SA KINDEL?
                                            </p>
                                            <Button color="warning">KUSTUTA</Button>{' '}
                                            <Button color="secondary" onClick={this.onCloseModal3}>TÜHISTA</Button>{' '}
                                        </Modal>

                                    </div>

                                </tr>

                                <tr>
                                    <td>Sõbraga kokkusaamine</td>
                                    <td>11. september kella 12 aeg</td>
                                    <td>Saan sõbraga kokku kohvikus hommikul</td>
                                    <td><Input type="checkbox" id="checkbox2"/>{' '}</td>
                                    <div className="buttons">
                                        <button type="button" id="change" className="btn btn-secondary"
                                                onClick="prepareCustomerAdd()">MUUDA
                                        </button>
                                        <button type="button" id="delete" className="btn btn-secondary"
                                                onClick="prepareCustomerAdd()">KUSTUTA
                                        </button>
                                    </div>
                                </tr>
                                <tr>
                                    <Button type="button" id="add" className="btn btn-secondary" onClick={this.onOpenModal4}>LISA</Button>
                                    <Modal open={openFourthModal} onClose={this.onCloseModal4} centered
                                           classNames={{overlay: 'custom-overlay', modal: 'custom-modal4'}}>

                                        <h4>Kirje lisamine</h4>
                                        <Form>
                                            <FormGroup>
                                                <Input type="text" name="event_name" id="event_name"
                                                       placeholder="Ürituse nimi"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Input type="text" name="date" id="date"
                                                       placeholder="Aeg"/> {/*sql-is oli date*/}
                                            </FormGroup>
                                            <FormGroup>
                                                <textarea type="text" class="form-control" rows="5" name="description" placeholder="Kirjeldus"/>
                                            </FormGroup>
                                        </Form>
                                        <Button color="warning">SALVESTA</Button>{' '}
                                        <Button color="secondary" onClick={this.onCloseModal4}>TÜHISTA</Button>{' '}
                                    </Modal>

                                </tr>
                                </tbody>

                            </table>


                        </div>
                    </div>


                </div>

                </body>

            </div>
        );
    }
}

export default AppPage;