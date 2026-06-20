import type { Metadata } from "next";
import FAQClient from "./FAQClient";

export const metadata: Metadata = {
  title: "FAQ | Tourvaa",
  description: "Find answers to common questions about Tourvaa tours, booking, payments, and policies.",
};

type FAQ = {
  id: number;
  question: string;
  answer: string;
  category: string;
  sort_order: number;
};

const DEFAULT_FAQS: FAQ[] = [
  {
    id: 0,
    question: "How do I book a tour?",
    answer:
      "Browse our tours and click 'Book Now' on any tour page. Select your travel dates, group size, and complete the payment. Our team confirms your booking within 24 hours.",
    category: "booking",
    sort_order: 0,
  },
  {
    id: 1,
    question: "What is the cancellation policy?",
    answer:
      "Free cancellation up to 7 days before departure. Cancellations 3–7 days before incur a 25% fee. Within 72 hours, bookings are non-refundable. Check each tour for its specific policy.",
    category: "booking",
    sort_order: 1,
  },
  {
    id: 2,
    question: "Are flights included in the tour price?",
    answer:
      "Most tours do not include international flights unless explicitly stated. Internal transfers, accommodation, guided activities, and some meals are typically included. Check the 'What's Included' section of each tour.",
    category: "general",
    sort_order: 2,
  },
  {
    id: 3,
    question: "How do I make a payment?",
    answer:
      "We accept all major credit/debit cards, bank transfers, and select digital wallets. A 30% deposit secures your booking; the balance is due 30 days before departure.",
    category: "payment",
    sort_order: 3,
  },
  {
    id: 4,
    question: "Can I customise a tour itinerary?",
    answer:
      "Absolutely! Use our AI assistant below or contact our team to discuss custom itineraries, private tours, and group packages. We love creating personalised experiences.",
    category: "general",
    sort_order: 4,
  },
  {
    id: 5,
    question: "Do I need travel insurance?",
    answer:
      "We strongly recommend comprehensive travel insurance covering medical emergencies, trip cancellation, and personal belongings. Some destinations require proof of insurance before departure.",
    category: "policies",
    sort_order: 5,
  },
  {
    id: 6,
    question: "What documents do I need for a tour?",
    answer:
      "A valid passport (6+ months validity), any required visas, travel insurance documents, and your booking confirmation. Specific requirements vary by destination — check your booking confirmation email.",
    category: "policies",
    sort_order: 6,
  },
  {
    id: 7,
    question: "How do I contact Tourvaa support?",
    answer:
      "You can reach us through the Contact page, by email, or via our AI chat assistant (bottom-right of every page). We respond to all queries within 24 hours.",
    category: "general",
    sort_order: 7,
  },
];

async function fetchFAQs(): Promise<FAQ[]> {
  try {
    const apiUrl = process.env.API_URL || "http://127.0.0.1:8000";
    const res = await fetch(`${apiUrl}/api/chatbot/faqs`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) return DEFAULT_FAQS;
    const data: FAQ[] = await res.json();
    return data.length > 0 ? data : DEFAULT_FAQS;
  } catch {
    return DEFAULT_FAQS;
  }
}

export default async function FAQPage() {
  const faqs = await fetchFAQs();
  return <FAQClient faqs={faqs} />;
}
