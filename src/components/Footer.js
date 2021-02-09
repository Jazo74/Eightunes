import React from 'react';
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = (props) => (
    <div className="footer">
            <p className="footer__year">{props.year}</p>
            <p className="footer__name">{props.name}</p>
            <button className="theme-button"><FontAwesomeIcon icon={faCaretLeft} /></button>
            <button className="theme-button"><FontAwesomeIcon icon={faCaretRight} /></button>
    </div>
);

Footer.defaultProps = {
    name: "anonym",
    year: "2021"
}

export default Footer;