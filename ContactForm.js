import React, { useState } from 'react';
import './styles.css'

function ContactForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [submitted, setSubmitted] = useState(false)
    const [errors, setErrors] = useState({})
    const handleChange = (e) => {
        const { id, value } = e.target;
        setForm(prev => ({ ...prev, [id]: value }))
    }
    const validate = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = "Name is required"
        if (!form.email.trim()) newErrors.email = "Email is required";
        else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
            newErrors.email = "Invalid email format";
        }
        if (!form.message.trim()) newErrors.message = "Message is required"
        return newErrors;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
        }
        else {
            setSubmitted(true);
            setErrors({});
            setForm({
                name: "",
                email: "",
                message: ""
            })
        }
    }
    return (
        <div className="container">
            {
                !submitted ? (
                    <form onSubmit={handleSubmit}>
                        <div className="inputContainer" style={{ display: "flex", gap: "4px", padding: "8px 0px" }}>
                            <label for="name">
                                Name:
                            </label>
                            <input id="name" type="text" value={form.name} onChange={handleChange} />
                            {
                                errors.name && (
                                    <p style={{ color: "red", margin: "0px" }}>{errors.name}</p>
                                )
                            }
                        </div>
                        <div className="inputContainer" style={{ display: "flex", gap: "4px", padding: "8px 0px" }}>
                            <label for="email">
                                Email:
                            </label>
                            <input id="email" type="email" value={form.email} onChange={handleChange} />
                            {
                                errors.email && (
                                    <p style={{ color: "red", margin: "0px" }}>{errors.email}</p>
                                )
                            }
                        </div>
                        <div className="inputContainer" style={{ display: "flex", gap: "4px", padding: "8px 0px" }}>
                            <label for="message">
                                Message:
                            </label>
                            <input id="message" type="text" value={form.message} onChange={handleChange} />
                            {
                                errors.message && (
                                    <p style={{ color: "red", margin: "0px" }}>{errors.message}</p>
                                )
                            }
                        </div>
                        <div>
                            <button>
                                Submit
                            </button>
                        </div>
                    </form>
                ) : (
                    <h2 style={{ textAlign: "center" }}>Thank you, {form.name || "User"}</h2>
                )
            }
        </div>
    );
}

export default ContactForm;
