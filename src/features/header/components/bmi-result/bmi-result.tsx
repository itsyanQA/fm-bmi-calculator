import "./bmi-result.scss";
import { useSearchParams } from "react-router-dom";
import { getUrlSearchParamsAsObject } from "@utils/common";
import { calculateBmiImperial, calculateBmiMetric } from "@utils/bmi-calculation";

export function BmiResult() {
  const [searchParams] = useSearchParams();
  const { cm, kg, lbs, st, ft, in: inches } = getUrlSearchParamsAsObject(searchParams);
  const shouldCalculateUsingMetric = !!(cm && kg);
  const shouldCalculateUsingImperial = !!(lbs && st && ft && inches);
  const shouldDisplayBmiResult = shouldCalculateUsingMetric || shouldCalculateUsingImperial;

  const getBmi = () => {
    return shouldCalculateUsingMetric ? calculateBmiMetric({ kg, cm }) : calculateBmiImperial({ ft, inches, st, lbs });
  };

  const PreCalculation = (
    <>
      <h3 className="bmi-result__pre-calculation-title">Welcome!</h3>
      <span className="bmi-result__pre-calculation-description">Enter your height and weight and you’ll see your BMI result here</span>
    </>
  );

  const PostCalculation = (
    <>
      <div className="bmi-result__post-calculation-result">
        <div className="bmi-result__post-calculation-title-and-bmi">
          <span className="bmi-result__post-calculation-title">Your BMI is...</span>
          <span className="bmi-result__post-calculation-bmi">{getBmi()}</span>
        </div>
        <span className="bmi-result__post-calculation-description"></span>
      </div>
    </>
  );

  return <div className="bmi-result">{shouldDisplayBmiResult ? PostCalculation : PreCalculation}</div>;
}
