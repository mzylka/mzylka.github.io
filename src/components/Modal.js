import React, {Component} from "react";
import Image from "./Image";

class Modal extends Component{
    constructor(props){
        super(props);
        this.handleOnClickModal = this.handleOnClickModal.bind(this);
        this.handleOnClickClose = this.handleOnClickClose.bind(this);
        this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
        this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
        this.handleOnClickPrev = this.handleOnClickPrev.bind(this);
        this.handleOnClickNext = this.handleOnClickNext.bind(this);
        this.ref = React.createRef();
        this.state = {
            hover: false,
            currentIndex: 0,
        };
    }

    handleOnClickModal(event){
        if(event.target === this.ref.current){
            this.props.onCloseModal();
        }
    }

    handleOnClickClose(event){
        event.stopPropagation();
        this.props.onCloseModal();
    }

    handleOnMouseEnter(){
        this.setState({hover: true});
    }

    handleOnMouseLeave(){
        this.setState({hover: false});
    }

    handleOnClickPrev(){
        const cIndx = this.state.currentIndex;

        if(cIndx > 0 && cIndx < this.props.galery.length){
            this.setState({currentIndex: cIndx - 1})
        }
        if(cIndx === 0){
            this.setState({currentIndex: this.props.galery.length - 1});
        }
    }

    handleOnClickNext(){
        const cIndx = this.state.currentIndex;

        if(cIndx >= 0){
            this.setState({currentIndex: cIndx + 1})
        }
        if(cIndx === this.props.galery.length - 1){
            this.setState({currentIndex: 0});
        }
    }

    render(){
        const getNavigation = () => {
            if(this.state.hover === true){
                return [<a className="modal__img-prev" onClick={this.handleOnClickPrev}>&#10094;</a>, <a className="modal__img-next" onClick={this.handleOnClickNext}>&#10095;</a>];  
            }
        }
        return(
            <div className="modal" ref={this.ref} onClick={this.handleOnClickModal}>
                <div className="modal__container" onMouseEnter={this.handleOnMouseEnter} onMouseLeave={this.handleOnMouseLeave}>
                    <div className="modal__close" onClick={this.handleOnClickClose}>
                        <svg className="modal__close-ico"><use xlinkHref="images/SVG/symbol-defs.svg#icon-cross"/></svg>
                    </div>
                    <div className="modal__img-container">
                        <Image key={this.state.currentIndex} sourceImg={this.props.galery[this.state.currentIndex]}></Image>
                    </div>
                    {getNavigation()}
                </div>
            </div>
        )
    }
}

export default Modal;