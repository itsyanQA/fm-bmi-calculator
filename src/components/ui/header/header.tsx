import "./header.scss";
import { BmiIntroduction, BmiForm } from "@features/header";
import Logo from "@assets/logo.svg?react";

export function Header() {
  return (
    <header>
      <div>
        <Logo />
      </div>
      <div className="intro-and-form">
        <BmiIntroduction />
        <BmiForm />
      </div>
    </header>
  );
}
