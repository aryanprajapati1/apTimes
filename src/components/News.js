import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Loading from "./Loading";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      status: "ok",
      totalResults: 36,
      page : 1,
      articles: []
    };
  }
  
  async componentDidMount() {
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b715461f466243e08493b4f063c01ef9&pageSize=4`);
    this.setState({Loading:true})
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles , totalResults:parsedData.totalResults, Loading:false });
  }

  handelNext = async ()=>{
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults / 4))){
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b715461f466243e08493b4f063c01ef9&page=${this.state.page + 1}&pageSize=4`);
        this.setState({Loading:true});
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles });
        this.setState({
            page: this.state.page + 1,
            Loading:false
    })
    console.log("Page number is : ", this.state.page);
}
  }
  handelPrev = async()=>{
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b715461f466243e08493b4f063c01ef9&page=${this.state.page - 1}&pageSize=4`);
    this.setState({Loading:true})
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
    this.setState({
        page: this.state.page - 1,
        Loading: false
    })
  }

  render() {
    return (
      <div className="container my-3">
        <h2>Top Hedlines</h2>
        {this.state.Loading  && <Loading/>}
        <div className="row">
          {this.state.articles.map((elements) => {
            return (
              <div className="col-md-3 my-3" key={elements.url}>
                <NewsItems
                  title={elements.title ? elements.title : ""}
                  description={elements.description ? elements.description : ""}
                  imageUrl={elements.urlToImage}
                  newsUrl={elements.url}
                />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handelPrev}>&larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 4)} type="button" className="btn btn-dark" onClick={this.handelNext}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}
