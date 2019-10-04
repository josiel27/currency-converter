import React, { Component } from "react";
import SelectSymbol from "../selectSymbol/SelectSymbol";
import "./Converter.css";

class Converter extends Component {
  constructor(props) {
    super(props);


    this.state = { valueOne: "", valueTwo: 0 };

    this.converter = this.converter.bind(this);
  }

  converter() {
    let values_for = `${this.props.valueOne}-${this.props.valueTwo}`;
    let url_coversor = `http://economia.awesomeapi.com.br/jsonp/${values_for}/1?callback=jsonp_callback`;

    fetch(url_coversor)
      .then(res => {
        return res.json();
      })
      .then(json => {
        try {
          let price_quote = json[0].ask;
          let valueTwo = (
            parseFloat(this.state.valueOne) * price_quote
          ).toFixed(2);
          this.setState({ valueTwo });
        } catch (error) {
          console.log(json.error);
          alert(json.error);
        }
      })
      .catch(error => {
        console.log(error);
        alert(error);
      });
  }

  render() {
    return (
      <div className="converter-div">
        <h2> Conversor </h2>
        <SelectSymbol defaultValue="BRL" />
        <SelectSymbol defaultValue="USD" />
        <h4>
          {this.props.valueOne} para {this.props.valueTwo}
        </h4>
        <input
          className="valueOne"
          type="number"
          placeholder="Digite um valor"
          onChange={event => {
            this.setState({ valueOne: event.target.value });
          }}
          onKeyPress={this.converter}
        ></input>
        <h2>{this.state.valueTwo}</h2>
      </div>
    );
  }
}

export default Converter;
