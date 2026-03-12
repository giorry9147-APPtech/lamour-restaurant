import ReservationHero from "@/components/reservations/ReservationHero";
import ReservationOptions from "@/components/reservations/ReservationOptions";
import ReservationForm from "@/components/reservations/ReservationForm";

export default function ReservationsPage() {
  return (
    <main>
      <ReservationHero />
      <ReservationOptions />
      <ReservationForm />
    </main>
  );
}