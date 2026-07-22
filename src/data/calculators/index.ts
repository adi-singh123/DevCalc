import { ageCalculator } from "./utility/age";
import { bmiCalculator } from "./health/bmi";
import { percentageCalculator } from "./math/percentage";
import { dateCalculator } from "./utility/date";
import { gstCalculator } from "./finance/gst";
import { emiCalculator } from "./finance/emi";
import { mileageCalculator } from "./vehical/mileage";
import { sipCalculator } from "./finance/sip";
import { fdCalculator } from "./finance/fd";
import { simpleInterestCalculator } from "./finance/simpleInterestCalculator";
import { discountCalculator } from "./math/discountCalculator";
import { fuelCostCalculator } from "./vehical/fuelCostCalculator";
import { gpaCalculator } from "./education/gpaCalculator";
import { unitConverter } from "./utility/unitconverter";
import { hraCalculator } from "./finance/hraCalculator";
import { incomeTaxCalculator } from "./finance/incomeTaxCalculator";
import { attendanceCalculator } from "./education/attendance";
import { bmrCalculator } from "./health/bmr";
import { calorieCalculator } from "./health/calorie";
import { bodyFatCalculator } from "./health/body-fat";
import { cgpaCalculator } from "./education/cgpa";
import { cagrCalculator } from "./finance/cagr";
import { compoundInterestCalculator } from "./finance/compound-interest";
import { averageCalculator } from "./education/average";
import { scientificCalculator } from "./education/scientific";
import { ppfCalculator } from "./finance/ppf";
import { inflationCalculator } from "./finance/inflation";
import { lumpsumCalculator } from "./finance/lumpsum";
import { swpCalculator } from "./finance/swp";
import { retirementCalculator } from "./finance/retirement";
import { fractionCalculator } from "./math/fraction";
import { meanMedianModeCalculator } from "./math/mean-median-mode";
import { ratioCalculator } from "./math/ratio";
import { standardDeviationCalculator } from "./math/standard-deviation";
import { probabilityCalculator } from "./math/probability";
import { quadraticEquationCalculator } from "./math/quadratic-equation";
import { permutationCombinationCalculator } from "./math/permutation&Combination";
import { matrixCalculator } from "./math/matrix";
import { percentageDifferenceCalculator } from "./math/percentage-difference";
import { passwordGenerator } from "./utility/password-generator";
import { randomNumberGenerator } from "./utility/random-number-generator";
import { qrCodeGenerator } from "./utility/qr-code-generator";
import { primeNumberCalculator } from "./math/prime-number";
import { lcmCalculator } from "./math/lcm";
import { distanceCalculator } from "./math/distance";
import { slopeCalculator } from "./math/slope";
import { idealBodyWeightCalculator } from "./health/ideal-body-weight";
import { waterIntakeCalculator } from "./health/water-intake";
import { macroCalculator } from "./health/macro-calculator";
import { sleepCycleCalculator } from "./health/sleep-cycle";
import { proteinIntakeCalculator } from "./health/protein-intake";
import { heartRateZoneCalculator } from "./health/heart-rate-zone";
import { leanBodyMassCalculator } from "./health/lean-body-mass";
import { waistToHipRatioCalculator } from "./health/waist-to-hip-ratio";
import { condomSizeCalculator } from "./fun/condomSizeCalculator";
import { finalGradeCalculator } from "./education/final-grade";
import { dueDateCalculator } from "./health/dueDateCalculator";
import { ovulationCalculator } from "./health/ovulationCalculator";
import { bsaCalculator } from "./health/bsaCalculator";
import { pregnancyWeightGainCalculator } from "./health/pregnancyWeightGainCalculator";
import { timeDurationCalculator } from "./utility/timeDurationCalculator";
import { studyHoursCalculator } from "./education/studyHoursCalculator";
import { marksRequiredCalculator } from "./education/marksRequiredCalculator";
import { examCountdownCalculator } from "./education/examCountdownCalculator";
import { businessDaysCalculator } from "./utility/businessDaysCalculator";
import { sukanyaSamriddhiCalculator } from "./finance/sukanyaSamriddhiCalculator";
import { npsCalculator } from "./finance/npsCalculator";
import { gratuityCalculator } from "./finance/gratuityCalculator";
import { loveCalculator } from "./fun/loveCalculator";
import { friendshipCalculator } from "./fun/friendshipCalculator";
import { crushCalculator } from "./fun/crush";
import { luckyNumberCalculator } from "./fun/lucky";
import { safePeriodCalculator } from "./fun/safePeriodCalculator";
import { houseConstructionCostCalculator } from "./construction/houseConstructionCost";
import { brickCalculator } from "./construction/brickCalculator";
import { cementCalculator } from "./construction/cementCalculator";
import { concreteCalculator } from "./construction/concreteCalculator";
import { jsonFormatter } from "./developer/jsonFormatter";
import { uuidGenerator } from "./developer/uuid-generator";
import { base64EncoderDecoder } from "./developer/base64-encoder-decoder";
import { urlEncoderDecoder } from "./developer/url-encoder-decoder";
import { jwtDecoder } from "./developer/jwt-decoder";
import { hashGenerator } from "./developer/hash-generator";
import { unixTimestampConverter } from "./developer/unix-timestamp-converter";
import { regexTester } from "./developer/regex-tester";
import { goldMakingChargesCalculator } from "./other/goldMakingChargesCalculato";
import { goldPriceCalculator } from "./other/goldPriceCalculator";
import { silverPriceCalculator } from "./other/silverPriceCalculator";
import { goldGstCalculator } from "./other/goldGstCalculator";
import { weddingBudgetCalculator } from "./other/weddingBudgetCalculator";
import { partyBudgetCalculator } from "./other/partyBudgetCalculator";
import { eventCostCalculator } from "./other/eventCostCalculator";
import { travelCostCalculator } from "./other/travelCostCalculator";
import {tileCalculator } from "./construction/tileCalculator";
import { zodiacCompatibilityCalculator } from "./fun/zodiacCompatibilityCalculator";
import { kundliMilanCalculator } from "./fun/Kundli";
import { braSizeCalculator } from "./fun/braCalculator";
import { rebarCuttingLengthCalculator } from "./construction/rebarcuttinglengthcalculator";
import { fertilizerRequirementCalculator } from "./other/fertilizerRequirementCalculator";
import { roadTaxCalculator } from "./vehical/roadTaxCalculator";
import { armyCalculator } from "./other/army";
import { evVsPetrolCalculator } from "./vehical/ev-vs-petrol";
import { netWorthCalculator } from "./other/netWorthCalculator";
import { rvSolarCalculator } from "./other/rvSolarCalculator";
import { flatBuyCalculator } from "./construction/flat";
import { chickenCoopCalculator } from "./other/chickenCoop";
import { paintCalculator } from "./construction/paint";

