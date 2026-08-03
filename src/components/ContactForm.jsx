import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "./common/Button";
import { toast } from "react-toastify";
import { sendInquiry } from "../services/emailService";

const ContactForm = () => {
    const [loading, setLoading] = useState(false);


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            setLoading(true);

            await sendInquiry(data);

            toast.success("Inquiry sent successfully! We'll contact you soon.");

            reset();
        } catch (error) {
            console.error("EmailJS Error:", error);

            toast.error("Failed to send inquiry. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid md:grid-cols-2 gap-6"
        >
            {/* Name */}

            <div>
                <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-[#1A1A1A] p-4 rounded-xl outline-none border border-transparent focus:border-[#C9A35D]"
                    {...register("name", {
                        required: "Name is required",
                        minLength: {
                            value: 3,
                            message: "Minimum 3 characters",
                        },
                    })}
                />

                {errors.name && (
                    <p className="text-red-500 text-sm mt-2">
                        {errors.name.message}
                    </p>
                )}
            </div>

            {/* Email */}

            <div>
                <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-[#1A1A1A] p-4 rounded-xl outline-none border border-transparent focus:border-[#C9A35D]"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^\S+@\S+\.\S+$/,
                            message: "Invalid email address",
                        },
                    })}
                />

                {errors.email && (
                    <p className="text-red-500 text-sm mt-2">
                        {errors.email.message}
                    </p>
                )}
            </div>

            {/* Phone */}

            <div>
                <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-[#1A1A1A] p-4 rounded-xl outline-none border border-transparent focus:border-[#C9A35D]"
                    {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                            value: /^[6-9]\d{9}$/,
                            message: "Enter a valid mobile number",
                        },
                    })}
                />

                {errors.phone && (
                    <p className="text-red-500 text-sm mt-2">
                        {errors.phone.message}
                    </p>
                )}
            </div>

            {/* City */}

            <div>
                <input
                    type="text"
                    placeholder="City"
                    className="w-full bg-[#1A1A1A] p-4 rounded-xl outline-none border border-transparent focus:border-[#C9A35D]"
                    {...register("city", {
                        required: "City is required",
                    })}
                />

                {errors.city && (
                    <p className="text-red-500 text-sm mt-2">
                        {errors.city.message}
                    </p>
                )}
            </div>

            {/* Service */}

            <select
                {...register("service", {
                    required: "Please select a service",
                })}
                className="w-full bg-[#1A1A1A] p-4 rounded-xl outline-none border border-transparent focus:border-[#C9A35D] text-white"
            >
                <option value="">Select Service</option>
                <option value="Residential Interior">Residential Interior</option>
                <option value="Commercial Interior">Commercial Interior</option>
                <option value="Office Interior">Office Interior</option>
                <option value="Modular Kitchen">Modular Kitchen</option>
                <option value="Living Room Design">Living Room Design</option>
                <option value="Bedroom Design">Bedroom Design</option>
                <option value="False Ceiling">False Ceiling</option>
                <option value="Custom Furniture">Custom Furniture</option>
                <option value="Lighting Design">Lighting Design</option>
                <option value="Complete Interior Project">Complete Interior Project</option>
            </select>

            {/* Budget */}

            <div>
                <div>
                    <select
                        className="w-full bg-[#1A1A1A] p-4 rounded-xl outline-none border border-transparent focus:border-[#C9A35D] text-white"
                        {...register("budget", {
                            required: "Please select your budget",
                        })}
                    >
                        <option value="">Select Budget Range</option>
                        <option value="Under ₹2 Lakhs">Under ₹2 Lakhs</option>
                        <option value="₹2 - ₹5 Lakhs">₹2 - ₹5 Lakhs</option>
                        <option value="₹5 - ₹10 Lakhs">₹5 - ₹10 Lakhs</option>
                        <option value="₹10 - ₹20 Lakhs">₹10 - ₹20 Lakhs</option>
                        <option value="₹20 - ₹50 Lakhs">₹20 - ₹50 Lakhs</option>
                        <option value="Above ₹50 Lakhs">Above ₹50 Lakhs</option>
                        <option value="Let's Discuss">Let's Discuss</option>
                    </select>

                    {errors.budget && (
                        <p className="text-red-500 text-sm mt-2">
                            {errors.budget.message}
                        </p>
                    )}
                </div>
            </div>

            {/* Message */}

            <div className="md:col-span-2">
                <textarea
                    rows={6}
                    placeholder="Tell us about your project..."
                    className="w-full bg-[#1A1A1A] p-4 rounded-xl outline-none resize-none border border-transparent focus:border-[#C9A35D]"
                    {...register("message", {
                        required: "Please describe your project",
                    })}
                />

                {errors.message && (
                    <p className="text-red-500 text-sm mt-2">
                        {errors.message.message}
                    </p>
                )}
            </div>

            {/* Submit */}

            <div className="md:col-span-2">
                <Button
                    type="submit"
                    disabled={loading}
                    className="w-full md:w-auto"
                >
                    {loading ? "Sending..." : "Send Inquiry"}
                </Button>
            </div>
        </form>
    );
};

export default ContactForm;