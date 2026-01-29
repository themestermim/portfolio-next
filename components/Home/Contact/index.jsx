"use client";

import React, { useState } from "react";
import { formValidator, formSchema } from "@/utils/formValidator";

const Contact = () => {

    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});

    const hasError = (field) => Boolean(errors[field]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = formValidator(formData, formSchema);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);

            return;
        }

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: { "Content-Type": "application/json" },
            });

            const result = await res.json();

            if (!res.ok) throw new Error(result.error || "خطا در ارسال فرم");

            alert("پیام شما ارسال شد!");
            setFormData({});
        } catch (err) {
            alert(err.message);
        }

    };


    return (
        <div className="py-8">
            <h2 className="text-center relative font-bold text-2xl unique-title">
                تماس با من
            </h2>

            <div className="flex justify-center mt-6">
                <form className="bg-secondary p-4 rounded-xl w-full max-w-2xl md:p-6 grid grid-cols-1 gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
                    <div className={`c-form-group ${hasError("name") ? "has-error" : ""}`}>
                        <input type="text" className="input text" value={formData.name || ""} id="c-name" placeholder="نام" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                        <div className="notif-row">
                            <div className="notif">
                                <span>{errors.name}</span>
                            </div>
                        </div>
                    </div>

                    <div className={`c-form-group ${hasError("email") ? "has-error" : ""}`}>
                        <input type="text" className="input text" value={formData.email || ""} id="c-email" placeholder="ایمیل" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                        <div className="notif-row">
                            <div className="notif">
                                <span>{errors.email}</span>
                            </div>
                        </div>
                    </div>

                    <div className={`c-form-group col-span-full ${hasError("subject") ? "has-error" : ""}`}>
                        <input type="text" className="input text" value={formData.subject || ""} id="c-subject" placeholder="موضوع" onChange={(e) => setFormData({ ...formData, subject: e.target.value })} />
                        <div className="notif-row">
                            <div className="notif">
                                <span>{errors.subject}</span>
                            </div>
                        </div>
                    </div>

                    <div className={`c-form-group col-span-full ${hasError("description") ? "has-error" : ""}`}>
                        <textarea className="input description" value={formData.description || ""} id="c-description" placeholder="پیام شما" onChange={(e) => setFormData({ ...formData, description: e.target.value })}></textarea>
                        <div className="notif-row">
                            <div className="notif">
                                <span>{errors.description}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center col-span-full">
                        <button type="submit" role="button" className="c-btn btn-primary-fill btn-sm w-full md:w-auto">
                            <span>ارسال پیام</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
