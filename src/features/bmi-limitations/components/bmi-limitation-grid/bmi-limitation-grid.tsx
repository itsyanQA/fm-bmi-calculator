import { BMI_LIMITATIONS, BmiLimitation } from "@features/bmi-limitations";
import { Limitation } from "src/types";
import "./bmi-limitation-grid.scss";

export function BmiLimitationGrid() {
  return (
    <div className="bmi-limitation-grid">
      {Object.keys(BMI_LIMITATIONS).map((limitation) => (
        <BmiLimitation {...BMI_LIMITATIONS[limitation as Limitation]} />
      ))}
    </div>
  );
}
