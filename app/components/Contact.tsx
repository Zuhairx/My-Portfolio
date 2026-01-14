import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, MapPin, PhoneCall, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from './ui/alert-dialog';


export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setFormData({ ...formData, email });

    if (email && !email.endsWith('@mail.com')) {

    } else {
      setEmailError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (emailError) {
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      await emailjs.send(
        'service_2ts1bok',
        'template_nblgryq',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'zuhairyuliansyah688@gmail.com'
        },
        'vZss-XIdiW8MOW4zu'
      );
      setSubmitMessage('Message sent successfully!');
      setIsDialogOpen(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitMessage('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContactClick = (info: typeof contactInfo[0]) => {
    switch (info.title) {
      case 'Email':
        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=zuhairyuliansyah688@gmail.com', '_blank');
        break;
      case 'Whatsapp':
        const phoneNumber = info.value.replace(/\D/g, '');
        window.open(`https://wa.me/${phoneNumber}`, '_blank');
        break;
      case 'Location':
        window.open('https://maps.app.goo.gl/wuDTfXNqs5au46Pd7', '_blank');
        break;
      default:
        break;
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'zuhairyuliansyah688@gmail.com',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: PhoneCall,
      title: 'Whatsapp',
      value: '+62 815-1450-7167',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Jakarta, Indonesia',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-500 text-sm tracking-wider uppercase mb-2 block">Let's Connect</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 cursor-pointer"
                  whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(6,182,212,0.15)' }}
                  onClick={() => handleContactClick(info)}
                >
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center text-white shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <info.icon className="w-8 h-8" />
                  </motion.div>
                  <h3 className="text-xl mb-2">{info.title}</h3>
                  <p className="text-gray-600">{info.value}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              whileHover={{ boxShadow: '0 20px 40px rgba(6,182,212,0.15)' }}
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-cyan-500 outline-none transition-colors"
                    placeholder="Your name"
                    required
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={handleEmailChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 ${emailError ? 'border-red-500' : 'border-gray-200 focus:border-cyan-500'} outline-none transition-colors`}
                    placeholder="your@mail.com"
                    required
                  />
                  {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
                </motion.div>
              </div>

              <motion.div
                className="mb-6"
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-cyan-500 outline-none transition-colors resize-none"
                  rows={6}
                  placeholder="Tell me about your project..."
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/50 disabled:cursor-not-allowed"
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className={`w-5 h-5 ${isSubmitting ? 'animate-spin' : ''}`} />
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>

      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <div className="flex items-center justify-center mb-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 200 }}
                >
                  <CheckCircle className="w-16 h-16 text-green-500" />
                </motion.div>
              </div>
              <AlertDialogTitle className="text-center">Email Sent</AlertDialogTitle>
              <AlertDialogDescription className="text-center">
                Your message has been sent successfully!
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction
                onClick={() => setIsDialogOpen(false)}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white w-full"
              >
                OK
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </motion.div>
      </AlertDialog>
    </section>
  );
}
