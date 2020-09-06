import React, {Component} from "react";

class Image extends Component {
    render(){
        return <img src={this.props.sourceImg} className="modal__img"></img>
    }
}

export default Image;