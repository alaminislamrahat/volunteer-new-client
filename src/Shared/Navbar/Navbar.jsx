import { useState } from 'react';
import { Link } from 'react-router-dom'; // For navigation

const Navbar = () => {
    // Dummy state for logged-in user (this can be replaced with your auth logic)
    const [user, setUser] = useState({
        loggedIn: true, // Toggle this value for testing
        photoURL: "https://via.placeholder.com/50", // Replace with user's actual photo URL
        displayName: "John Doe" // Replace with user's actual display name
    });

    const navLinks = (
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/volunteer-needs">All Volunteer Needs</Link></li>
        </>
    );

    const handleLogout = () => {
        // Add your logout logic here (e.g., clear user session, tokens, etc.)
        setUser({ loggedIn: false });
    };

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                        {user.loggedIn && (
                            <li>
                                <Link to="/profile">My Profile</Link>
                            </li>
                        )}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                    {user.loggedIn && (
                        <li className="relative">
                            <div className="dropdown dropdown-hover">
                                <div className="avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} alt={user.displayName} />
                                    </div>
                                </div>
                                <ul className="menu menu-compact dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    <li><Link to="/add-post">Add Volunteer Need Post</Link></li>
                                    <li><Link to="/manage-posts">Manage My Posts</Link></li>
                                    <li><button onClick={handleLogout}>Logout</button></li>
                                </ul>
                            </div>
                        </li>
                    )}
                    {!user.loggedIn && (
                        <li>
                            <Link to="/login" className="btn btn-primary">Login</Link>
                        </li>
                    )}
                </ul>
            </div>
            <div className="navbar-end">
                {!user.loggedIn && (
                    <Link to="/login" className="btn">Login</Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
