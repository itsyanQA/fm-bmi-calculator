import "./bmi-checkbox.scss";
import { MeasuringUnit } from "src/types";
import { useSearchParams } from "react-router-dom";

type BmiCheckboxProps = {
  unit: MeasuringUnit;
};

export function BmiCheckbox({ unit }: BmiCheckboxProps) {
  const [searchParams, setSearchParams] = useSearchParams({ unit: "metric" });
  const isSelectedUnit = unit === searchParams.get("unit");
  const onClick = () =>
    setSearchParams(
      (prevState) => ({
        ...prevState,
        unit,
      }),
      { replace: true }
    );

  return (
    <div className="bmi-checkbox" onClick={onClick}>
      <button className={`bmi-checkbox__button ${isSelectedUnit ? "bmi-checkbox__button--selected" : ""}`} onClick={onClick} />
      <span>{unit}</span>
    </div>
  );
}
