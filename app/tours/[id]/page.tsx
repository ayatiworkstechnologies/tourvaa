import { getTourById } from "@/lib/api";
import TourDetailsClient from "@/components/tours/TourDetailsClient";
import { notFound } from "next/navigation";

// Define the params interface for Next.js 15+ App Router
interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function TourDetailsPage({ params }: PageProps) {
  // Await the params in Next.js 15+ 
  const resolvedParams = await params;
  
  // Fetch the individual tour data
  const tour = await getTourById(resolvedParams.id);

  // If tour doesn't exist or isn't published, return a 404
  if (!tour) {
    notFound();
  }

  return <TourDetailsClient tour={tour} />;
}
