import React, { Component } from 'react';

class ContactSection extends Component {
  render() {
    return (
      <div id="contact" className="container-fluid text-center">
        <h1>Contact Me</h1>
        <div className="col-sm-6 col-sm-push-6">
          <h2>Send me a message</h2>
          <p>You can send a message to me using the form</p>
          <h2>Other shit</h2>
          <p><a href="resume.pdf">Resume</a></p>
          <p><a href="http://www.linkedin.com">Linkedin</a></p>
        </div>

        <fieldset className="col-sm-6 col-sm-pull-6" role="form">
          <p>Your Name</p>
          <input className="form-control" value="name" size="50"></input>
          <p>Your email</p>
          <input className="form-control" value="email" size="50"></input>
          <p>Your message</p>
          <textarea className="form-control" cols="30" rows="10"></textarea>
          <br/>
          <button className="btn btn-default">Send</button>
        </fieldset>
      </div>
    );
  }
}

export default ContactSection;
