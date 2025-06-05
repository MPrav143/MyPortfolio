
import { useState } from 'react';
import { Mail, Phone, MessageSquare, Linkedin, Github } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Initialize EmailJS (do this once, maybe in a useEffect)
      emailjs.init('DARGUsJwXkV-8ZV8R'); // Replace with your actual User ID
      const response = await emailjs.send(
        'service_9xs8ibn', // Replace with your Service ID
        'template_qaun0va', // Replace with your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        }
      );

      console.log('Email sent successfully:', response);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="border-b-2 border-cyan-400 pb-1">Contact Me</span>
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Get in Touch</h3>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="text-cyan-400 mr-4" size={24} />
                <a href="mailto:praveen17082005@gmail.com" className="hover:text-cyan-400 transition-colors">
                  praveen17082005@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="text-cyan-400 mr-4" size={24} />
                <a href="tel:+919489790927" className="hover:text-cyan-400 transition-colors">
                  +91 9489790927
                </a>
              </div>
              <div className="flex items-center">
                <MessageSquare className="text-cyan-400 mr-4" size={24} />
                <a href="https://wa.me/919003686808" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  Chat on WhatsApp
                </a>
              </div>
              <div className="flex items-center">
                <Linkedin className="text-cyan-400 mr-4" size={24} />
                <a href="https://linkedin.com/in/praveen-m" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  Linkedin
                </a>
              </div>
              <div className="flex items-center">
                <Github className="text-cyan-400 mr-4" size={24} />
                <a href="https://github.com/MPrav143" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  Github
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-all disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="mt-4 p-3 bg-green-500/20 text-green-400 rounded-lg">
                  Message sent successfully!
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mt-4 p-3 bg-red-500/20 text-red-400 rounded-lg">
                  Failed to send message. Please try again or contact me directly via email.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;