export const calculators = [
  ageCalculator,
  bmiCalculator,
  percentageCalculator,
  dateCalculator,
  gstCalculator,
  emiCalculator,
  mileageCalculator,
  sipCalculator,
  fdCalculator,
  simpleInterestCalculator,
  discountCalculator,
  fuelCostCalculator,
  gpaCalculator,
  unitConverter,
  hraCalculator,
  incomeTaxCalculator,
  attendanceCalculator,
  bmrCalculator,
  calorieCalculator,
  bodyFatCalculator,
  condomSizeCalculator,
  cgpaCalculator,
  cagrCalculator,
  compoundInterestCalculator,
  averageCalculator,
  scientificCalculator,
  ppfCalculator,
  inflationCalculator,
  lumpsumCalculator,
  swpCalculator,
  retirementCalculator,
  fractionCalculator,
  meanMedianModeCalculator,
  ratioCalculator,
  standardDeviationCalculator,
  probabilityCalculator,
  quadraticEquationCalculator,
  permutationCombinationCalculator,
  matrixCalculator,
  percentageDifferenceCalculator,
  passwordGenerator,
  randomNumberGenerator,
  qrCodeGenerator,
  primeNumberCalculator,
  lcmCalculator,
  distanceCalculator,
  slopeCalculator,
  idealBodyWeightCalculator,
  waterIntakeCalculator,
  macroCalculator,
  sleepCycleCalculator,
  proteinIntakeCalculator,
  heartRateZoneCalculator,
  leanBodyMassCalculator,
  waistToHipRatioCalculator,
  finalGradeCalculator,
  dueDateCalculator,
  ovulationCalculator,
  bsaCalculator,
  pregnancyWeightGainCalculator,
  timeDurationCalculator,
  studyHoursCalculator,
  marksRequiredCalculator,
  examCountdownCalculator,
  businessDaysCalculator,
  sukanyaSamriddhiCalculator,
  npsCalculator,
  gratuityCalculator,
  loveCalculator,
  friendshipCalculator,
  crushCalculator,
  luckyNumberCalculator,
  safePeriodCalculator,
  houseConstructionCostCalculator,
  brickCalculator,
  cementCalculator,
  concreteCalculator,
  jsonFormatter,
  uuidGenerator,
  base64EncoderDecoder,
  urlEncoderDecoder,
  jwtDecoder,
  hashGenerator,
  unixTimestampConverter,
  regexTester,
  goldMakingChargesCalculator,
  goldPriceCalculator,
  silverPriceCalculator,
  goldGstCalculator,
  weddingBudgetCalculator,
  partyBudgetCalculator,
  eventCostCalculator,
  travelCostCalculator,
  tileCalculator,
  zodiacCompatibilityCalculator,
  kundliMilanCalculator,
  braSizeCalculator,
  rebarCuttingLengthCalculator,
  fertilizerRequirementCalculator,
  roadTaxCalculator,
  armyCalculator,
  evVsPetrolCalculator,
  netWorthCalculator,
  rvSolarCalculator,
  flatBuyCalculator,
  chickenCoopCalculator,
  paintCalculator,
];
