import Hero from "../components/home/Hero";
import PopularCalculators from "../components/home/PopularCalculators";
import CalculatorCategories from "../components/home/Categories";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <PopularCalculators />
      <CalculatorCategories />
    </main>
  );
}