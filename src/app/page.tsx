import Hero from "@/components/home/Hero";
import SignatureDishes from "@/components/home/SignatureDishes";
import MenuPreview from "@/components/home/MenuPreview";
import OpeningHours from "@/components/home/OpeningHours";
import LocationSection from "@/components/home/LocationSection";
import ReservationCTA from "@/components/home/ReservationCTA";
import GallerySection from "@/components/home/GallerySection";

export default function Home() {
  return (
    <main>
      <Hero />
      <SignatureDishes />
      <MenuPreview />
      <OpeningHours />
      <LocationSection />
      <ReservationCTA />
      <GallerySection />
    </main>
  );
}