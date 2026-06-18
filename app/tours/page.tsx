import ToursClient from "@/components/tours/ToursClient";
import { fetchTours } from "@/lib/api";

export default async function ToursListingPage() {
  // Fetch all published tours from the backend
  const allTours = await fetchTours({ limit: "50" });

  return (
    <ToursClient initialTours={allTours} />
  );
}
