import React, {Component} from "react";
import ProjectImage from "./ProjectImage";
import ProjectText from "./ProjectText";
import ProjectButton from "./ProjectButton";

class Project extends Component{
  constructor(props){
    super(props);
    this.ref = React.createRef();
  }

  changeClass(){
    this.ref.current.classList.add("project--is-visible")
  }
  
  componentDidMount(){
    const observer = new IntersectionObserver(([entry]) =>{
        if(entry.intersectionRatio === 1){
          this.changeClass();
        }
      },
      {
        root: null,
        rootMargin: '40px 500px 20px 500px',
        threshold: 1.0
      }
    );

    if(this.ref.current){
      observer.observe(this.ref.current);
    }
  }

    render(){
      const links = this.props.objProj.links.map((link => {
        return <ProjectButton name={link.name} link={link.link}/>
      }));

      const imgs = this.props.objProj.imgSrc ? <ProjectImage idProj={this.props.objProj.id} imgSrc={this.props.objProj.imgSrc} projName={this.props.objProj.title} onImgClick={this.props.onImgClick}/> : "";
      const isImgs = this.props.objProj.imgSrc ? true : false;

      return(
        <div ref={this.ref} className={"project " + "project--" + this.props.direction}>
            {imgs}
            <ProjectText style={isImgs}>
              <h3 className="project__title">{this.props.objProj.title}</h3>
              <p className="project__description">
                {this.props.objProj.description}
              </p>
              <div className="project__links">{links}</div>         
            </ProjectText>
        </div>
      );
    }
}
  
export default Project;