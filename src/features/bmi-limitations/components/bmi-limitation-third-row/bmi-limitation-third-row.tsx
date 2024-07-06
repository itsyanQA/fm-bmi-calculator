import "./bmi-limitation-third-row.scss";
import { BMI_LIMITATIONS, BmiLimitation } from "@features/bmi-limitations";

export function BmiLimitationThirdRow() {
  return (
    <div className="bmi-limitation-third-row">
      <BmiLimitation {...BMI_LIMITATIONS.pregnancy} />
      <BmiLimitation {...BMI_LIMITATIONS.race} />
    </div>
  );
}
