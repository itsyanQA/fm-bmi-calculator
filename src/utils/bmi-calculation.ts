export function calculateBmiImperial(feet: number, inches: number, stones: number, pounds: number) {
  // Convert height to inches
  const heightInches = feet * 12 + inches;
  // Convert height to meters
  const heightMeters = heightInches * 0.0254;

  // Convert weight to pounds
  const weightPounds = stones * 14 + pounds;
  // Convert weight to kilograms
  const weightKilograms = weightPounds * 0.453592;

  // Calculate BMI
  const bmi = weightKilograms / (heightMeters * heightMeters);
  return bmi;
}

export function calculateBmiMetric(weight: number, heightCm: number) {
  // Convert height from cm to m
  const height = heightCm / 100;
  return weight / (height * height);
}
