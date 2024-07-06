import "./bmi-limitation-second-row.scss";
import { BMI_LIMITATIONS, BmiLimitation } from "@features/bmi-limitations";

export function BmiLimitationSecondRow() {
  return (
    <div className="bmi-limitation-second-row">
      <BmiLimitation {...BMI_LIMITATIONS.age} />
      <BmiLimitation {...BMI_LIMITATIONS.muscle} />
    </div>
  );
}
