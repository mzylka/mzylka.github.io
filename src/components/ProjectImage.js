import React, {Component} from "react";

class ProjectImage extends Component{
  constructor(props){
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.id = this.props.idProj;
  }

  handleOnClick(e){
    this.props.onImgClick(this.id);
  }
  render(){
    return(
      <div className="project__image-box" onClick={this.handleOnClick}>
        <img src={this.props.imgSrc} className="project__image" alt={this.props.projName}></img>
      </div>
    );
  }
}

export default ProjectImage;