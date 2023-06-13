import {Component} from "react";

class Car extends Component {
  constructor(props) {
    super(props); // Super === parent. This is calling parent constructor (Component) first

    // Default state
    this.state = {colour: 'red', make: 'Fiesta'};

    // In JavaScript, class methods are not bound by default. If you forget
    // to bind this.handleClick and pass it to onClick, this will be
    // undefined when the function is actually called.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      let newColour = prevState.colour === 'red' ? 'blue' : 'red';
      return {colour: newColour};
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.make}</h2>
        <p>The colour is {this.state.colour}.</p>
        <button
          className={"btn"}
          onClick={this.handleClick}
        >
          Toggle Colour
        </button>
      </div>
    );
  }
}

export default Car;
