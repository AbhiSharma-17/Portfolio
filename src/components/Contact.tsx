import { Mail, MessageCircle, GitBranch, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-glass neon-border text-brand-light text-sm font-medium mb-6 shadow-[0_0_10px_rgba(0,229,255,0.1)]">
          <Mail size={16} />
          <span>Get In Touch</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Let's build something <span className="text-gradient neon-text">amazing</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-xl">
          Have a project in mind? I'd love to hear about it. Drop me a message and I'll get back to you within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Info Cards */}
        <div className="flex flex-col gap-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-glass neon-border p-6 rounded-2xl flex items-center gap-4"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-brand-dark to-brand flex items-center justify-center font-bold text-xl overflow-hidden p-[2px]">
              <img src="/contact-profile.jpg" alt="Abhishek Kumar" className="w-full h-full object-cover rounded-full" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Abhishek Kumar</h3>
              <p className="text-gray-400 text-sm">Full Stack Developer • India</p>
              <div className="flex items-center gap-2 mt-2 text-xs font-medium text-green-400">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Available for work
              </div>
            </div>
          </motion.div>

          <motion.a 
            href="mailto:mrabhi08585@gmail.com"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-glass neon-border p-5 rounded-2xl flex items-center gap-4 group"
          >
            <div className="w-10 h-10 rounded-xl bg-dark-bg border border-dark-border flex items-center justify-center group-hover:text-brand-light transition-colors">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Email</p>
              <p className="font-medium text-gray-300">mrabhi08585@gmail.com</p>
            </div>
          </motion.a>

          <motion.a 
            href="https://wa.me/919939009963"
            target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-glass neon-border p-5 rounded-2xl flex items-center gap-4 group"
          >
            <div className="w-10 h-10 rounded-xl bg-dark-bg border border-dark-border flex items-center justify-center group-hover:text-brand-light transition-colors text-green-500">
              <MessageCircle size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">WhatsApp</p>
              <p className="font-medium text-gray-300">Chat with me</p>
            </div>
          </motion.a>

          <motion.a 
            href="https://github.com/AbhiSharma-17"
            target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-glass neon-border p-5 rounded-2xl flex items-center gap-4 group"
          >
            <div className="w-10 h-10 rounded-xl bg-dark-bg border border-dark-border flex items-center justify-center group-hover:text-brand-light transition-colors">
              <GitBranch size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">GitHub</p>
              <p className="font-medium text-gray-300">@AbhiSharma-17</p>
            </div>
          </motion.a>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-glass neon-border p-5 rounded-2xl flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-dark-bg border border-dark-border flex items-center justify-center text-brand-light">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Location</p>
              <p className="font-medium text-gray-300">India • Remote Friendly</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-glass neon-border p-6 rounded-2xl border-l-4 border-l-green-500 shadow-[0_0_15px_rgba(34,197,94,0.1)]"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <h3 className="font-semibold text-green-500">Available for Projects</h3>
            </div>
            <p className="text-sm text-gray-400">Currently taking on freelance projects. Response time: within 24 hours.</p>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-glass neon-border p-8 rounded-3xl h-full shadow-[0_0_30px_rgba(0,229,255,0.05)]"
        >
          <form 
            action="https://api.web3forms.com/submit" 
            method="POST" 
            className="flex flex-col gap-6 h-full"
          >
            {/* Web3Forms Access Key */}
            <input type="hidden" name="access_key" value="6cef4430-9ec2-4a82-87f1-9ad3ba70adbe" />
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-300">Your Name</label>
              <input 
                type="text" 
                id="name"
                name="name"
                placeholder="John Doe" 
                className="bg-dark-bg border border-brand/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand focus:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
              <input 
                type="email" 
                id="email"
                name="email"
                placeholder="john@example.com" 
                className="bg-dark-bg border border-brand/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand focus:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all"
                required
              />
            </div>
            <div className="flex flex-col gap-2 flex-grow">
              <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
              <textarea 
                id="message"
                name="message"
                placeholder="Tell me about your project..." 
                className="bg-dark-bg border border-brand/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand focus:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all h-full min-h-[150px] resize-none"
                required
              ></textarea>
            </div>
            <div className="flex flex-col gap-4 mt-2">
              <button 
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-light to-brand text-slate-900 font-bold text-lg hover:shadow-[0_0_20px_rgba(0,229,255,0.6)] hover:-translate-y-1 transition-all duration-300"
              >
                Send Message
              </button>
              
              <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-dark-border"></div>
                <span className="flex-shrink-0 mx-4 text-gray-500 text-sm">or</span>
                <div className="flex-grow border-t border-dark-border"></div>
              </div>

              <a 
                href="mailto:mrabhi08585@gmail.com"
                className="w-full py-3.5 rounded-xl bg-dark-bg border border-brand/30 text-brand-light font-semibold text-center hover:bg-brand/10 hover:-translate-y-1 transition-all duration-300"
              >
                Open in Email App
              </a>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
