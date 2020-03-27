import React from "react";
import Card from "./Card";
//----=====---------------------------------------------------
class Cards extends React.Component {
  state = { msg: null };

  flashFn = m => {
    this.setState({ msg: m });
    setTimeout(() => {
      this.setState({ msg: null });
    }, 2000);
  };
  render() {
    return (
      <div>
        <h5>{this.state.msg || "_"}</h5>
        <div className="row">
          {Array(8)
            .fill(42)
            .map((x, i) => (
              <Card key={i} flashFn={this.flashFn} />
            ))}
        </div>
      </div>
    );
  }
}

export default Cards;
