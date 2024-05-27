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
  // Convert height from cm to m
  const height = +metricParams.cm / 100;
  return (+metricParams.kg / (height * height)).toFixed(1);
}
