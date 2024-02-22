import React, { Component } from "react";

export default class NewsItems extends Component {
  render() {
    let {title, description,imageUrl,newsUrl} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img className="card-img-top" src={!imageUrl?"https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-887657568.jpeg?c=16x9&q=w_800,c_fill":imageUrl} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
             {description}
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
