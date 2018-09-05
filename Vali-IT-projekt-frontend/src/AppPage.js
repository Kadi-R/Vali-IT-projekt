import React, { Component } from 'react';
import './css/AppPage.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class AppPage extends Component {

    edit() {};
    add() {};
    delete() {};

    render() {
        return (<div>
                <header>
                    <nav>
                        <button type="button">Sign out!</button>
                    </nav>
                </header>
                <div className="AppPage">
                    <h1> Hello - Kadi</h1>
                </div>
                <div className="container3">
                    <table>
                        <tr>
                            <th>Event Name</th>
                            <th>Time</th>
                            <th>Description</th>
                            <th>Done</th>
                            <th>Options</th>
                        </tr>
                        <tr>
                            <td>Arsti aeg</td>
                            <td>30. oktoober 2018</td>
                            <td>Silmaarsti aeg. Silmaarsti nimi on: dr Kukk</td>
                            <td><Input type="checkbox" id="checkbox2" />{' '}</td>
                            <td><Button>Muuda</Button><Button>Kustuta</Button></td>
                        </tr>
                        <tr>
                            <td>Sõbraga kokkusaamine</td>
                            <td>11. september kella 12 aeg</td>
                            <td>Saan sõbraga kokku kohvikus hommikul</td>
                            <td><Input type="checkbox" id="checkbox2" />{' '}</td>
                            <td><Button>Muuda</Button><Button>Kustuta</Button></td>
                        </tr>
                    </table>
                </div>
            </div>
    );
    }
}
export default AppPage;