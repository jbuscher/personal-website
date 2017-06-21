import React, { Component } from 'react';
import ImageSlideshow from './ImageSlideshow';
class ProjectModal extends Component {
  render() {
    const projectName = this.props.project.name;
    return (
       <div className="modal fade project-modal" id={this.props.project.id} tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-content">
          <button type="button" className="btn btn-default close-modal" data-dismiss="modal">X</button>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <div className="modal-body">
                  <h2>{projectName}</h2>
                  <hr />
                  <ul className="list-inline item-details">
                    <li>Project Page:
                      <strong><a href={this.props.project.codeLink}>Code</a></strong>
                    </li>
                    <li>Date:
                      <strong>{this.props.project.date}</strong>
                    </li>
                    <li>Project Role:
                      <strong>{this.props.project.projectRole}</strong>
                    </li>
                  </ul>
                  <hr />
                  <ImageSlideshow images={this.props.project.images} />
                  <p>{this.props.project.projectSummary}</p>
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectModal;
