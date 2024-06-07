import "./bmi-result-meaning.scss";
import LeftCurvedLine from "@assets/pattern-curved-line-left.svg?react";

export function BmiResultMeaning() {
  return (
    <div className="bmi-result-meaning">
      <img src="/assets/dude-eating.png" alt="a dude eating sushi" />
      <div className="bmi-result-meaning__text-container">
        <h2>What your BMI result means</h2>
        <p>
          A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
          Maintaining a healthy weight may lower your chances of experiencing
          health issues later on, such as obesity and type 2 diabetes. Aim for a
          nutritious diet with reduced fat and sugar content, incorporating
          ample fruits and vegetables. Additionally, strive for regular physical
          activity, ideally about 30 minutes daily for five days a week.
        </p>
      </div>
      <LeftCurvedLine />
    </div>
  );
}
