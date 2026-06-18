import HomePage from "@/components/home/HomePage";
import { fetchTours } from "@/lib/api";

export default async function Home() {
  // Fetch up to 3 tours for the popular tours section on the landing page
  const popularTours = await fetchTours({ limit: "3" });

  return (
    <HomePage popularTours={popularTours} />
  );
}
