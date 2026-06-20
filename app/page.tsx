import React from "react";
import { HeroBanner } from "@/components/home/HeroBanner";
import { PopularDestinations } from "@/components/home/PopularDestinations";
import { FeaturedTours } from "@/components/home/FeaturedTours";
import { ToursOnDeals } from "@/components/home/ToursOnDeals";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CustomerReviews } from "@/components/home/CustomerReviews";
import { BlogPreview } from "@/components/home/BlogPreview";
import { PartnerCTAs } from "@/components/home/PartnerCTAs";
import { HelpCentrePreview } from "@/components/home/HelpCentrePreview";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroBanner />
      <WhyChooseUs />
      <PopularDestinations />
      <FeaturedTours />
      <ToursOnDeals />
      <CustomerReviews />
      <BlogPreview />
      <PartnerCTAs />
      <HelpCentrePreview />
    </div>
  );
}
