'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';

const subjects = [
  'Piece Inquiry',
  'Acquisition Request',
  'Appraisal',
  'General',
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-12 h-px bg-[#A8935A] mx-auto mb-8" />
        <h3
          className="text-[#2C2C2C] text-3xl mb-4"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
        >
          Message Received
        </h3>
        <p
          className="text-[#2C2C2C]/50 text-sm leading-[1.8]"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
        >
          We will respond personally within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label="First Name" name="firstName" required />
        <Field label="Last Name" name="lastName" required />
      </div>
      <Field label="Email Address" name="email" type="email" required />
      <Field label="Phone Number" name="phone" type="tel" />

      <div>
        <label
          className="block text-[10px] tracking-[0.25em] uppercase text-[#2C2C2C]/40 mb-4"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Subject
        </label>
        <select
          name="subject"
          className="w-full bg-transparent border-b border-[#2C2C2C]/15 text-[#2C2C2C]/60 text-sm py-3 outline-none focus:border-[#2C2C2C]/50 transition-colors appearance-none cursor-pointer"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
        >
          {subjects.map((s) => (
            <option key={s} value={s} className="bg-[#F8F5F0]">
              {s}
            </option>
          ))}
        </select>
      </div>

      <Field label="Message" name="message" as="textarea" required placeholder="Tell us how we can help..." />

      <Button type="submit" variant="solid" size="lg" className="w-full justify-center">
        {loading ? 'Sending...' : 'Send Message'}
      </Button>

      <p
        className="text-[10px] text-[#2C2C2C]/30 text-center"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        All inquiries are handled with complete confidentiality.
      </p>
    </form>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  as?: 'input' | 'textarea';
  placeholder?: string;
}

function Field({ label, name, type = 'text', required, as = 'input', placeholder }: FieldProps) {
  const base =
    'w-full bg-transparent border-b border-[#2C2C2C]/15 text-[#2C2C2C] placeholder-[#2C2C2C]/25 text-sm py-3 outline-none focus:border-[#2C2C2C]/50 transition-colors resize-none';
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[10px] tracking-[0.25em] uppercase text-[#2C2C2C]/40 mb-3"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {label}
        {required && <span className="text-[#A8935A] ml-1">*</span>}
      </label>
      {as === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          rows={5}
          required={required}
          placeholder={placeholder}
          className={base}
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={base}
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
        />
      )}
    </div>
  );
}
