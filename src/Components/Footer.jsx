import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

const Footer = ({ t }) => {
    return (
        <div className="Footer">
            <Container className="p-3 d-flex text-align-center w-100 justify-content-center align-items-center">
                <p>{t("madeBy")}</p>
            </Container>
        </div>
    );
};

export default Footer;
