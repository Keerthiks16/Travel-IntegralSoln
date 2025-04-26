import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import BottomTabs from "./components/BottomTabs"; // Add this import
import Dashboard from "./pages/Dashboard";
import Onboarding from "./pages/OnBoarding";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/search" element={<Onboarding />} />
          {/* Add these new routes to match your tabs */}
          <Route path="/profile" element={<div>Profile Page</div>} />
          <Route path="/create" element={<div>Create Page</div>} />
          <Route path="/favorites" element={<div>Favourites Page</div>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        {/* Add the BottomTabs component */}
        <BottomTabs />
      </Router>
    </ThemeProvider>
  );
};

export default App;
