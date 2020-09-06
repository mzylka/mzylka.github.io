import React, {Component} from "react";
import Project from "./Project";


class Projects extends Component{
  render(){
    const list = this.props.projectList.map((proj) => {
      if(proj.id % 2 === 0){
        return <Project onImgClick={this.props.onImgClick} key={proj.id} objProj={proj} direction="left" />
      }
      else{
        return <Project onImgClick={this.props.onImgClick} key={proj.id} objProj={proj} direction="right" />
      }
      
    });

    return(
      <section className="projects container">
        <div className="projects__title-box">
          <h2 className="projects__title">Projekty</h2>
        </div>
        {list}
      </section>
    )
  }
}

export default Projects;