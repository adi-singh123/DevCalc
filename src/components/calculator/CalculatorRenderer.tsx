import AgeCalculator from "./renderers/AgeCalculator";
import BMICalculator from "./renderers/BMICalculator";
import PercentageCalculator from "./renderers/PercentageCalculator";
import DateCalculator from "./renderers/DateCalculator";
import GSTCalculator from "./renderers/GSTCalculator";
import EMICalculator from "./renderers/EMICalculator";
import MileageCalculator from "./renderers/MileageCalculator";
import SIPCalculator from "./renderers/SIPCalculator";
import FDCalculator from "./renderers/FDCalculator";
import SimpleInterestCalculator from "./renderers/SimpleInterestCalculator";
import DiscountCalculator from "./renderers/DiscountCalculator";
import FuelCostCalculator from "./renderers/FuelCostCalculator";
import GPACalculator from "./renderers/GPACalculator";
import UnitConverter from "./renderers/UnitConverter";
import HRACalculator from "./renderers/HRACalculator";
import IncomeTaxCalculator from "./renderers/IncomeTaxCalculator";

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

    case "sip-calculator":
      return <SIPCalculator />;
    case "fd-calculator":
      return <FDCalculator />;

    case "simple-interest-calculator":
      return <SimpleInterestCalculator />;

    case "discount-calculator":
      return <DiscountCalculator />;
    case "fuel-cost-calculator":
      return <FuelCostCalculator />;
    case "gpa-calculator":
      return <GPACalculator />;
    case "unit-converter":
      return <UnitConverter />;
    case "hra-calculator":
      return <HRACalculator />;
    case "income-tax-calculator":
      return <IncomeTaxCalculator/>

    default:
      return (
        <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
          Calculator Coming Soon
        </div>
      );
  }
}
