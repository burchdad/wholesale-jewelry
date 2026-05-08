'use client';

import Link from 'next/link';

// Simple inline social SVGs to avoid icon library version issues
function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.99.04-2.85.18-.77 1.23-5.22 1.23-5.22s-.31-.63-.31-1.56c0-1.46.85-2.55 1.9-2.55.9 0 1.33.67 1.33 1.48 0 .9-.57 2.26-.87 3.51-.25 1.05.52 1.9 1.54 1.9 1.85 0 3.09-2.37 3.09-5.17 0-2.14-1.44-3.64-3.49-3.64-2.38 0-3.77 1.79-3.77 3.63 0 .72.27 1.49.62 1.91a.25.25 0 0 1 .06.24l-.23.93c-.08.29-.25.35-.58.21-1.32-.62-2.15-2.57-2.15-4.13 0-3.37 2.45-6.47 7.07-6.47 3.71 0 6.6 2.64 6.6 6.17 0 3.69-2.32 6.65-5.55 6.65-1.08 0-2.1-.56-2.45-1.22l-.67 2.48c-.24.93-.89 2.09-1.33 2.8C10.7 21.96 11.34 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
    </svg>
  );
}

const footerLinks = {
  Collections: [
    { label: 'High Jewelry', href: '/collections/high-jewelry' },
    { label: 'Fine Jewelry', href: '/collections/fine-jewelry' },
    { label: 'Estate Jewelry', href: '/collections/estate-jewelry' },
    { label: 'Bridal', href: '/collections/bridal' },
  ],
  Services: [
    { label: 'Acquisitions', href: '/acquisitions' },
    { label: 'Private Appointment', href: '/appointment' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#2C2C2C] text-[#F8F5F0]">
      {/* Newsletter */}
      <div className="border-b border-white/10 py-20 px-8 md:px-12">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#A8935A] mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            The Inner Circle
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl text-[#F8F5F0] mb-4 leading-tight"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
          >
            Exclusive Content Straight To Your Inbox
          </h2>
          <p className="text-sm text-[#F8F5F0]/40 max-w-md mx-auto mb-10" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
            Private acquisitions, editorial notes, and invitations to exclusive events — reserved for our inner circle.
          </p>
          <form className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-white/20 text-[#F8F5F0] placeholder-[#F8F5F0]/30 px-6 py-4 text-sm outline-none focus:border-[#A8935A] transition-colors"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
            />
            <button
              type="submit"
              className="bg-[#A8935A] text-[#F8F5F0] text-[10px] tracking-[0.25em] uppercase px-8 py-4 hover:bg-[#8B7A4A] transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main footer content */}
      <div className="py-16 px-8 md:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/">
              <span
                className="font-serif text-xl tracking-[0.25em] text-[#F8F5F0] uppercase"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
              >
                Maison
              </span>
              <span
                className="font-serif text-xl tracking-[0.25em] text-[#A8935A] uppercase ml-2"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
              >
                Aure
              </span>
            </Link>
            <p className="mt-6 text-sm text-[#F8F5F0]/40 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
              Private dealers in fine, estate, and high jewelry. Serving discerning collectors by appointment.
            </p>
            <div className="flex gap-4 mt-8">
              <a href="#" aria-label="Instagram" className="text-[#F8F5F0]/40 hover:text-[#A8935A] transition-colors">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="Pinterest" className="text-[#F8F5F0]/40 hover:text-[#A8935A] transition-colors">
                <PinterestIcon />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#F8F5F0]/30 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                {group}
              </p>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#F8F5F0]/60 hover:text-[#F8F5F0] transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#F8F5F0]/30 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Visit Us
            </p>
            <address className="not-italic text-sm text-[#F8F5F0]/60 leading-relaxed space-y-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
              <p>By Appointment Only</p>
              <p>New York, New York</p>
              <p className="pt-4">
                <a href="tel:+12125550000" className="hover:text-[#F8F5F0] transition-colors">+1 (212) 555-0000</a>
              </p>
              <p>
                <a href="mailto:hello@maisonaure.com" className="hover:text-[#F8F5F0] transition-colors">hello@maisonaure.com</a>
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-8 px-8 md:px-12">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between gap-4 items-center">
          <p className="text-[10px] tracking-[0.15em] text-[#F8F5F0]/25" style={{ fontFamily: 'Inter, sans-serif' }}>
            © {new Date().getFullYear()} Maison Aure. All rights reserved.
          </p>
          <div className="flex gap-8">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <a key={item} href="#" className="text-[10px] tracking-[0.15em] text-[#F8F5F0]/25 hover:text-[#F8F5F0]/50 transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
