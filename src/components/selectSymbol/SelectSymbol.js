import React, { Component } from "react";
import myJsonSymbols from "../../teste.json";
// var myJsonSymbols2 = JSON.stringify(myJsonSymbols);

class SelectSymbol extends Component {
  constructor(props) {
    super(props);
    let arry = [];
    for (let i in myJsonSymbols) {
      arry.push(i);
    }
    console.log(arry);
    this.state = { arrySymbols: arry };
  }
  render() {
    return (
      <select>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
    );
  }
}

export default SelectSymbol;
