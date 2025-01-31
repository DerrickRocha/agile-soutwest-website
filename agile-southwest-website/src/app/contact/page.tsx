"use client";

import Layout from "@/app/components/layout";
import PageWrapper from "@/app/components/pageWrapper";
import {H1, H2} from "@/app/components/text";
import VerticalSpacingLarge from "@/app/components/VerticalSpacingLarge";
import InformationSection from "@/app/components/InformationSection";
import VerticalSpacingSmall from "@/app/components/verticalSpacingSmall";
import styled from "styled-components";
import {theme} from "@/app/constants/theme";
import {useState} from "react";

const subHeading = "Reach Out to Agile Southwest for Custom Solutions and Support"
const content = [
    "Have questions or need expert web development, mobile app solutions, or electronics repair services? Agile Southwest is here to help! Whether you’re looking for a custom website, a native Android or iOS app, or fast and reliable device repairs, our team is ready to assist. Contact us today to discuss your project, request a quote, or get expert support. Fill out the form below, call us, or send us a message—we’re here to provide the solutions your business needs to grow.",
]


const Form = styled.form`
    display: block;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px; /* Space between each form element */
    margin-top: 20px;
`;

const Label = styled.label`
    font-size: 16px;
    color: ${theme.colors.gray};
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid ${theme.colors.gray};
    border-radius: 4px;
    font-size: 16px;
    color: #333;
    background-color: #fff;

    &:focus {
        border-color: ${theme.colors.secondary}; /* Change border color on focus */
        outline: none;
    }
`;

const TextArea = styled.textarea`
    width: 100%;
    height: 150px; /* Make the message input taller */
    padding: 10px;
    margin-top: 5px;
    border: 1px solid ${theme.colors.gray};
    border-radius: 4px;
    font-size: 16px;
    color: #333;
    background-color: #fff;
    resize: vertical; /* Allow vertical resizing */
    overflow: auto;

    &:focus {
        border-color: ${theme.colors.secondary}; /* Change border color on focus */
        outline: none;
    }
`;

const SubmitButton = styled.input`
    background-color: ${theme.colors.primary}; /* Blue background for the submit button */
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        background-color: ${theme.colors.secondary}; /* Darker blue on hover */
    }
`;

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [statusMessage, setStatusMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    };
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsSubmitting(true)
        setStatusMessage("")
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
            const result = await response.json()
            console.log(result)
            if (response.ok) {
                setStatusMessage("Your message has been sent successfully!")
            } else {
                setStatusMessage(result.error || "There was an error sending your message.");
            }
        } catch (error) {
            setStatusMessage("An unexpected error occurred. Please try again.");
            console.log(error)
        } finally {
            setIsSubmitting(false);  // Set submitting state to false when the request is finished
        }
    }
    return (
        <Layout>
            <PageWrapper>
                <H1 textAlign={'center'}>
                    Contact Agile Southwest
                </H1>
                <VerticalSpacingLarge/>
                <InformationSection title={subHeading} content={content}/>
                <VerticalSpacingLarge/>
                <H2 textAlign={"center"}>
                    505-310-0331
                </H2>
                <VerticalSpacingSmall/>
                <H2 textAlign={"center"}>
                    drocha616@gmail.com
                </H2>
                <Form onSubmit={handleSubmit}>
                    <Label>
                        Name <span style={{color: theme.colors.alertRed}}>*</span>
                        <Input type="text"
                               name="name"
                               value={formData.name}
                               onChange={handleChange}
                               required={true}
                        />
                    </Label>
                    <VerticalSpacingSmall/>
                    <Label>
                        Phone <span style={{color: theme.colors.alertRed}}>*</span>
                        <Input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required={true}
                        />
                    </Label>
                    <VerticalSpacingSmall/>
                    <Label>
                        Email
                        <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </Label>
                    <VerticalSpacingSmall/>
                    <Label>
                        Message <span style={{color: theme.colors.alertRed}}>*</span>
                        <TextArea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required={true}
                        />
                    </Label>
                    <VerticalSpacingSmall/>
                    <SubmitButton
                        type="submit"
                        value={isSubmitting ? "Submitting..." : "Submit"}
                        disabled={isSubmitting}
                    />
                </Form>
                <VerticalSpacingSmall/>
                {statusMessage && <H2 textAlign={"center"}>{statusMessage}</H2>}
            </PageWrapper>

        </Layout>
    );
};

export default ContactPage;