import { HeightMeasurements, WeightMeasurements } from "src/types";
import "./bmi-input.scss";
import { ChangeEvent } from "react";

type BmiInputProps = {
  value: string | null;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
} & ({ measurement: "Height"; measurementShort: HeightMeasurements } | { measurement: "Weight"; measurementShort: WeightMeasurements });

export function BmiInput({ value, onChange, measurement, measurementShort }: BmiInputProps) {
  return (
    <div className="bmi-input-container">
      <input
        value={value || ""}
        placeholder="0"
        type="text"
        pattern="\d*"
        maxLength={3}
        name={measurement}
        onChange={onChange}
        data-measurement-type={measurementShort}
      />
      <span>{measurementShort}</span>
    </div>
  );
}
