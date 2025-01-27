"use client";

import Layout from "@/app/components/layout";

const ContactPage = () => {
    return (
        <Layout>
            <h1>Contact Us</h1>
            <p>Feel free to reach out for business inquiries or collaborations.</p>
            <form>
                <label>
                    Name: <input type="text" name="name" />
                </label>
                <br />
                <label>
                    Email: <input type="email" name="email" />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </Layout>
    );
};

export default ContactPage;