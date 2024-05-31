import "./bmi-form.scss";
import { BmiCheckboxes } from "../bmi-checkboxes/bmi-checkboxes";
import { BmiInputs } from "../bmi-inputs";
import { BmiResult } from "../bmi-result/bmi-result";

export function BmiForm() {
  return (
    <div className="bmi-form">
      <h2 className="bmi-form__title">Enter your details below</h2>
      <BmiCheckboxes />
      <BmiInputs />
      <BmiResult />
    </div>
  );
}
