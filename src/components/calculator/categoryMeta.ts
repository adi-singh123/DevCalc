import {
  Calculator,
  Calendar,
  CalendarDays,
  CalendarClock,
  Ruler,
  KeyRound,
  Dices,
  QrCode,
  Percent,
  Wallet,
  PiggyBank,
  TrendingUp,
  Landmark,
  Receipt,
  HeartPulse,
  Activity,
  Scale,
  Baby,
  Car,
  Fuel,
  GraduationCap,
  BookOpen,
  Sigma,
  Grid3x3,
  Hammer,
  Building2,
  Code2,
  Braces,
  Hash,
  Gift,
  Heart,
  type LucideIcon,
} from "lucide-react";

// Per-calculator icon overrides (line icons read as more classic than emoji).
const SLUG_ICONS: Record<string, LucideIcon> = {
  "age-calculator": Calendar,
  "date-calculator": CalendarDays,
  "time-duration-calculator": CalendarClock,
  "unit-converter": Ruler,
  "password-generator": KeyRound,
  "random-number-generator": Dices,
  "qr-code-generator": QrCode,
  "percentage-calculator": Percent,
  "emi-calculator": Landmark,
  "sip-calculator": TrendingUp,
  "fd-calculator": PiggyBank,
  "gst-calculator": Receipt,
  "income-tax-calculator": Receipt,
  "bmi-calculator": Scale,
  "bmr-calculator": Activity,
  "calorie-calculator": HeartPulse,
  "due-date-calculator": Baby,
  "mileage-calculator": Car,
  "fuel-cost-calculator": Fuel,
  "gpa-calculator": GraduationCap,
  "cgpa-calculator": GraduationCap,
  "json-formatter": Braces,
  "hash-generator": Hash,
  "matrix-calculator": Grid3x3,
  "love-calculator": Heart,
};

// Category fallback icons.
const CATEGORY_ICONS: Record<string, LucideIcon> = {
  finance: Wallet,
  health: HeartPulse,
  vehicle: Car,
  math: Sigma,
  utility: Calculator,
  education: BookOpen,
  fun: Gift,
  construction: Hammer,
  "developer tools": Code2,
  developertool: Code2,
  other: Building2,
};

export function getCalcIcon(slug: string, category: string): LucideIcon {
  return (
    SLUG_ICONS[slug] ??
    CATEGORY_ICONS[category?.toLowerCase()] ??
    Calculator
  );
}

// Icon for a category tile (keyed by category slug or name).
export function getCategoryIcon(key: string): LucideIcon {
  return CATEGORY_ICONS[key?.toLowerCase()] ?? Calculator;
}
