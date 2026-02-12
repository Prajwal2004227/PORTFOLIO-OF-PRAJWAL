import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    // 1. Double check this key in EmailJS Dashboard > Account > Public Key
    emailjs.init("Rz7W9pVF0HdDryNNL"); 
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const result = await emailjs.sendForm(
        "service_axbtt7a",   // 2. Check Service ID
        "template_1ziboq3",  // 3. Check Template ID
        form.current
      );

      console.log("SUCCESS!", result.status, result.text);
      form.current.reset();
      toast.success("Message sent successfully! 🚀", {
        theme: "dark",
      });
    } catch (error) {
      // This will print the EXACT reason for failure in your browser console (F12)
      console.error("FAILED...", error);
      toast.error(`Failed: ${error.text || "Check console for details"}`, {
        theme: "dark",
      });
    }

    setIsSending(false);
  };

  return (
    <section id="contact" className="py-24 px-[5vw] flex flex-col items-center">
      <ToastContainer />
      
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">Get In Touch</h2>
        <div className="w-20 h-1 bg-purple-500 mx-auto mt-4"></div>
      </div>

      <div className="w-full max-w-lg bg-[#0d081f] p-8 rounded-2xl border border-gray-800 shadow-2xl">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-5">
          {/* IMPORTANT: "name" attributes must match your EmailJS Template {{tags}} */}
          <div>
            <label className="text-gray-400 text-sm mb-2 block">Name</label>
            <input
              type="text"
              name="from_name" 
              placeholder="John Doe"
              required
              className="w-full p-3 rounded-lg bg-[#131025] text-white border border-gray-700 focus:border-purple-500 outline-none transition"
            />
          </div>

          <div>
            <label className="text-gray-400 text-sm mb-2 block">Email</label>
            <input
              type="email"
              name="reply_to"
              placeholder="john@example.com"
              required
              className="w-full p-3 rounded-lg bg-[#131025] text-white border border-gray-700 focus:border-purple-500 outline-none transition"
            />
          </div>

          <div>
            <label className="text-gray-400 text-sm mb-2 block">Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Project Inquiry"
              required
              className="w-full p-3 rounded-lg bg-[#131025] text-white border border-gray-700 focus:border-purple-500 outline-none transition"
            />
          </div>

          <div>
            <label className="text-gray-400 text-sm mb-2 block">Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="How can I help you?"
              required
              className="w-full p-3 rounded-lg bg-[#131025] text-white border border-gray-700 focus:border-purple-500 outline-none transition"
            />
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-4 text-white font-bold rounded-lg hover:opacity-90 transition transform active:scale-95 disabled:opacity-50"
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;