import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "../assets/components-css/StrategyModal.css";

interface StrategyModalProps {
    isOpen: boolean;
    onClose: () => void;
    type: "strategy" | "quote";
}

const StrategyModal: React.FC<StrategyModalProps> = ({ isOpen, onClose, type }) => {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        fullname: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    const validate = () => {
        let newErrors = { fullname: "", email: "", phone: "", company: "", service: "", message: "" };
        let isValid = true;

        if (!formData.fullname.trim()) {
            newErrors.fullname = "Full name is required.";
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
            isValid = false;
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Invalid email address.";
            isValid = false;
        }

        // Simple phone validation (optional but good to have constraint if entered)
        if (formData.phone && formData.phone.length < 10) {
            newErrors.phone = "Phone number seems too short.";
            isValid = false;
        }

        if (!formData.service) {
            newErrors.service = "Please select a service.";
            isValid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            // Here you would typically send the data to a backend
            console.log("Form Submitted:", formData);
            setIsSubmitted(true);
            setFormData({ fullname: "", email: "", phone: "", company: "", service: "", message: "" });
        }
    };

    const handleClose = () => {
        setIsSubmitted(false);
        onClose();
    }

    if (!isOpen) return null;

    const title = type === "strategy" ? "Book a Strategy Call" : "Get a Custom Quote";

    const modalContent = (
        <div className={`strategy-modal-overlay ${isOpen ? "open" : ""}`} onClick={handleClose}>
            <div className="strategy-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="strategy-modal-close" onClick={handleClose}>
                    &times;
                </button>

                {isSubmitted ? (
                    <div className="strategy-success-view">
                        <div className="success-icon-container">
                            <svg viewBox="0 0 24 24" className="success-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                        </div>
                        <h2 className="success-title">Thank You!</h2>
                        <p className="success-message">
                            Your request has been submitted successfully.<br />
                            Our team will get back to you shortly.
                        </p>
                        <button className="strategy-submit-btn" onClick={handleClose}>
                            Close
                        </button>
                    </div>
                ) : (
                    <>
                        <h2 className="strategy-modal-title">{title}</h2>

                        <form onSubmit={handleSubmit} noValidate>
                            <div className="strategy-form-row">
                                <div className="strategy-form-field">
                                    <label className="strategy-label">Full Name *</label>
                                    <input
                                        type="text"
                                        name="fullname"
                                        className={`strategy-input ${errors.fullname ? "error-border" : ""}`}
                                        placeholder="John Doe"
                                        value={formData.fullname}
                                        onChange={handleChange}
                                    />
                                    {errors.fullname && <small className="error-text">{errors.fullname}</small>}
                                </div>

                                <div className="strategy-form-field">
                                    <label className="strategy-label">Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className={`strategy-input ${errors.email ? "error-border" : ""}`}
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    {errors.email && <small className="error-text">{errors.email}</small>}
                                </div>
                            </div>

                            <div className="strategy-form-row">
                                <div className="strategy-form-field">
                                    <label className="strategy-label">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        className={`strategy-input ${errors.phone ? "error-border" : ""}`}
                                        placeholder="+1 (555) 000-0000"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                    {errors.phone && <small className="error-text">{errors.phone}</small>}
                                </div>

                                <div className="strategy-form-field">
                                    <label className="strategy-label">Company Name</label>
                                    <input
                                        type="text"
                                        name="company"
                                        className="strategy-input"
                                        placeholder="Your Company Ltd."
                                        value={formData.company}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="strategy-form-field">
                                <label className="strategy-label">Interested Service *</label>
                                <div className="select-wrapper">
                                    <select
                                        name="service"
                                        className={`strategy-select ${errors.service ? "error-border" : ""}`}
                                        value={formData.service}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select a service...</option>
                                        <option value="Web App Development">Web App Development</option>
                                        <option value="Website Design">Website Design & Development</option>
                                        <option value="E-Commerce">E-Commerce Solutions</option>
                                        <option value="Odoo ERP">Odoo ERP Services</option>
                                        <option value="Brand Building">Brand Building</option>
                                        <option value="AI/ML">AI / ML Solutions</option>
                                        <option value="SEO">SEO Services</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                {errors.service && <small className="error-text">{errors.service}</small>}
                            </div>

                            <div className="strategy-form-field">
                                <label className="strategy-label">Message *</label>
                                <textarea
                                    name="message"
                                    className={`strategy-textarea ${errors.message ? "error-border" : ""}`}
                                    placeholder="Tell us a bit about your project goals..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                />
                                {errors.message && <small className="error-text">{errors.message}</small>}
                            </div>

                            <button type="submit" className="strategy-submit-btn">
                                {type === "strategy" ? "Schedule Call" : "Request Quote"}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );

    return ReactDOM.createPortal(modalContent, document.body);
};

export default StrategyModal;
