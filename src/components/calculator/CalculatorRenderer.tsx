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
import AttendanceCalculator from "./renderers/AttendanceCalculator";
import BMRCalculator from "./renderers/BMRCalculator";
import CalorieCalculator from "./renderers/CalorieCalculator";
import BodyFatCalculator from "./renderers/BodyFatCalculator";
import CGPACalculator from "./renderers/CGPACalculator";
import CAGRCalculator from "./renderers/CAGRCalculator";
import CompoundInterestCalculator from "./renderers/CompoundInterestCalculator";
import AverageCalculator from "./renderers/AverageCalculator";
import ScientificCalculator from "./renderers/ScientificCalculator";
import PPFCalculator from "./renderers/PPFCalculator";
import InflationCalculator from "./renderers/InflationCalculator";
import SWPCalculator from "./renderers/SWPCalculator";
import RetirementCalculator from "./renderers/RetirementCalculator";
import FractionCalculator from "./renderers/FractionCalculator";
import MeanMedianModeCalculator from "./renderers/MeanMedianModeCalculator";
import RatioCalculator from "./renderers/RationCalculator";
import StandardDeviationCalculator from "./renderers/StandardDeviationCalculator";
import ProbabilityCalculator from "./renderers/ProbabilityCalculator";
import QuadraticEquationCalculator from "./renderers/QuadraticEquationCalculator";
import PermutationCombinationCalculator from "./renderers/Permutation&Combination";
import MatrixCalculator from "./renderers/MatrixClaculator";
import PercentageDifferenceCalculator from "./renderers/PercentageDifferenceCalculator";
import PasswordGenerator from "./renderers/PasswordGenerator";
import RandomNumberGenerator from "./renderers/RandomNumberGenerator";
import QRCodeGenerator from "./renderers/QRCodeGenerator";
import PrimeNumberCalculator from "./renderers/PrimeNumberCalculator";
import LCMCalculator from "./renderers/LCMCalculator";
import HCFCalculator from "./renderers/HCFCalculator";
import DistanceCalculator from "./renderers/DistanceCalculator";
import SlopeCalculator from "./renderers/SlopeCalculator";
import IdealBodyWeightCalculator from "./renderers/IdealBodyWeightCalculator";
import WaterIntakeCalculator from "./renderers/WaterIntakeCalculator";
import MacroCalculator from "./renderers/MacroCalculator";
import SleepCycleCalculator from "./renderers/SleepCycleCalculator";
import ProteinIntakeCalculator from "./renderers/ProteinIntakeCalculator";
import HeartRateZoneCalculator from "./renderers/HeartRateZoneCalculator";
import LeanBodyMassCalculator from "./renderers/LeanBodyMassCalculator";
import WaistToHipRatioCalculator from "./renderers/WaistToHipRatioCalculator";
import FinalGradeCalculator from "./renderers/FinalGradeCalculator";
import DueDateCalculator from "./renderers/DueDateCalculator";
import OvulationCalculator from "./renderers/OvulationCalculator";
import BSACalculator from "./renderers/BSACalculator";
import PregnancyWeightGainCalculator from "./renderers/PregnancyWeight";
import TimeDurationCalculator from "./renderers/TimeDurationCalculator";
import StudyHoursCalculator from "./renderers/StudyHourCalculator";
import MarksRequiredCalculator from "./renderers/MarksRequiredCalculator";
import ExamCountdownCalculator from "./renderers/ExamCountdown";
import BusinessDaysCalculator from "./renderers/BusinessDaysCalculator";
import SukanyaSamriddhiCalculator from "./renderers/SukanyaSamriddhiCalculator";
import NPSCalculator from "./renderers/NPSCalculator";
import GratuityCalculator from "./renderers/Gratuity";
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
      return <IncomeTaxCalculator />;
    case "attendance-calculator":
      return <AttendanceCalculator />;
    case "bmr-calculator":
      return <BMRCalculator />;
    case "calorie-calculator":
      return <CalorieCalculator />;
    case "body-fat-calculator":
      return <BodyFatCalculator />;
    case "cgpa-calculator":
      return <CGPACalculator />;
    case "cagr-calculator":
      return <CAGRCalculator />;
    case "compound-interest-calculator":
      return <CompoundInterestCalculator />;
    case "average-calculator":
      return <AverageCalculator />;
    case "scientific-calculator":
      return <ScientificCalculator />;
    case "ppf-calculator":
      return <PPFCalculator/>;
    case "inflation-calculator":
      return <InflationCalculator/>
    case "swp-calculator":
      return <SWPCalculator/>;
    case "retirement-calculator":
      return <RetirementCalculator/>;
    case "fraction-calculator":
      return <FractionCalculator/>;
    case "mean-median-mode-calculator":
      return <MeanMedianModeCalculator/>;
    case "ratio-calculator":
      return <RatioCalculator/>;
    case "standard-deviation-calculator":
      return <StandardDeviationCalculator/>;
    case "probability-calculator":
      return <ProbabilityCalculator/>;
    case "quadratic-equation-calculator":
      return <QuadraticEquationCalculator/>;
    case "permutation-combination-calculator":
      return <PermutationCombinationCalculator/>;
    case "matrix-calculator":
      return <MatrixCalculator/>
    case "percentage-difference-calculator":
      return <PercentageDifferenceCalculator/>;
    case "password-generator":
      return <PasswordGenerator/>;
    case "random-number-generator":
      return <RandomNumberGenerator/>;
    case "qr-code-generator":
      return <QRCodeGenerator/>;
    case  "prime-number-calculator":
      return <PrimeNumberCalculator/>;
    case  "lcm-calculator":
      return <LCMCalculator/>;
    case "hcf-calculator":
      return <HCFCalculator/>
    case "distance-calculator":
      return <DistanceCalculator/>;
    case "slope-calculator":
      return <SlopeCalculator/>
    case "ideal-body-weight-calculator":
      return <IdealBodyWeightCalculator/>;
    case "water-intake-calculator":
      return <WaterIntakeCalculator/>;
    case "macro-calculator":
      return <MacroCalculator/>
    case "sleep-cycle-calculator":
      return <SleepCycleCalculator/>;
    case "protein-intake-calculator":
      return <ProteinIntakeCalculator/>;
    case "heart-rate-zone-calculator":
      return <HeartRateZoneCalculator/>
    case "lean-body-mass-calculator":
      return <LeanBodyMassCalculator/>;
    case  "waist-to-hip-ratio-calculator":
      return <WaistToHipRatioCalculator/>;
    case "final-grade-calculator":
      return <FinalGradeCalculator/>;
    case "due-date-calculator":
      return <DueDateCalculator/>;
    case "ovulation-calculator":
      return <OvulationCalculator/>;
    case "bsa-calculator":
      return <BSACalculator/>;
    case "pregnancy-weight-gain-calculator":
      return <PregnancyWeightGainCalculator/>
    case "time-duration-calculator":
      return <TimeDurationCalculator/>;
    case "study-hours-calculator":
      return <StudyHoursCalculator/>
    case "marks-required-calculator":
      return <MarksRequiredCalculator/>;
    case "exam-countdown-calculator":
      return <ExamCountdownCalculator/>
    case "business-days-calculator":
      return <BusinessDaysCalculator/>;
    case "sukanya-samriddhi-calculator":
      return <SukanyaSamriddhiCalculator/>;
    case "nps-calculator":
      return <NPSCalculator/>;
    case  "gratuity-calculator":
      return <GratuityCalculator/>
    


    default:
      return (
        <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
          Calculator Coming Soon
        </div>
      );
  }
}
