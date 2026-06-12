import AgeCalculator from "./renderers/AgeCalculator";
import BMICalculator from "./renderers/BMICalculator";
import PercentageCalculator from "./renderers/PercentageCalculator";
import DateCalculator from "./renderers/DateCalculator";
import GSTCalculator from "./renderers/GSTCalculator";
import EMICalculator from "./renderers/EMICalculator";
import MileageCalculator from "./renderers/MileageCalculator";

type Props = {
  slug: string;
};

export default function CalculatorRenderer({ slug }: Props) {
  switch (slug) {
    case "age-calculator":
      return <AgeCalculator />;

    case "bmi-calculator":
      return <BMICalculator />;

    case "percentage-calculator":
      return <PercentageCalculator />;
    case "date-calculator":
      return <DateCalculator />;

    case "gst-calculator":
      return <GSTCalculator />;

    case "emi-calculator":
      return <EMICalculator />;
    case "mileage-calculator":
      return <MileageCalculator />;

    default:
      return (
        <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
          Calculator Coming Soon
        </div>
      );
  }
}
