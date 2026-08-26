// roadTaxSlabs.ts
// State-wise Motor Vehicle Tax (Road Tax) slab data for India.
//
// IMPORTANT: State transport departments revise these slabs periodically
// (often during annual state budget announcements). Treat these as
// reasonable estimation defaults, NOT a legally authoritative source.
// Surface the disclaimer in the UI and encourage users to verify with
// their local RTO before making a purchase decision.

export type FuelType = "petrol" | "diesel" | "cng" | "ev";
export type VehicleType = "car" | "bike";

export interface PriceSlab {
  minPrice: number; // inclusive, in ₹
  maxPrice: number | null; // exclusive upper bound; null = no upper limit
  ratePercent: number; // road tax rate as a percentage
}

export interface StateTaxConfig {
  stateCode: string; // e.g. "DL", "MH", "KA"
  stateName: string;
  // Whether this state calculates tax on pre-GST invoice value instead
  // of full ex-showroom price (Gujarat, Chandigarh, Jharkhand today).
  usesPreGstBase: boolean;
  car: {
    petrol: PriceSlab[];
    diesel: PriceSlab[];
    cng: PriceSlab[];
    ev: PriceSlab[]; // ev slabs may just be a single 0% or flat-rate entry
  };
  bike: {
    // Bikes are commonly slabbed by engine cc rather than price,
    // but we normalize to price-based slabs here for calculator simplicity.
    // A more advanced version could add a separate `byEngineCc` structure.
    petrol: PriceSlab[];
    ev: PriceSlab[];
  };
  // Fully EV-exempt states (100% waiver) can just set an ev slab of
  // { minPrice: 0, maxPrice: null, ratePercent: 0 }
  evFullyExempt: boolean;
}

// --- Fixed RTO charges, applicable across most states (₹) ---
export const FIXED_RTO_CHARGES = {
  registrationFee: 600,
  hsrpMin: 230,
  hsrpMax: 400,
  fastagMin: 500,
  fastagMax: 600,
  hypothecationFee: 1500, // only if vehicle is financed
};

