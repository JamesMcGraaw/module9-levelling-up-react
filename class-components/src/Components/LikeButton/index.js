import {Component} from "react";

class Index extends Component {
  render() {
    return (
      <button
        className={"btn"}
        onClick={() => alert('Thanks for liking the pic.')}
      >
        Like
      </button>
    );
  }
}

export default Index;
