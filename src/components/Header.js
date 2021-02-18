import React from 'react';
import { faHeadphones, faHeadphonesAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = (props) => (
    <div className="header cc17">
            <h1 className="header__title cc1_5"onClick={props.themeChanger}>{props.title}</h1>
            <h1 className="logo cc26"><FontAwesomeIcon icon={faHeadphonesAlt} /></h1>
    </div>
);

Header.defaultProps = {
    title: "Default title",
    subTitle: "Default sub title"
}

export default Header;