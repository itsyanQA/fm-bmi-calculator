import { WeightStatus } from "src/types";

export type ImperialCalculationParams = {
  ft: string;
  inches: string;
  st: string;
  lbs: string;
};

export type MetricCalculationParams = {
  kg: string;
  cm: string;
};

export function calculateBmiImperial(imperialParams: ImperialCalculationParams) {
  // Convert height to inches
  const heightInches = +imperialParams.ft * 12 + imperialParams.inches;
  // Convert height to meters
  const heightMeters = +heightInches * 0.0254;

  // Convert weight to pounds
  const weightPounds = +imperialParams.st * 14 + imperialParams.lbs;
  // Convert weight to kilograms
  const weightKilograms = +weightPounds * 0.453592;

  // Calculate BMI
  const bmi = weightKilograms / (heightMeters * heightMeters);
  return bmi.toFixed(1);
}

export function calculateBmiMetric(metricParams: MetricCalculationParams) {
  const height = +metricParams.cm / 100;
  return (+metricParams.kg / (height * height)).toFixed(1);
}

export function getBmiDescription(bmi: number) {
  const weightStatus = getWeightStatus(bmi);

  const bmiDescriptionPerWeightStatus: Record<WeightStatus, string> = {
    underweight: "Your bmi falls within the underweight range",
    "healthy-weight": "Your bmi falls within the healthy range",
    overweight: "Your bmi falls within the overweight range",
    obese: "Your bmi falls within the obese range",
  };

  return bmiDescriptionPerWeightStatus[weightStatus];
}

function getWeightStatus(bmi: number): WeightStatus {
  const isUnderweight = bmi < 18.5;
  const isOverweight = bmi >= 25 && bmi < 30;
  const isObese = bmi >= 30;

  if (isUnderweight) {
    return "underweight";
  } else if (isOverweight) {
    return "overweight";
  } else if (isObese) {
    return "obese";
  }

  return "healthy-weight";
}
