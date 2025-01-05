import { useRef, useState } from 'react';
import emailjs from 'emailjs-com'; // emailjs ইনপোর্ট করতে ভুলবেন না
import Swal from 'sweetalert2'; // SweetAlert2 ইনপোর্ট করা

const ContactForm = () => {
    const form = useRef();
    const [errors, setErrors] = useState({}); // errors স্টেট ব্যবহার করা

    // রেগুলার এক্সপ্রেশন দিয়ে ইমেইল ভ্যালিডেশন
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const validateForm = () => {
        const formErrors = {};
        const name = form.current.user_name.value;
        const email = form.current.user_email.value;
        const message = form.current.message.value;

        if (!name) formErrors.name = "Name is required";
        if (!email || !emailRegex.test(email)) formErrors.email = "Please enter a valid email"; // রেগুলার এক্সপ্রেশন দিয়ে ইমেইল চেক
        if (!message) formErrors.message = "Message cannot be empty";

        setErrors(formErrors);

        // যদি কোনো error থাকে, তাহলে false রিটার্ন করবে
        return Object.keys(formErrors).length === 0;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (!validateForm()) return; // যদি ভ্যালিডেশন ফেল করে, কিছু হবে না

        // emailjs এর মাধ্যমে ফর্ম সাবমিট করা
        emailjs
        .sendForm('service_8zdlq5f', 'template_an8vxpj', form.current, '4b_XIrPhrNR6Rctz4') // সঠিক publicKey দিন
        .then(
          () => {
            // ফর্ম রিসেট করা
            form.current.reset();

            // SweetAlert দিয়ে সফলতার বার্তা
            Swal.fire({
              title: 'Success!',
              text: 'Your message has been sent successfully!',
              icon: 'success',
              confirmButtonText: 'Okay'
            });
          },
          (error) => {
            // SweetAlert দিয়ে ব্যর্থতার বার্তা
            Swal.fire({
              title: 'Failed!',
              text: 'Failed to send message, please try again.',
              icon: 'error',
              confirmButtonText: 'Retry'
            });
            console.error('Error sending email:', error.text);
          }
        );
    };

    return (
        <section id="contact" className="bg-[#121518] text-gray-400 py-12">
            <div className="container mx-auto px-6 sm:px-12 lg:px-24">
                <h2 className="text-4xl font-bold text-center animate__animated animate__fadeInUp">
                    Contact <span className="text-orange-600">Us</span>
                </h2>
                <p className="mt-4 text-center text-lg animate__animated animate__fadeInUp animate__delay-1s">
                    Your feedback means the world to us! Please fill out the form below and get in touch with us.
                </p>

                <form ref={form} onSubmit={sendEmail} className="mt-8 max-w-2xl mx-auto space-y-6 animate__animated animate__fadeInUp animate__delay-2s">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">Your Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="user_name"
                            placeholder="Enter your name" 
                            className="w-full px-4 py-2 bg-gray-800 text-gray-200 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-orange-600"
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-2">{errors.name}</p>}
                    </div>

                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Your Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="user_email"
                            placeholder="Enter your email" 
                            className="w-full px-4 py-2 bg-gray-800 text-gray-200 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-orange-600"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email}</p>}
                    </div>

                    <div>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">Your Message</label>
                        <textarea 
                            id="message" 
                            name="message"
                            rows="4" 
                            placeholder="Write your message here..." 
                            className="w-full px-4 py-2 bg-gray-800 text-gray-200 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-orange-600"
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-xs mt-2">{errors.message}</p>}
                    </div>

                    <button 
                        type="submit" 
                        className="w-full px-6 py-3 text-lg font-semibold text-white bg-orange-600 rounded hover:bg-orange-700 transition duration-300">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
