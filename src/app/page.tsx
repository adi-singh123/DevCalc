import Hero from "../components/home/Hero";
import PopularCalculators from "../components/home/PopularCalculators";
import CalculatorCategories from "../components/home/Categories";
import Container from "../components/layout/Container";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <section className="py-5">
        <Container>
          <PopularCalculators />
        </Container>
      </section>

      <CalculatorCategories />
    </main>
  );
}
