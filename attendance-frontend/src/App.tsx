import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./routes/LoginPage";
import AdminDashboardPage from "./routes/AdminDashboardPage";
import StudentDashboardPage from "./routes/StudentDashboardPage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/student-dashboard" element={<StudentDashboardPage />} />
        <Route path="/" element={<AdminDashboardPage />} />

        {/* unmatched URLs fall back to the dashboard */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}