import React, {Component} from "react";

class ProjectButton extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <a className="project__link" href={this.props.link}>
                <svg className="project__git-ico"><use xlinkHref="images/SVG/symbol-defs.svg#icon-github" /></svg>
                  <span className="project__git">{this.props.name}</span>
            </a>
        );
    };
}

export default ProjectButton;