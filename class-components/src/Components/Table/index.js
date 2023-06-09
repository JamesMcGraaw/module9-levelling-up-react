import {Component} from "react";
import './Table.css';

class Index extends Component {
  render() {
    return (
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Charlie</td>
          <td>Trainer</td>
        </tr>
        <tr>
          <td>Mac</td>
          <td>Bouncer</td>
        </tr>
        <tr>
          <td>Dee</td>
          <td>Aspiring actress</td>
        </tr>
        <tr>
          <td>Dennis</td>
          <td>Bartender</td>
        </tr>
        </tbody>
      </table>
    );
  }
}

export default Index;
