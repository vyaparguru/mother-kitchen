import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/Hero";
import PopularDishesSection from "@/components/PopularDishesSection";
import ReviewSection from "@/components/ReviewSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PopularDishesSection/>
      <ReviewSection/>
      <FeaturesSection/>
    </>
  );
}
