import { NavLink } from "react-router-dom";

function Navbar() {

    const navClass = ({ isActive }) =>
        `sc-navbar-link ${isActive ? "active" : ""}`;

    return (
        <header className="sc-navbar">

            <NavLink
                to="/dashboard"
                className="sc-navbar-brand"
            >
                <span>🔐</span>
                SecureChainPay
            </NavLink>


            <nav className="sc-navbar-menu">

                <NavLink
                    to="/dashboard"
                    className={navClass}
                >
                    🏠
                    <span>Home</span>
                </NavLink>

                <NavLink
                    to="/analyze"
                    className={navClass}
                >
                    🧠
                    <span>Analyze</span>
                </NavLink>

                <NavLink
                    to="/history"
                    className={navClass}
                >
                    📜
                    <span>History</span>
                </NavLink>

                <NavLink
                    to="/assistant"
                    className={navClass}
                >
                    🤖
                    <span>Assistant</span>
                </NavLink>

                <NavLink
                    to="/profile"
                    className={navClass}
                >
                    👤
                    <span>Profile</span>
                </NavLink>

                <NavLink
                    to="/notifications"
                    className={navClass}
                >
                    🔔
                </NavLink>

            </nav>

        </header>
    );
}

export default Navbar;