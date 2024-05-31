import { useSearchParams } from "react-router-dom";
import "./bmi-inputs.scss";
import { MeasuringUnit } from "src/types";
import { BmiInput } from "../bmi-input/bmi-input";
import { ChangeEvent } from "react";

export function BmiInputs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedUnit = (searchParams.get("unit") as MeasuringUnit) ?? "metric";

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const measurementType = e.target.getAttribute("data-measurement-type") as string;

    if (e.target.value) {
      setSearchParams(
        (prevParams) => {
          const prevParamsAsObj = Object.fromEntries(prevParams);
          return { ...prevParamsAsObj, [measurementType]: e.target.value };
        },
        { replace: true }
      );
    } else {
      if (measurementType) {
        setSearchParams(
          (prevParams) => {
            const prevParamsAsObj = Object.fromEntries(prevParams);
            delete prevParamsAsObj[measurementType];
            return prevParamsAsObj;
          },
          { replace: true }
        );
      }
    }
  };

  const MetricInputs = (
    <div className="bmi-inputs bmi--inputs--metric">
      <div className="bmi-inputs__label-and-input">
        <label htmlFor="Height">Height</label>
        <BmiInput measurement="Height" measurementShort="cm" value={searchParams.get("cm")} onChange={onChange} />
      </div>
      <div className="bmi-inputs__label-and-input">
        <label htmlFor="Weight">Weight</label>
        <BmiInput measurement="Weight" measurementShort="kg" value={searchParams.get("kg")} onChange={onChange} />
      </div>
    </div>
  );

  const ImperialInputs = (
    <div className="bmi-inputs bmi-inputs--imperial">
      <div className="bmi-inputs__label-and-input">
        <label htmlFor="Height">Height</label>
        <div className="bmi-inputs__double-input">
          <BmiInput measurement="Height" measurementShort="ft" value={searchParams.get("ft")} onChange={onChange} />
          <BmiInput measurement="Height" measurementShort="in" value={searchParams.get("in")} onChange={onChange} />
        </div>
      </div>

      <div className="bmi-inputs__label-and-input">
        <label htmlFor="Weight">Weight</label>
        <div className="bmi-inputs__double-input">
          <BmiInput measurement="Weight" measurementShort="st" value={searchParams.get("st")} onChange={onChange} />
          <BmiInput measurement="Weight" measurementShort="lbs" value={searchParams.get("lbs")} onChange={onChange} />
        </div>
      </div>
    </div>
  );

  const views: Record<MeasuringUnit, JSX.Element> = {
    metric: MetricInputs,
    imperial: ImperialInputs,
  };

  return views[selectedUnit];
}
