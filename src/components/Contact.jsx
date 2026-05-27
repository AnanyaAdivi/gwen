import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // ⚠️ REPLACE THESE WITH YOUR OWN EMAILJS CREDENTIALS
    emailjs
      .sendForm('service_r8d42q5', 'template_epa8xpe', formRef.current, 's2K2a2hBR6Yqfa4xx')
      .then(
        () => {
          setStatus('success');
          formRef.current.reset();
          setTimeout(() => setStatus(''), 3000);
        },
        (error) => {
          setStatus('error');
          setTimeout(() => setStatus(''), 3000);
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-6 bg-dark/60">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-cinzel text-4xl md:text-5xl text-gold mb-4">The Owlery</h2>
          <div className="w-20 h-0.5 bg-gold mx-auto" />
          <p className="mt-4 text-parchment/70">Send me a message – I reply faster than a Golden Snitch</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="text-gold text-2xl">📧</span>
              <a href="mailto:adiviananya@gmail.com" className="hover:text-gold transition">adiviananya@gmail.com</a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gold text-2xl">🔗</span>
              <a href="https://www.linkedin.com/in/ananya-adivi-9b6056345/" target="_blank" rel="noreferrer" className="hover:text-gold transition">LinkedIn</a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gold text-2xl">🐙</span>
              <a href="https://github.com/AnanyaAdivi" target="_blank" rel="noreferrer" className="hover:text-gold transition">GitHub</a>
            </div>
            <div className="mt-8 p-4 magical-border">
              <p className="text-sm italic text-parchment/60">"Help will always be given at Hogwarts to those who ask."</p>
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <input type="text" name="user_name" placeholder="Your Name" required className="w-full p-3 bg-dark/80 border border-gold/30 rounded focus:outline-none focus:border-gold text-parchment" />
            <input type="email" name="user_email" placeholder="Your Email" required className="w-full p-3 bg-dark/80 border border-gold/30 rounded focus:outline-none focus:border-gold text-parchment" />
            <textarea name="message" rows="4" placeholder="Your Owl Message..." required className="w-full p-3 bg-dark/80 border border-gold/30 rounded focus:outline-none focus:border-gold text-parchment" />
            <button type="submit" className="px-6 py-2 bg-gold text-dark font-bold rounded-full hover:shadow-lg transition">
              {status === 'sending' ? 'Sending...' : 'Send Owl'}
            </button>
            {status === 'success' && <p className="text-emerald-400">✨ Message delivered! Expect a reply soon.</p>}
            {status === 'error' && <p className="text-red-400">Oops! Something went wrong. Try again or email directly.</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;