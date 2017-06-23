import React, { Component } from 'react';

import NavBar from './components/NavBar';
import HeaderSection from './components/HeaderSection';
import AboutSection from './components/AboutSection';
import ProjectThumbnailSection from './components/ProjectThumbnailSection';
import ContactSection from './components/ContactSection';
import ProjectModalSection from './components/ProjectModalSection';

import ProjectData from './data/projects.json';

/*
* This App should have some global information AboutSection what sections should exist on the homepage
* and pass that information to the nav bar so it knows which links to create.
*
*/
class App extends Component {
  render() {
    return (
        <div id="frame" data-spy="spyscroll" data-target=".navbar">
          <HeaderSection />
          <NavBar />
          <AboutSection />
          <ProjectThumbnailSection projects={ProjectData.projects}/>
          <ContactSection />
          <ProjectModalSection projects={ProjectData.projects}/>
        </div>
    );
  }
}

export default App;
