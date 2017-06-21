import React, { Component } from 'react';

class ImageSlideshow extends Component {
  render() {
    return (
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          {this.props.images.map((image, index) => {
            if (index === 0) {
              return <li data-target="#myCarousel" data-slide-to="0" className="active" key={index}></li>;
            } else {
              return <li data-target="#myCarousel" data-slide-to={index} key={index}></li>;
            }
          })}
        </ol>

        <div className="carousel-inner">
        {this.props.images.map((image, index) => {
          if (index === 0) {
            return (
              <div className="item active" key={index}>
                <img src={"images/" + image} alt="project slideshow" />
              </div>
            );
          } else {
            return (
              <div className="item" key={index}>
               <img src={"images/" + image} alt="project slideshow" />
             </div>
            );
          }
        })}
        </div>
        {showArrow(true, this.props.images)}
        {showArrow(false, this.props.images)}
      </div>
    );
  }
}


function showArrow(left, images) {
  if(images.length > 1) {
    if (left) {
    return (
        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
      );
    } else {
      return (
       <a className="right carousel-control" href="#myCarousel" data-slide="next">
         <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
       </a>
      );
    }
  }
}

export default ImageSlideshow;
