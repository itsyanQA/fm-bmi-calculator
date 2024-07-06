import "./bmi-limitations.scss";
import {
  BmiLimitationFirstRow,
  BmiLimitationSecondRow,
  BmiLimitationThirdRow,
  BmiLimitationGrid,
  BmiLimitationText,
} from "@features/bmi-limitations";
import RightCurvedLine from "@assets/pattern-curved-line-right.svg?react";

export function BmiLimitations() {
  return (
    <div className="bmi-limitations">
      <RightCurvedLine className="bmi-limitations__curved-line" />

      {/* Desktop rows */}
      <div className="bmi-limitations__desktop-rows">
        <BmiLimitationFirstRow />
        <BmiLimitationSecondRow />
        <BmiLimitationThirdRow />
      </div>

      {/* Tablet & Mobile rows */}
      <div className="bmi-limitations__non-desktop-rows">
        <BmiLimitationText />
        <BmiLimitationGrid />
      </div>
    </div>
  );
}
