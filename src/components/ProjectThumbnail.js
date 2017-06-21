import React, { Component } from 'react';

class ProjectThumbnail extends Component {
  render() {
    const projectName = this.props.project.name;
    return (
      <div className="col-sm-4">
        <a href={"#" + this.props.project.id} data-toggle="modal">
          <img className="img-thumbnail" src={"images/" + this.props.project.images[0]} alt={projectName} />
        </a>
        <p>{projectName}</p>
      </div>
    );
  }
}

export default ProjectThumbnail;
