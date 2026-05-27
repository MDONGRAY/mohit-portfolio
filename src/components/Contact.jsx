import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolio';
import ScrollReveal from './ScrollReveal';

/* ─── Social quick-link buttons ─────────────────────────────────── */
const socialButtons = [
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    href: personalInfo.linkedin,
    className: 'bg-[#0077b5]/15 border-[#0077b5]/40 text-[#0077b5] hover:bg-[#0077b5]/25',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    href: personalInfo.github,
    className: 'bg-white/5 border-white/20 text-gray-300 hover:bg-white/10',
  },
  {
    icon: Mail,
    label: 'Gmail',
    href: `mailto:${personalInfo.email}`,
    className: 'bg-red-500/10 border-red-400/30 text-red-400 hover:bg-red-500/20',
  },
];

/* ─── Left-side animated illustration ───────────────────────────── */
function ContactIllustration() {
  return (
    <div className="relative w-full h-full min-h-[420px] flex items-center justify-center select-none">

      {/* Soft glow blob behind everything */}
      <div className="absolute w-72 h-72 rounded-full bg-primary-600/20 blur-3xl" />

      {/* ── Envelope body ── */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10"
      >
        {/* Envelope SVG */}
        <svg width="220" height="180" viewBox="0 0 220 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Shadow */}
          <ellipse cx="110" cy="172" rx="80" ry="8" fill="rgba(99,102,241,0.15)" />

          {/* Body */}
          <rect x="10" y="50" width="200" height="130" rx="12" fill="url(#envBody)" />

          {/* Flap closed */}
          <path d="M10 62 L110 118 L210 62 L210 50 Q210 38 198 38 L22 38 Q10 38 10 50 Z"
                fill="url(#envFlap)" />

          {/* Flap open fold lines */}
          <path d="M10 62 L110 118 L210 62" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

          {/* Left triangle fold */}
          <path d="M10 180 L10 62 L90 130 Z" fill="rgba(0,0,0,0.15)" />
          {/* Right triangle fold */}
          <path d="M210 180 L210 62 L130 130 Z" fill="rgba(0,0,0,0.15)" />

          <defs>
            <linearGradient id="envBody" x1="10" y1="50" x2="210" y2="180" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#312e81" />
              <stop offset="100%" stopColor="#1e1b4b" />
            </linearGradient>
            <linearGradient id="envFlap" x1="10" y1="38" x2="210" y2="120" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#4f46e5" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>
        </svg>

        {/* ── Floating "letter" paper above envelope ── */}
        <motion.div
          animate={{ y: [0, -18, 0], rotate: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
          className="absolute -top-16 left-1/2 -translate-x-1/2 w-36 glass-card p-3
                     border border-primary-500/30 shadow-xl shadow-primary-900/40"
          style={{ borderRadius: '8px' }}
        >
          <div className="h-1.5 w-24 rounded bg-primary-400/60 mb-2" />
          <div className="h-1.5 w-20 rounded bg-gray-500/40 mb-2" />
          <div className="h-1.5 w-28 rounded bg-gray-500/30 mb-2" />
          <div className="h-1.5 w-16 rounded bg-gray-500/20" />
        </motion.div>
      </motion.div>

      {/* ── Floating badge: Available ── */}
      <motion.div
        animate={{ y: [0, -8, 0], x: [0, 3, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-8 left-4 glass-card px-3 py-2 flex items-center gap-2
                   border border-emerald-500/30 shadow-lg shadow-emerald-900/20 z-20"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-xs font-semibold text-white">Available Now</span>
      </motion.div>

      {/* ── Floating badge: Response time ── */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-16 right-2 glass-card px-3 py-2
                   border border-accent-500/30 shadow-lg shadow-accent-900/20 z-20"
      >
        <p className="text-[10px] text-gray-400 font-mono">Avg. Response</p>
        <p className="text-sm font-black gradient-text">~24 hrs</p>
      </motion.div>

      {/* ── Floating badge: Email ── */}
      <motion.div
        animate={{ y: [0, -6, 0], x: [0, -3, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
        className="absolute bottom-20 left-2 glass-card px-3 py-2 flex items-center gap-2
                   border border-primary-500/20 z-20"
      >
        <Mail size={12} className="text-primary-400" />
        <span className="text-[10px] text-gray-300 font-mono truncate max-w-[120px]">
          {personalInfo.email}
        </span>
      </motion.div>

      {/* Decorative orbiting ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute w-64 h-64 rounded-full border border-dashed border-primary-500/10 pointer-events-none"
      />
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────────────── */
export default function Contact() {
  const [form,   setForm]   = useState({ name: '', email: '', number: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim())                       errs.name    = 'Name is required';
    if (!form.email.trim())                       errs.email   = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email))   errs.email   = 'Invalid email address';
    if (!form.message.trim())                     errs.message = 'Message cannot be empty';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          phone: form.number,
          message: form.message,
          subject: `New Portfolio Message from ${form.name}`,
          from_name: form.name,
        }),
      });
      const result = await response.json();
      if (response.ok && result.success) {
        setStatus('success');
        setForm({ name: '', email: '', number: '', message: '' });
      } else {
        setStatus('error');
        setErrors({ submit: result.message || 'Failed to send. Please try again.' });
      }
    } catch {
      setStatus('error');
      setErrors({ submit: 'Network error. Please try again.' });
    }
  };

  const handleChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
    setErrors((p) => ({ ...p, [e.target.name]: undefined }));
  };

  const inputBase =
    'w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-gray-600 ' +
    'focus:outline-none focus:ring-2 focus:ring-primary-500/40 transition-all text-sm';

  return (
    <section id="contact" className="relative py-16 bg-dark-800/50 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

      {/* Subtle background orbs */}
      <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-primary-600/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-accent-500/10 blur-3xl pointer-events-none" />

      <div className="section-wrapper">

        {/* ── Section label ── */}
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary-500" />
            <span className="text-primary-400 text-sm font-semibold tracking-widest uppercase">
              Contact
            </span>
          </div>

          {/* Heading — "Coffee" and "Chat" accented */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
            Take A{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Coffee
            </span>{' '}
            And{' '}
            <span className="gradient-text">Chat</span>{' '}
            With Me
          </h2>
          <p className="text-gray-400 max-w-xl mt-2">
            Got an opportunity, a project, or just want to say hi? My inbox is always open.
          </p>
        </ScrollReveal>

        {/* ── Two-column layout ── */}
        <div className="grid lg:grid-cols-2 gap-10 mt-14 items-center">

          {/* LEFT — illustration */}
          <ScrollReveal direction="left">
            <ContactIllustration />
          </ScrollReveal>

          {/* RIGHT — social pills + form */}
          <ScrollReveal direction="right" delay={0.1}>

            {/* Social link pills */}
            <div className="flex gap-3 mb-6">
              {socialButtons.map(({ icon: Icon, label, href, className }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold
                              transition-all duration-200 ${className}`}
                >
                  <Icon size={15} />
                  {label}
                </motion.a>
              ))}
            </div>

            {/* Form card */}
            <div className="glass-card p-6 md:p-7">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center text-center py-10"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-4">
                      <CheckCircle size={32} className="text-emerald-400" />
                    </div>
                    <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                    <p className="text-gray-400 mb-6 text-sm">
                      Thanks for reaching out — Mohit will get back to you within 24 hrs.
                    </p>
                    <button onClick={() => setStatus('idle')} className="btn-outline text-sm">
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Full Name */}
                    <div>
                      <input
                        id="c-name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className={`${inputBase} ${errors.name ? 'border-red-500/60' : 'border-white/10 focus:border-primary-500/50'}`}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle size={11} />{errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <input
                        id="c-email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className={`${inputBase} ${errors.email ? 'border-red-500/60' : 'border-white/10 focus:border-primary-500/50'}`}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle size={11} />{errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone number (optional) */}
                    <div>
                      <input
                        id="c-number"
                        name="number"
                        type="tel"
                        value={form.number}
                        onChange={handleChange}
                        placeholder="Number (optional)"
                        className={`${inputBase} border-white/10 focus:border-primary-500/50`}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <textarea
                        id="c-message"
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        className={`${inputBase} resize-none ${errors.message ? 'border-red-500/60' : 'border-white/10 focus:border-primary-500/50'}`}
                      />
                      {errors.message && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle size={11} />{errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit error */}
                    {errors.submit && (
                      <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-2">
                        <AlertCircle size={15} />{errors.submit}
                      </div>
                    )}

                    {/* Send button — full width, accent gradient */}
                    <motion.button
                      type="submit"
                      disabled={status === 'loading'}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl
                                 font-bold text-white text-sm tracking-wide
                                 bg-gradient-to-r from-primary-600 via-accent-500 to-primary-500
                                 hover:opacity-90 transition-opacity shadow-lg shadow-primary-900/40
                                 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send size={15} /> Send Message
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}