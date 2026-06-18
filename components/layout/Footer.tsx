import Link from "next/link";
import { Globe, Camera, MessageCircle, Video, MapPin, Phone, Mail } from "lucide-react";

const QUICK_LINKS: { label: string; href: string }[] = [
  { label: "About Us", href: "/about" },
  { label: "Destinations", href: "/destinations" },
  { label: "Tours", href: "/tours" },
  { label: "Travel Guides", href: "/tours" },
  { label: "Contact", href: "/contact" },
];

const SUPPORT_LINKS: { label: string; href: string }[] = [
  { label: "FAQ", href: "/contact" },
  { label: "Booking Terms", href: "/contact" },
  { label: "Privacy Policy", href: "/contact" },
  { label: "Refund Policy", href: "/contact" },
  { label: "Help Center", href: "/contact" },
];

const SOCIAL_ICONS = [Globe, MessageCircle, Camera, Video];

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                T
              </div>
              <span className="text-2xl font-bold tracking-tight">Tourvaa</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Discover the world's most incredible destinations with curated experiences designed for modern travellers. Unforgettable journeys start here.
            </p>
            <div className="flex items-center gap-4 pt-2">
              {SOCIAL_ICONS.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social media"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-[#0EA5E9] hover:text-white transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-[#0EA5E9] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-6">Support</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              {SUPPORT_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-[#0EA5E9] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#0EA5E9] shrink-0 mt-0.5" />
                <span>123 Explorer Way,<br />Adventure City, AC 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#0EA5E9] shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#0EA5E9] shrink-0" />
                <a href="mailto:hello@tourvaa.com" className="hover:text-[#0EA5E9] transition-colors">
                  hello@tourvaa.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Tourvaa. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
