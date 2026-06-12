import AgeCalculator from "./renderers/AgeCalculator";
import BMICalculator from "./renderers/BMICalculator";

type Props = {
  slug: string;
};

export default function CalculatorRenderer({
  slug,
}: Props) {
  switch (slug) {
    case "age-calculator":
      return <AgeCalculator />;

    case "bmi-calculator":
      return <BMICalculator />;

    default:
      return (
        <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
          Calculator Coming Soon
        </div>
      );
  }
}