"use client"

import React, {useState} from "react";
import Layout from "@/app/components/layout";
import styling from "@/app/ContactForm.module.css";
import {theme} from "@/app/constants/theme";
import VerticalSpacingSmall from "@/app/components/verticalSpacingSmall";
import VerticalSpacingLarge from "@/app/components/verticalSpacingLarge";

interface StatusState {
    type: "success" | "failure" | "invalidFieldError";
    message: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [statusState, setStatusState] = useState<StatusState | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    };
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsSubmitting(true)
        setStatusState(null)
        try {
            const response = await fetch(
                "/api/submit-contact-form",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData)
                }
            )
            await response.json()
            if (response.ok) {
                setStatusState({type: "success", message: "Thank you! We will reach out to you shortly."});
            } else {
                if (response.status === 400) {
                    setStatusState({
                        type: "invalidFieldError",
                        message: "One of the mandatory fields is invalid. Please try again."
                    })
                } else if (response.status === 429) {
                    setStatusState({type: "failure", message: "Too many requests. Please try again later"})
                } else {
                    setStatusState({
                        type: "failure",
                        message: "There was an error sending your message. Please try again."
                    });
                }
            }
        } catch (error) {
            console.error(error)
            setStatusState({type: "failure", message: "An unexpected error occurred. Please try again."});
        } finally {
            setIsSubmitting(false);
        }
    }
    return (
        <Layout>
            {
                statusState &&
                <>
                    <VerticalSpacingLarge/>
                    <h2
                        style={{color: statusState.type === "success" ? undefined : "#EE4B2B"}}
                    >
                        {statusState.message}
                    </h2>
                </>
            }
            {
                statusState?.type !== "success" &&
                <form
                    className={styling.form}
                    onSubmit={handleSubmit}
                >
                    <label className={styling.label}>
                        Name <span style={{color: theme.colors.alertRed}}>*</span>
                        <input
                            className={styling.input}
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required={true}
                        />
                    </label>

                    <VerticalSpacingSmall/>
                    <label className={styling.label}>
                        Phone <span style={{color: theme.colors.alertRed}}>*</span>
                        <input
                            className={styling.input}
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required={true}
                        />
                    </label>
                    <VerticalSpacingSmall/>
                    <label className={styling.label}>
                        Email
                        <input
                            className={styling.input}
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </label>
                    <VerticalSpacingSmall/>
                    <label className={styling.label}>
                        Message <span style={{color: theme.colors.alertRed}}>*</span>
                        <textarea className={styling.textArea}
                                  name="message"
                                  value={formData.message}
                                  onChange={handleChange}
                                  required={true}>

                    </textarea>
                    </label>
                    <VerticalSpacingSmall/>
                    <input
                        className={styling.submitButton}
                        type="submit"
                        value={isSubmitting ? "Submitting..." : "Submit"}
                        disabled={isSubmitting}
                    />
                </form>
            }
        </Layout>
    )
}
