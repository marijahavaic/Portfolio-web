import React, { useRef } from "react";
import "./Style/ContactMe.css";

import emailjs from "@emailjs/browser";

import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";

const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );

        form.current.reset();
    };

    return (
        <div className="ContactMe d-flex flex-column justify-content-center align-items-center">
            <Form className="w-75" onSubmit={sendEmail} ref={form}>
                <h1 className="text-center">
                    <a id="contactme">Contact Me</a>
                </h1>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                >
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="John Doe"
                        name="user_name"
                    />
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        name="user_email"
                    />
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                >
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} name="message" />
                </Form.Group>
                <input
                    type="submit"
                    value="Send"
                    style={{
                        backgroundColor: "#f3b700",
                        border: "none",
                        color: "aliceblue",
                        padding: "0.75rem",
                        borderRadius: "10%",
                    }}
                    className="icon"
                />
            </Form>
        </div>
    );
};

export default ContactMe;
