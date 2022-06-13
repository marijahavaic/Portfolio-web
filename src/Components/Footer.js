import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

const Footer = ({ t }) => {
    return (
        <div className="Footer">
            <Container className="p-3 d-flex text-align-center w-100 justify-content-center align-items-center pb-5">
                <h6>{t("madeBy")}</h6>
            </Container>
        </div>
    );
};

export default Footer;
