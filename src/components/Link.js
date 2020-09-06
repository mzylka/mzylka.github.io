import React, {Component} from "react";

class Link extends Component{
  render(){
    return(
      <a className="link" href={this.props.href} target="_blank">
        {this.props.svgElem}
      </a>
    );
  }
}

export default Link;