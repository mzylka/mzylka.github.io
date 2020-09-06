import React, {Component} from "react";

class About extends Component{
  constructor(props){
    super(props);
    this.ref = React.createRef();
  }

  changeClass(){
    this.ref.current.classList.add("about--is-visible")
  }

  componentDidMount(){
    const observer = new IntersectionObserver(([entry]) =>{
      if(entry.intersectionRatio > 0.5){
        this.changeClass();
      }
    },
    {
      root: null,
      rootMargin: '0px 0px -150px 0px',
      threshold: 0.5
    });

    if(this.ref.current){
      observer.observe(this.ref.current);
    }
  }

  render(){
    return(
      <section ref={this.ref} className="about container">
        <h2 className="about__title">Parę słów o mnie</h2>
        <p className="about__description">
        Swoją przygodę z tworzeniem stron internetowych rozpocząłem w 2014 roku, kiedy to będąc jeszcze w gimazjum pisałem proste wityny z pomocą HTML i CSS. 
        Równocześnie korzystając z CMS Wordpress zrobiłem i opublikowałem bloga na temat pewnej gry komputerowej. 
        W czasach technikum nauczyłem się m.in podstaw języka PHP, SQL, ale to JavaScript najbardziej przypadł mi do gustu. 
        Nabyte umiejętności pozwoliły mi stworzyć parę małych projektów. Aktualnie szlifuję swoją wiedzę w obrębie JS'a, ucząc się nowych rzeczy, jak np. React, TypeScript.
        W przyszłości chciałbym poszerzyć swoją wiedzę o języku C# i platformie .NET.
        Więcej na mój temat można dowiedzieć się z profilu <a href="https://www.linkedin.com/in/michal-zylka/" target="_blank">Linkedin</a>.
        </p>
      </section>
    );
  }
}
  
export default About;