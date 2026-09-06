import { NavLink } from "react-router-dom";

function BottomNav() {

    const navClass = ({ isActive }) =>
        `sc-bottom-link ${isActive ? "active" : ""}`;

    return (
        <nav className="sc-bottom-nav">

            <NavLink
                to="/dashboard"
                className={navClass}
            >
                <span>🏠</span>
                <small>Home</small>
            </NavLink>

            <NavLink
                to="/analyze"
                className={navClass}
            >
                <span>🧠</span>
                <small>Analyze</small>
            </NavLink>

            <NavLink
                to="/history"
                className={navClass}
            >
                <span>📜</span>
                <small>History</small>
            </NavLink>

            <NavLink
                to="/assistant"
                className={navClass}
            >
                <span>🤖</span>
                <small>Assistant</small>
            </NavLink>

            <NavLink
                to="/profile"
                className={navClass}
            >
                <span>👤</span>
                <small>Profile</small>
            </NavLink>

        </nav>
    );
}

export default BottomNav;