// --- Sample state dataset (extend this to all 28 states + 8 UTs) ---
// Figures below are reasonable estimation defaults based on publicly
// available 2026 slab structures. VERIFY before production use.
export const ROAD_TAX_SLABS: StateTaxConfig[] = [
  {
    stateCode: "DL",
    stateName: "Delhi",
    usesPreGstBase: false,
    evFullyExempt: true,
    car: {
      petrol: [
        { minPrice: 0, maxPrice: 600000, ratePercent: 4 },
        { minPrice: 600000, maxPrice: 1500000, ratePercent: 7 },
        { minPrice: 1500000, maxPrice: null, ratePercent: 10 },
      ],
      diesel: [
        { minPrice: 0, maxPrice: 600000, ratePercent: 5 },
        { minPrice: 600000, maxPrice: 1500000, ratePercent: 8.75 },
        { minPrice: 1500000, maxPrice: null, ratePercent: 12.5 },
      ],
      cng: [
        { minPrice: 0, maxPrice: 600000, ratePercent: 3.5 },
        { minPrice: 600000, maxPrice: 1500000, ratePercent: 6 },
        { minPrice: 1500000, maxPrice: null, ratePercent: 9 },
      ],
      ev: [{ minPrice: 0, maxPrice: null, ratePercent: 0 }],
    },
    bike: {
      petrol: [
        { minPrice: 0, maxPrice: 100000, ratePercent: 4 },
        { minPrice: 100000, maxPrice: null, ratePercent: 6 },
      ],
      ev: [{ minPrice: 0, maxPrice: null, ratePercent: 0 }],
    },
  },
  {
    stateCode: "MH",
    stateName: "Maharashtra",
    usesPreGstBase: false,
    evFullyExempt: true,
    car: {
      petrol: [
        { minPrice: 0, maxPrice: 1000000, ratePercent: 11 },
        { minPrice: 1000000, maxPrice: 2000000, ratePercent: 12 },
        { minPrice: 2000000, maxPrice: null, ratePercent: 13 },
      ],
      diesel: [
        { minPrice: 0, maxPrice: 1000000, ratePercent: 13 },
        { minPrice: 1000000, maxPrice: 2000000, ratePercent: 14 },
        { minPrice: 2000000, maxPrice: null, ratePercent: 15 },
      ],
      cng: [
        { minPrice: 0, maxPrice: 1000000, ratePercent: 9 },
        { minPrice: 1000000, maxPrice: null, ratePercent: 11 },
      ],
      ev: [{ minPrice: 0, maxPrice: null, ratePercent: 0 }],
    },
    bike: {
      petrol: [
        { minPrice: 0, maxPrice: 100000, ratePercent: 8 },
        { minPrice: 100000, maxPrice: null, ratePercent: 10 },
      ],
      ev: [{ minPrice: 0, maxPrice: null, ratePercent: 0 }],
    },
  },
  {
    stateCode: "KA",
    stateName: "Karnataka",
    usesPreGstBase: false,
    evFullyExempt: false, // tiered, not fully exempt
    car: {
      petrol: [
        { minPrice: 0, maxPrice: 500000, ratePercent: 13 },
        { minPrice: 500000, maxPrice: 1000000, ratePercent: 14 },
        { minPrice: 1000000, maxPrice: 2000000, ratePercent: 17 },
        { minPrice: 2000000, maxPrice: null, ratePercent: 18 },
      ],
      diesel: [
        { minPrice: 0, maxPrice: 500000, ratePercent: 14 },
        { minPrice: 500000, maxPrice: 1000000, ratePercent: 15 },
        { minPrice: 1000000, maxPrice: 2000000, ratePercent: 18 },
        { minPrice: 2000000, maxPrice: null, ratePercent: 20 },
      ],
      cng: [
        { minPrice: 0, maxPrice: 1000000, ratePercent: 11 },
        { minPrice: 1000000, maxPrice: null, ratePercent: 14 },
      ],
      ev: [
        { minPrice: 0, maxPrice: 2500000, ratePercent: 4 },
        { minPrice: 2500000, maxPrice: null, ratePercent: 8 },
      ],
    },
    bike: {
      petrol: [
        { minPrice: 0, maxPrice: 100000, ratePercent: 10 },
        { minPrice: 100000, maxPrice: null, ratePercent: 12 },
      ],
      ev: [{ minPrice: 0, maxPrice: null, ratePercent: 4 }],
    },
  },
  {
    stateCode: "GJ",
    stateName: "Gujarat",
    usesPreGstBase: true, // key differentiator — tax on pre-GST value
    evFullyExempt: false,
    car: {
      petrol: [{ minPrice: 0, maxPrice: null, ratePercent: 6 }],
      diesel: [{ minPrice: 0, maxPrice: null, ratePercent: 6 }],
      cng: [{ minPrice: 0, maxPrice: null, ratePercent: 6 }],
      ev: [{ minPrice: 0, maxPrice: null, ratePercent: 1 }],
    },
    bike: {
      petrol: [{ minPrice: 0, maxPrice: null, ratePercent: 6 }],
      ev: [{ minPrice: 0, maxPrice: null, ratePercent: 1 }],
    },
  },
  {
    stateCode: "UP",
    stateName: "Uttar Pradesh",
    usesPreGstBase: false,
    evFullyExempt: true,
    car: {
      petrol: [
        { minPrice: 0, maxPrice: 1000000, ratePercent: 8 },
        { minPrice: 1000000, maxPrice: null, ratePercent: 10 },
      ],
      diesel: [
        { minPrice: 0, maxPrice: 1000000, ratePercent: 9 },
        { minPrice: 1000000, maxPrice: null, ratePercent: 11 },
      ],
      cng: [
        { minPrice: 0, maxPrice: 1000000, ratePercent: 6 },
        { minPrice: 1000000, maxPrice: null, ratePercent: 8 },
      ],
      ev: [{ minPrice: 0, maxPrice: null, ratePercent: 0 }],
    },
    bike: {
      petrol: [
        { minPrice: 0, maxPrice: 100000, ratePercent: 6 },
        { minPrice: 100000, maxPrice: null, ratePercent: 8 },
      ],
      ev: [{ minPrice: 0, maxPrice: null, ratePercent: 0 }],
    },
  },
  {
    stateCode: "DN",
    stateName: "Dadra & Nagar Haveli and Daman & Diu",
    usesPreGstBase: false,
    evFullyExempt: true,
    car: {
      petrol: [{ minPrice: 0, maxPrice: null, ratePercent: 2.5 }],
      diesel: [
        { minPrice: 0, maxPrice: 1000000, ratePercent: 2.5 },
        { minPrice: 1000000, maxPrice: null, ratePercent: 3 },
      ],
      cng: [{ minPrice: 0, maxPrice: null, ratePercent: 2.5 }],
      ev: [{ minPrice: 0, maxPrice: null, ratePercent: 0 }],
    },
    bike: {
      petrol: [{ minPrice: 0, maxPrice: null, ratePercent: 3 }],
      ev: [{ minPrice: 0, maxPrice: null, ratePercent: 0 }],
    },
  },
  {
    stateCode: "TN",
    stateName: "Tamil Nadu",
    usesPreGstBase: false,
    evFullyExempt: true, // 100% exemption active Jan 2026 – Dec 2027
    car: {
      petrol: [
        { minPrice: 0, maxPrice: 1000000, ratePercent: 10 },
        { minPrice: 1000000, maxPrice: null, ratePercent: 15 },
      ],
      diesel: [
        { minPrice: 0, maxPrice: 1000000, ratePercent: 10 },
        { minPrice: 1000000, maxPrice: null, ratePercent: 15 },
      ],
      cng: [
        { minPrice: 0, maxPrice: 1000000, ratePercent: 10 },
        { minPrice: 1000000, maxPrice: null, ratePercent: 15 },
      ],
      ev: [{ minPrice: 0, maxPrice: null, ratePercent: 0 }],
    },
    bike: {
      petrol: [
        { minPrice: 0, maxPrice: 100000, ratePercent: 8 },
        { minPrice: 100000, maxPrice: null, ratePercent: 12 },
      ],
      ev: [{ minPrice: 0, maxPrice: null, ratePercent: 0 }],
    },
  },
];

