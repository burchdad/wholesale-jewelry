'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';

const interests = [
  'High Jewelry',
  'Fine Jewelry',
  'Estate Jewelry',
  'Bridal & Engagement',
  'Acquisitions',
  'General Inquiry',
];

const contactMethods = ['Email', 'Phone', 'Either'];

export default function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission delay
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-12 h-px bg-[#A8935A] mx-auto mb-8" />
        <h3
          className="text-[#2C2C2C] text-3xl mb-4"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
        >
          Thank You
        </h3>
        <p
          className="text-[#2C2C2C]/50 text-sm leading-[1.8] max-w-sm"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
        >
          We have received your request and will be in touch within one business day to confirm your appointment.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <FormField label="First Name" name="firstName" required />
        <FormField label="Last Name" name="lastName" required />
      </div>
      <FormField label="Email Address" name="email" type="email" required />
      <FormField label="Phone Number" name="phone" type="tel" />

      {/* Interest */}
      <div>
        <label
          className="block text-[10px] tracking-[0.25em] uppercase text-[#2C2C2C]/40 mb-4"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Area of Interest
        </label>
        <div className="flex flex-wrap gap-3">
          {interests.map((item) => (
            <label key={item} className="cursor-pointer">
              <input type="radio" name="interest" value={item} className="sr-only peer" />
              <span
                className="inline-block border border-[#2C2C2C]/15 text-[10px] tracking-[0.2em] uppercase px-4 py-2 text-[#2C2C2C]/40 peer-checked:border-[#2C2C2C] peer-checked:text-[#2C2C2C] hover:border-[#2C2C2C]/40 transition-all cursor-pointer"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {item}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Preferred contact */}
      <div>
        <label
          className="block text-[10px] tracking-[0.25em] uppercase text-[#2C2C2C]/40 mb-4"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Preferred Contact Method
        </label>
        <div className="flex gap-4">
          {contactMethods.map((m) => (
            <label key={m} className="cursor-pointer">
              <input type="radio" name="contact" value={m} className="sr-only peer" />
              <span
                className="inline-block border border-[#2C2C2C]/15 text-[10px] tracking-[0.2em] uppercase px-5 py-2 text-[#2C2C2C]/40 peer-checked:border-[#2C2C2C] peer-checked:text-[#2C2C2C] hover:border-[#2C2C2C]/40 transition-all cursor-pointer"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {m}
              </span>
            </label>
          ))}
        </div>
      </div>

      <FormField
        label="Additional Notes"
        name="notes"
        as="textarea"
        placeholder="Anything you'd like us to know before your visit..."
      />

      <Button type="submit" variant="solid" size="lg" className="w-full justify-center">
        {loading ? 'Sending...' : 'Request Appointment'}
      </Button>

      <p
        className="text-[10px] text-[#2C2C2C]/30 text-center"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        All information is kept strictly confidential.
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

function FormField({ label, name, type = 'text', required, as = 'input', placeholder }: FieldProps) {
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
          rows={4}
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
