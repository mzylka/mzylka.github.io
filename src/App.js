import React, {Component} from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

import projectList from "./components/projectsData/ProjectList";

class App extends Component{
  constructor(props){
    super(props);
    this.handleImgClick = this.handleImgClick.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.state = {imgClick: false};
  }

  handleImgClick(projId){
    if(this.state.imgClick === false){
      this.setState({imgClick: true, idProj: projId});
    }
  }

  handleCloseModal(){
    if(this.state.imgClick === true){
      this.setState({imgClick: false});
    }
  }

  render(){
    const isImgClicked = () => {
      if(this.state.imgClick === true){
        return <Modal galery={projectList[this.state.idProj].galery} onCloseModal={this.handleCloseModal}/>
      }
    }
    return(
      <div className="App">
        <Hero />
        <About />
        <Projects projectList={projectList} onImgClick={this.handleImgClick}/>
        <Footer />
        {isImgClicked()}
      </div>      
    );
  }
}

export default App;