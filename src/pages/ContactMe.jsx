import React, { useRef } from "react";

import emailjs from "@emailjs/browser";

import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "../sass/App.scss";

import { useTranslation } from "react-i18next";

const ContactMe = () => {
    const { t } = useTranslation();
    const form = useRef();
    let feedback = "";

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        );
        // .then(
        //     (result) => {
        //         feedback = "Your message was sent";
        //     },
        //     (error) => {
        //         feedback = "An error has occured";
        //         // console.log(error.text);
        //     }
        // );

        form.current.reset();
    };

    return (
        <div className="ContactMe d-flex flex-column justify-content-center align-items-center my-md-5 py-md-5  mb-5 pb-5 mt-0 pt-0">
            <Form className="w-50 h-100" onSubmit={sendEmail} ref={form}>
                <h1 className="text-center">
                        {t("contactMe")}
                </h1>
                <Form.Group
                    className="mb-3"
                    // controlId="exampleForm.ControlInput1"
                >
                    <Form.Label htmlFor="user_name">{t("name")}</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="John Doe"
                        name="user_name"
                        required
                    />
                    <Form.Label htmlFor="email">{t("email")}</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        name="user_email"
                        required
                    />
                    <Form.Label htmlFor="message">{t("message")}</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="message"
                        required
                    />
                </Form.Group>
                <Button
                    aria-label="Send Message"
                    as="input"
                    type="submit"
                    value={t("send")}
                    className="btn"
                    variant="danger"
                />
            </Form>
        </div>
    );
};

export default ContactMe;
