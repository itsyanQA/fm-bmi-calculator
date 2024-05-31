import { useSearchParams } from "react-router-dom";
import "./bmi-result.scss";
import { getUrlSearchParamsAsObject } from "@utils/common";
import { MeasuringUnit } from "src/types";
import { ImperialCalculationParams, MetricCalculationParams, calculateBmiImperial, calculateBmiMetric } from "@utils/bmi-calculation";

export function BmiResult() {
  const [searchParams] = useSearchParams();
  const { cm, kg, lbs, st, ft, in: inches } = getUrlSearchParamsAsObject(searchParams);
  const shouldCalculateUsingMetric = !!(cm && kg);
  const shouldCalculateUsingImperial = !!(lbs && st && ft && inches);
  const shouldDisplayBmiResult = shouldCalculateUsingMetric || shouldCalculateUsingImperial;
  const calculateFunction = shouldCalculateUsingMetric ? calculateBmiMetric : calculateBmiImperial;
  const calculateFunctionParams: MetricCalculationParams | ImperialCalculationParams = shouldCalculateUsingMetric
    ? { kg, cm }
    : { ft, inches, st, lbs };

  const PreCalculation = (
    <>
      <h3 className="bmi-result__pre-calculation-title">Welcome!</h3>
      <span className="bmi-result__pre-calculation-description">Enter your height and weight and you’ll see your BMI result here</span>
    </>
  );

  const PostCalculation = (
    <>
      <div className="bmi-result__post-calculation-result">
        <span className="bmi-result__post-calculation-title">Your BMI is...</span>
        <span className="bmi-result__post-calculation-bmi">{calculateFunction(calculateFunctionParams)}</span>
      </div>
    </>
  );

  return <div className="bmi-result">{shouldDisplayBmiResult ? PostCalculation : PreCalculation}</div>;
}
