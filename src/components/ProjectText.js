import React, {Component} from "react";

class ProjectText extends Component{
render(){
  const isImg = this.props.style ? "": "project__text--without-img";
  return(
    <div className={"project__text " + isImg}>
      {this.props.children}
    </div>
  );
}
}

export default ProjectText;
