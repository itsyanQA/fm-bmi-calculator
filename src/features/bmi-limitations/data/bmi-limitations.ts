import { Limitation } from "src/types";
import { BmiLimitationProps } from "../components/bmi-limitation/bmi-limitation";
import GenderIcon from "@assets/icon-gender.svg?react";
import AgeIcon from "@assets/icon-age.svg?react";
import MuscleIcon from "@assets/icon-muscle.svg?react";
import RaceIcon from "@assets/icon-race.svg?react";
import PregnancyIcon from "@assets/icon-pregnancy.svg?react";

export const BMI_LIMITATIONS: Record<Limitation, BmiLimitationProps> = {
  gender: {
    Icon: GenderIcon,
    title: "Gender",
    description:
      "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
  },
  age: {
    Icon: AgeIcon,
    title: "Age",
    description: "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.",
  },
  muscle: {
    Icon: MuscleIcon,
    title: "Muscle",
    description: "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.",
  },
  pregnancy: {
    Icon: PregnancyIcon,
    title: "Pregnancy",
    description:
      "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.",
  },
  race: {
    Icon: RaceIcon,
    title: "Race",
    description:
      "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.",
  },
};
