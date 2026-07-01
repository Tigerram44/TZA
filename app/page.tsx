import Navbar from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";
import Features from "@/components/landing/features";
import HowItWorks from "@/components/landing/howitworks";
import Statistics from "@/components/landing/statistics";
import UpcomingEvents from "@/components/landing/upcomeve";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Statistics />
      <UpcomingEvents />
      <Footer />
    </>
  );
}