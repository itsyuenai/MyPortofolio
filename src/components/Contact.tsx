import React, { useState } from 'react';
import { Mail, Send, Github, Linkedin, Instagram } from 'lucide-react';
import emailjs from 'emailjs-com';
import { toast } from 'react-hot-toast';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // ---- TAMBAHKAN KEMBALI BAGIAN INI ----
    console.log("Service ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log("Template ID:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    console.log("Public Key:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    // ------------------------------------

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          title: `Contact from ${formData.name}`,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      toast.success('Message sent successfully! 🎉');

      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message. Please try again.');
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/itsyuenai', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/naisyayuenr', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/naisyayuen', label: 'Instagram' },
    { icon: Mail, href: 'mailto:naisyayr09@gmail.com', label: 'Email' }
  ];

  return (
    <section 
      id="contact" 
      ref={ref}
      className={`py-24 bg-white/50 backdrop-blur-sm relative z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="max-w-4xl mx-auto px-6">
       <h2 className="text-5xl leading-tight font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent">
          Let's Work Together
        </h2>
        
        <div className={`text-center mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            I'm always excited to work on new projects and collaborate with amazing people. 
            Let's create something beautiful together!
          </p>

          {isSubmitted && (
            <div className="mb-8 mx-auto max-w-md">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl py-4 px-6 shadow-lg transform animate-bounce">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-green-700 font-semibold text-lg">
                    This message has been sent! ✨
                  </span>
                </div>
                <p className="text-green-600 text-sm mt-2">
                  Thank you for reaching out! I'll get back to you soon.
                </p>
              </div>
            </div>
          )}

          <form 
            onSubmit={handleSubmit} 
            className={`bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-pink-100/50 mb-12 transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-pink-200/50 rounded-2xl bg-white/80 focus:border-pink-500 focus:outline-none focus:ring-4 focus:ring-pink-500/10 transition-all duration-300"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-pink-200/50 rounded-2xl bg-white/80 focus:border-pink-500 focus:outline-none focus:ring-4 focus:ring-pink-500/10 transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 border-2 border-pink-200/50 rounded-2xl bg-white/80 focus:border-pink-500 focus:outline-none focus:ring-4 focus:ring-pink-500/10 transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-400 text-white py-4 px-8 rounded-2xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : isSubmitted ? (
                <>
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Message Sent! ✨
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
          </form>

          <div className={`flex justify-center gap-6 transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-400 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:shadow-xl hover:shadow-pink-500/25 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: isVisible ? `${1200 + index * 100}ms` : '0ms'
                }}
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;