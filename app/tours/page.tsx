import { Suspense } from "react";
import ToursClient from "@/components/tours/ToursClient";
import { fetchTours } from "@/lib/api";

export default async function ToursListingPage() {
  const allTours = await fetchTours({ limit: "50" });

  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 dark:bg-[#0B1120]" />}>
      <ToursClient initialTours={allTours} />
    </Suspense>
  );
}
