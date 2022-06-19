import React, { useRef } from "react";

import emailjs from "@emailjs/browser";

import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "../sass/App.scss";

const ContactMe = ({ t }) => {
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
        <div
            className="ContactMe d-flex flex-column justify-content-center align-items-center py-5 my-5"
            style={{ height: "60vh" }}
        >
            <Form className="w-75 h-100" onSubmit={sendEmail} ref={form}>
                <h1 className="text-center">
                    <a id="contactme">{t("contactMe")}</a>
                </h1>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                >
                    <Form.Label>{t("name")}</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="John Doe"
                        name="user_name"
                        required
                    />
                    <Form.Label>{t("email")}</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        name="user_email"
                        required
                    />
                    <Form.Label>{t("message")}</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="message"
                        required
                    />
                </Form.Group>
                <Button
                    as="input"
                    type="submit"
                    value={t("send")}
                    className="btn mb-5"
                    variant="danger"
                />
            </Form>
        </div>
    );
};

export default ContactMe;
