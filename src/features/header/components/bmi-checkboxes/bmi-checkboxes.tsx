import { BmiCheckbox } from "../bmi-checkbox/bmi-checkbox";
import "./bmi-checkboxes.scss";

export function BmiCheckboxes() {
  return (
    <div className="bmi-checkboxes">
      <BmiCheckbox unit="metric" />
      <BmiCheckbox unit="imperial" />
    </div>
  );
}
