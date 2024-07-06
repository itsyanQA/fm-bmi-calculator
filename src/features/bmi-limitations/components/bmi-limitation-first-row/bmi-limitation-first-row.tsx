import { BmiLimitation, BMI_LIMITATIONS, BmiLimitationText } from "@features/bmi-limitations";
import "./bmi-limitation-first-row.scss";

export function BmiLimitationFirstRow() {
  return (
    <div className="bmi-limitation-first-row">
      <BmiLimitationText />
      <BmiLimitation {...BMI_LIMITATIONS.gender} />
    </div>
  );
}
