import { BmiLimitation } from "@features/bmi-limitations";
import GenderIcon from "@assets/icon-gender.svg?react";
import "./bmi-limitation-first-row.scss";

export function BmiLimitationFirstRow() {
  return (
    <div className="bmi-limitation-first-row">
      <div className="bmi-limitation-first-row__text-container">
        <h2>Limitations of BMI</h2>
        <p className="bmi-limitation__description">
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </div>
      <BmiLimitation
        Icon={GenderIcon}
        title="gender"
        description="The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."
      />
    </div>
  );
}
