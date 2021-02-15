import React from 'react';

const Footer = (props) => (
    <div className="footer cc3 bc12">
            <p className="footer__text">{props.year}</p>
            <p className="footer__text">{props.name}</p>
    </div>
);

Footer.defaultProps = {
    name: "anonym",
    year: "2021"
}

export default Footer;