import React from "react";
import "./Style/ContactMe.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ContactMe = () => {
    return (
        <div className="ContactMe d-flex flex-column justify-content-center align-items-center">
            <Form className="w-75">
                <h1 className="text-center">
                    <a id="contactme">Contact Me</a>
                </h1>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                >
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button
                    style={{
                        backgroundColor: "#f3b700",
                        border: "none",
                    }}
                    type="submit"
                >
                    Send Email
                </Button>
            </Form>
        </div>
    );
};

export default ContactMe;
