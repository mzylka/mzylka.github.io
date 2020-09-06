import React, {Component} from "react";
import Link from "./Link";

class Footer extends Component{
  render(){
    const linked = <svg className="link__icon"><use xlinkHref="images/SVG/symbol-defs.svg#icon-linkedin" /></svg>;
    const github = <svg className="link__icon"><use xlinkHref="images/SVG/symbol-defs.svg#icon-github" /></svg>;
    return(
      <section className="footer">
        <div className="footer__links">
          <Link iconClass="icon-github" svgElem={linked} href="https://linkedin.com/in/michal-zylka"/>
          <Link iconClass="icon-linkedin" svgElem={github} href="https://github.com/mzylka/"/>
        </div>
        <div className="footer__made">
          Witryna stworzona przy pomocy technologi React. Copyright 2020 © Michał Żyłka. Wszelkie prawa zastrzeżone.
        </div>
      </section>
    );
  }
}
  
export default Footer;