import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import PlanPage from "./plan";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/plan" element={<PlanPage />} />
      </Routes>
    </BrowserRouter>
  );
}