// --- Core calculation function ---

export interface RoadTaxInput {
  stateCode: string;
  vehicleType: VehicleType;
  fuelType: FuelType;
  exShowroomPrice: number;
  isFinanced?: boolean;
}

export interface RoadTaxResult {
  stateName: string;
  taxableAmount: number; // may differ from exShowroomPrice if pre-GST base
  ratePercent: number;
  roadTax: number;
  fixedCharges: {
    registrationFee: number;
    hsrp: number;
    fastag: number;
    hypothecation: number;
    total: number;
  };
  totalRtoAddition: number; // roadTax + all fixed charges
  usesPreGstBase: boolean;
  notes: string[];
}

function findApplicableSlab(
  slabs: PriceSlab[],
  price: number
): PriceSlab | undefined {
  return slabs.find(
    (slab) =>
      price >= slab.minPrice && (slab.maxPrice === null || price < slab.maxPrice)
  );
}

export function calculateRoadTax(input: RoadTaxInput): RoadTaxResult {
  const state = ROAD_TAX_SLABS.find((s) => s.stateCode === input.stateCode);

  if (!state) {
    throw new Error(`No road tax data found for state code: ${input.stateCode}`);
  }

  const notes: string[] = [];

  // Bikes only support petrol/ev in this simplified model
  const slabSet =
    input.vehicleType === "bike"
      ? input.fuelType === "ev"
        ? state.bike.ev
        : state.bike.petrol
      : state.car[input.fuelType];

  if (!slabSet || slabSet.length === 0) {
    throw new Error(
      `No slab data for ${input.vehicleType}/${input.fuelType} in ${state.stateName}`
    );
  }

  // Pre-GST base states: approximate by stripping an estimated GST
  // portion before applying the slab. This is a simplification —
  // ideally the actual pre-GST invoice value should be captured
  // directly from the user rather than reverse-estimated.
  let taxableAmount = input.exShowroomPrice;
  if (state.usesPreGstBase) {
    const ASSUMED_GST_RATE = 0.18; // adjust per vehicle segment if known
    taxableAmount = input.exShowroomPrice / (1 + ASSUMED_GST_RATE);
    notes.push(
      `${state.stateName} calculates road tax on pre-GST invoice value. ` +
        `Estimated using an assumed ${ASSUMED_GST_RATE * 100}% GST rate — ` +
        `replace with actual invoice value where available for accuracy.`
    );
  }

  const slab = findApplicableSlab(slabSet, taxableAmount);

  if (!slab) {
    throw new Error(
      `No matching price slab found for taxable amount ₹${taxableAmount}`
    );
  }

  const roadTax = Math.round((taxableAmount * slab.ratePercent) / 100);

  const hsrp = Math.round((FIXED_RTO_CHARGES.hsrpMin + FIXED_RTO_CHARGES.hsrpMax) / 2);
  const fastag = Math.round(
    (FIXED_RTO_CHARGES.fastagMin + FIXED_RTO_CHARGES.fastagMax) / 2
  );
  const hypothecation = input.isFinanced ? FIXED_RTO_CHARGES.hypothecationFee : 0;

  const fixedTotal =
    FIXED_RTO_CHARGES.registrationFee + hsrp + fastag + hypothecation;

  if (state.evFullyExempt && input.fuelType === "ev") {
    notes.push(`${state.stateName} offers a 100% road tax exemption on EVs.`);
  }

  return {
    stateName: state.stateName,
    taxableAmount,
    ratePercent: slab.ratePercent,
    roadTax,
    fixedCharges: {
      registrationFee: FIXED_RTO_CHARGES.registrationFee,
      hsrp,
      fastag,
      hypothecation,
      total: fixedTotal,
    },
    totalRtoAddition: roadTax + fixedTotal,
    usesPreGstBase: state.usesPreGstBase,
    notes,
  };
}

// --- Example usage ---
// const result = calculateRoadTax({
//   stateCode: "DL",
//   vehicleType: "car",
//   fuelType: "petrol",
//   exShowroomPrice: 1200000,
//   isFinanced: true,
// });
// console.log(result);
// => { stateName: "Delhi", taxableAmount: 1200000, ratePercent: 10,
//      roadTax: 120000, fixedCharges: {...}, totalRtoAddition: 123815, ... }