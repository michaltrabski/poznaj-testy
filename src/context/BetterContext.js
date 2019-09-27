import React, { Component, createContext } from "react";

const BetterContext = createContext();

class BetterContextProvider extends Component {
  state = {
    x: 1
  };
  render() {
    return (
      <BetterContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </BetterContext.Provider>
    );
  }
}

export default BetterContextProvider;
