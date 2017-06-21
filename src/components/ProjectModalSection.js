import React, { Component } from 'react';
import ProjectModal from './ProjectModal'

class ProjectModalSection extends Component {
  render() {
    return (
      <div>
        <ProjectModal project={this.props.projects[0]}/>
        <ProjectModal project={this.props.projects[1]}/>
        <ProjectModal project={this.props.projects[2]}/>
        <ProjectModal project={this.props.projects[3]}/>
        <ProjectModal project={this.props.projects[4]}/>
        <ProjectModal project={this.props.projects[5]}/>
      </div>
    );
  }
}

export default ProjectModalSection;
