import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UserLogin from "./routes/userLogin";
import AdminDashboard from "./routes/adminDashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<UserLogin />} />
        <Route path="/" element={<AdminDashboard />} />

        {/* unmatched URLs fall back to the dashboard */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}