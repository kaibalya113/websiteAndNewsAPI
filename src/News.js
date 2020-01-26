import React, { Component } from "react";
import "./news.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:  [],
      names: [],
      refresh: [],
      articles: []
    };
  }
// Lifecycle method
componentWillMount() {
  this.getArticles(this.props.default);
}

componentWillReceiveProps(nextProps) {
  if (nextProps !== this.props) {
    this.setState({ url: `use yours` });

    this.getArticles(nextProps.default);
  }
}

formatDate(date) {
  var time = new Date(date);
  var year = time.getFullYear();
  var day = time.getDate();
  var hour = time.getHours();
  var minute = time.getMinutes();
  var month = time.getMonth() + 1;
  var composedTime = day + '/' + month + '/' + year + ' | ' + hour + ':' + (minute < 10 ? '0' + minute : minute);
  return composedTime;
}
  display = (id) => {
    let text = "";
    
    this.setState({ names: "Refreshing... your name" });
    for (let i = 1; i < 10; i++) {
      setTimeout(() => {
        this.setState({ names: "krishna" });
        text += `${this.state.names}<br>`;
        this.setState({id: i})
        document.getElementById("list").innerHTML = text;
      }, 3000);

    }
    console.log(`${this.state.names} is having id: ${this.state.id}`)
  };
  displayWithId = () => {
    this.display(this.state.id);
  } 

  getArticles(url) {
    // Make HTTP reques with Axios
    axios
      .get(`use yours`)
      .then(res => {
        const articles = res.data.articles;
        // Set state with result
        console.log(articles);
        this.setState({ articles: articles });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="news">
        <h1>
          News: <span className="badge badge-secondary">by BBC</span>
        </h1>
        <div className="cardsContainer">
        {this.state.articles.map((news, i) => {
          return (
            <div className="card" key={i}>
              <div className="content">
                <h3>
                  <a href={news.url} target="_blank" rel="noopener noreferrer">
                    {news.title}
                  </a>
                </h3>
                <p>{news.description}</p>
                <div className="author">
                  <p>
                    By <i>{news.author ? news.author : this.props.default}</i>
                  </p>
                  <p>{this.formatDate(news.publishedAt)}</p>
                </div>
              </div>
              <div className="image">
                <img src={news.urlToImage} alt="" />
              </div>
            </div>
          );
        })}
      </div>
      </div>
    );
  }
}
