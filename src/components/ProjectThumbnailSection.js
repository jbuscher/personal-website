import React, { Component } from 'react';
import ProjectThumbnail from './ProjectThumbnail'

/*
 TODO: Componentize projects
*/
class ProjectThumbnailSection extends Component {
  render() {
    const projects = this.props.projects;
    return (
      <div id="projects" className="container-fluid text-center">
        <h1>Projects</h1>
          <div className="row">
            <ProjectThumbnail project={projects[0]} />
            <ProjectThumbnail project={projects[1]} />
            <ProjectThumbnail project={projects[2]} />
        </div>

        <div className="row">
          <ProjectThumbnail project={projects[3]} />
          <ProjectThumbnail project={projects[4]} />
          <ProjectThumbnail project={projects[5]} />
        </div>
      </div>
    );
  }
}

export default ProjectThumbnailSection;
