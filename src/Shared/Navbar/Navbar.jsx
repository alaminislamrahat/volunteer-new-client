import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { FaUserAlt, FaSignOutAlt, FaPlus, FaClipboardList } from 'react-icons/fa'; // Icons for profile, logout, and add/manage posts
import { useState } from 'react'; // To manage dropdown visibility
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Navbar = () => {
    const { user, logOut, isDarkMode, toggleDarkMode } = useAuth();

    const [profileDropdownVisible, setProfileDropdownVisible] = useState(false); // State to toggle profile dropdown visibility
    const [avatarDropdownVisible, setAvatarDropdownVisible] = useState(false); // State to toggle avatar dropdown visibility
    const [navbarMenuVisible, setNavbarMenuVisible] = useState(false); // State for toggling navbar menu in mobile view

    const navLinks = (
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/all-volunteer-needs">All Volunteer Needs</Link></li>
            {user && (
                <li>
                    {/* Profile link with dropdown toggle */}
                    <button onClick={() => setProfileDropdownVisible(!profileDropdownVisible)} className="btn btn-ghost flex items-center gap-2">
                        <FaUserAlt className="text-pink-600" /> My Profile
                    </button>

                    {/* Dropdown menu for "My Profile" */}
                    {profileDropdownVisible && (
                        <ul className={`menu menu-compact dropdown-content bg-base-100 rounded-box z-[1] mt-10 w-52 p-2 shadow-lg absolute right-0 ${isDarkMode && 'bg-slate-950 text-white'}`}>
                            <li>
                                <Link to="/add-volunteer-post" className="flex items-center gap-2">
                                    <FaPlus className="text-pink-600" /> Add Volunteer Need Post
                                </Link>
                            </li>
                            <li>
                                <Link to="/manage-my-posts" className="flex items-center gap-2">
                                    <FaClipboardList className="text-pink-600" /> Manage My Posts
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>
            )}
        </>
    );

    const handleLogout = () => {
        logOut();
        setAvatarDropdownVisible(false); // Close avatar dropdown on logout
    };

    return (
        <div className={`navbar ${isDarkMode ? 'bg-black text-white' : 'bg-base-100 shadow-lg'} sticky top-0 z-50`}>
            {/* Website Name / Logo */}
            <div className="navbar-start flex items-center">
                <Link to="/" className="btn btn-ghost text-2xl font-semibold text-pink-600">Volunteer</Link>
            </div>

            {/* Navbar Center for Large Screens */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex items-center justify-center gap-3">
                    {navLinks}
                </ul>
            </div>

            {/* Navbar for Mobile */}
            <div className="navbar-end lg:hidden">
                <button onClick={() => setNavbarMenuVisible(!navbarMenuVisible)} className="btn btn-ghost text-xl">
                    ☰
                </button>

                {/* Mobile Menu */}
                {navbarMenuVisible && (
                    <ul className={`menu  menu-compact dropdown-content bg-base-100 rounded-box z-[1] mt-48 w-52 p-2 shadow-lg absolute right-0 ${isDarkMode && 'bg-slate-950 text-white'}`}>
                        {navLinks}
                        {!user && (
                            <li>
                                <Link to="/login" className="btn btn-primary">Login</Link>
                            </li>
                        )}
                    </ul>
                )}
            </div>

            {/* Right Side (Profile, Dark Mode Switch) */}
            <div className="navbar-end flex items-center gap-4 sm:gap-6">
                {/* Dark Mode Switch and Profile Pic */}
                <div className="flex items-center gap-4">
                    <DarkModeSwitch
                        style={{ marginBottom: '1rem' }}
                        checked={isDarkMode}
                        onChange={toggleDarkMode}
                        size={40}
                    />

                    {user && (
                        <div className="relative">
                            {/* Profile Avatar with dropdown toggle */}
                            <button onClick={() => setAvatarDropdownVisible(!avatarDropdownVisible)} className="btn btn-ghost flex items-center gap-2">
                                <div className="avatar w-10 h-10 rounded-full overflow-hidden">
                                    <img src={user.photoURL} alt={user.displayName} />
                                </div>
                            </button>

                            {/* Avatar Dropdown Menu */}
                            {avatarDropdownVisible && (
                                <ul className={`menu menu-compact dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg absolute right-0 ${isDarkMode && 'bg-slate-950 text-white'}`}>
                                    <li className="flex items-center gap-2">
                                        <FaUserAlt className="text-pink-600" />
                                        <span>{user.displayName}</span> {/* Display the user's name */}
                                    </li>
                                    <li>
                                        <button onClick={handleLogout} className="flex items-center gap-2 text-red-500">
                                            <FaSignOutAlt /> Logout
                                        </button>
                                    </li>
                                </ul>
                            )}
                        </div>
                    )}

                    {/* Show Login button if user is not logged in */}
                    {!user && (
                        <Link to="/login" className="btn btn-primary">Login</Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
