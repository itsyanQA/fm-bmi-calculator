import { HomePage } from "@pages/home-page";
import { Route, Routes } from "react-router-dom";

export function App() {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
    </Routes>
  );
}
