import React, { Component } from "react";
import "./news.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class News extends Component {
  
    
    constructor(){
        super();
        this.state={
            
        }

        // grab the news container
        let newFiles = document.getElementById("news");
        
        // create a get request
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=e1fb37087786407b952b40b5796d00d9', true)
        
        xhr.onload = () =>{
            if(this.status == 200){
                let json = JSON.parse(this.responceText);
                console.log(json);
            }else{

            }
        }
        xhr.send();
        let n =`<div className="card">
        <div className="card-header" id="headingOne">
          <h5 className="mb-0">
            <button className="btn btn-link"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Collapsible Group Item #1
            </button>
          </h5>
        </div>

        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
          <div className="card-body">
            
          </div>
        </div>
      </div>`;
    }
  
    render() {
    return (
      <div className="news">
        <h1>
          News: <span className="badge badge-secondary">by BBC</span>
        </h1>
        <br></br>
        <div id="news">
          
          
         
        </div>
      </div>
    );
  }
}
