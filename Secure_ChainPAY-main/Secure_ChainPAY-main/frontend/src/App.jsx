import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Analyze from "./pages/Analyze";
import History from "./pages/History";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import TransactionDetails from "./pages/TransactionDetails";
import AIAssistant from "./pages/AIAssistant";
import Notifications from "./pages/Notifications";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                {/* PUBLIC ENTRY POINT */}
                <Route path="/" element={<Landing />} />

                {/* AUTHENTICATION */}
                <Route path="/login" element={<Login />} />

                {/* MAIN APPLICATION */}
                <Route path="/dashboard" element={<Dashboard />} />

                {/* EXISTING APPLICATION PAGES */}
                <Route path="/home" element={<Home />} />

                <Route path="/analyze" element={<Analyze />} />

                <Route path="/history" element={<History />} />

                <Route path="/profile" element={<Profile />} />

                <Route path="/settings" element={<Settings />} />

                <Route
                    path="/transaction/:id"
                    element={<TransactionDetails />}
                />

                <Route
                    path="/assistant"
                    element={<AIAssistant />}
                />

                <Route
                    path="/notifications"
                    element={<Notifications />}
                />

                {/* OPTIONAL DIRECT LANDING ROUTE */}
                <Route
                    path="/landing"
                    element={<Landing />}
                />

                {/* UNKNOWN ROUTES */}
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />

            </Routes>
        </BrowserRouter>
    );
}

export default App;