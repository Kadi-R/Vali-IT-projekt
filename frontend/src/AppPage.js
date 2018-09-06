import React from 'react'
import {Component} from 'react'
import './css/AppPage.css';
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

class AppPage extends Component {

    edit() {
    };

    add() {
    };

    delete() {
    };

    render() {
        return (
            <div className = "AppPage">
                <body>
                <div className="Wrap">
                    <header>
                        <nav>
                            <button type="button" className="btn btn-secondary" onClick="prepareCustomerAdd()">LOGI
                                VÄLJA
                            </button>
                        </nav>
                    </header>

                    <div className="Greeting">
                        <h1> Hello - Triin</h1>
                    </div>
                    <div className="wrapper">
                        <div className="container3">
                            <table>
                                <tr>
                                    <th>Nimi</th>
                                    <th>Aeg</th>
                                    <th>Kirjeldus</th>
                                    <th>Tehtud</th>
                                    <th>Valikud</th>
                                </tr>
                                <tr>
                                    <td>Arsti aeg</td>
                                    <td>30. oktoober 2018</td>
                                    <td>Silmaarsti aeg. Silmaarsti nimi on: dr Kukk</td>
                                    <td><Input type="checkbox" id="checkbox2"/>{' '}</td>

                                </tr>
                                <tr>
                                    <td>Sõbraga kokkusaamine</td>
                                    <td>11. september kella 12 aeg</td>
                                    <td>Saan sõbraga kokku kohvikus hommikul</td>
                                    <td><Input type="checkbox" id="checkbox2"/>{' '}</td>
                                </tr>

                            </table>


                        </div>
                    </div>


                </div>

                </body>
            </div>
        )
            ;
    }
}

export default AppPage;