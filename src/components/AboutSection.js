import React, { Component } from 'react';

class TEMPLATE extends Component {
  render() {
    return (
      <div id="about" className="container-fluid text-left">
        <div className="col-sm-3">
          <img className="img-responsive img-rounded" src="images/me.jpg" alt="navbar home" />
        </div>
        <div className="col-sm-8">
          <h2>About Me</h2>
          <p>
            Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
       </div>

        <div className="col-sm-8 cleared">
         <h2>Experience</h2>
          <p>
            Caterpie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    );
  }
}

export default TEMPLATE;
