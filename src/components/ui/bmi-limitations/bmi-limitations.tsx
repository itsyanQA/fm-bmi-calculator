import {
  BmiLimitationFirstRow,
  BmiLimitationSecondRow,
  BmiLimitationThirdRow,
} from "@features/bmi-limitations";
import "./bmi-limitations.scss";
import RightCurvedLine from "@assets/pattern-curved-line-right.svg?react";

export function BmiLimitations() {
  return (
    <div className="bmi-limitations">
      <BmiLimitationFirstRow />
      <BmiLimitationSecondRow />
      <BmiLimitationThirdRow />
      <RightCurvedLine />
    </div>
  );
}
