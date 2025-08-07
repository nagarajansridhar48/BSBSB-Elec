import React, { useState, useEffect, useCallback } from 'react';

const Rightcard = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    }, []);

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        const { name, email, message } = form;

        if (!name || !email || !message) {
            alert('Please fill in all fields!');
            return;
        }

        setIsSubmitting(true);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log('Form submitted:', form);
            alert('Message sent successfully!');
            setForm({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Submission error:', error);
            alert('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    }, [form]);
    return (
        <div
            className="flex flex-col justify-center p-6 sm:p-8 md:p-10 bg-white text-gray-800"
            data-aos="fade-up"
        >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
                GET IN TOUCH
            </h2>

            <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-3">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full rounded-md p-2.5 sm:p-3 bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4286b9] focus:border-transparent transition"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full rounded-md p-2.5 sm:p-3 bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4286b9] focus:border-transparent transition"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Your message..."
                        className="w-full rounded-md p-2.5 sm:p-3 bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4286b9] focus:border-transparent transition"
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`mt-3 w-full bg-gradient-to-r from-[#4286b9] to-[#f3a933] text-white font-medium py-2.5 sm:py-3 rounded-md shadow hover:opacity-90 transition duration-300 ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}`}
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </div>
    )
}

export default Rightcard