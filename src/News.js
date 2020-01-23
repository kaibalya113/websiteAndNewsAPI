import React, { Component } from "react";
import "./news.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:  101,
      names: [],
      refresh: []
    };
  }

  display = (id) => {
    let text = "";
    this.setState({ names: "Refreshing... your name" });
    for (let i = 1; i < 10; i++) {
      setTimeout(() => {
        this.setState({ names: "krishna" });

        text += `${this.state.names}<br>`;

        document.getElementById("list").innerHTML = text;
      }, 3000);

    }
    console.log(`${this.state.names} is having id: ${this.state.id}`)
  };
  displayWithId = () => {
    this.display(this.state.id);
  } 
  render() {
    return (
      <div className="news">
        <h1>
          News: <span className="badge badge-secondary">by BBC</span>
        </h1>
        <button id="btn" onClick={this.displayWithId}>
          Refresh
        </button>

        <h1>{this.state.names}</h1>
        <p id="list"></p>
      </div>
    );
  }
}
