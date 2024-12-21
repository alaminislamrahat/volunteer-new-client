import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";



import img from '../../assets/register.jpg'

import useAuth from "../../Hooks/useAuth";
import { app } from "../../Firebase/firebase.config";
import toast from "react-hot-toast";

const Register = () => {
    const { createUser, updateUserProfile } = useAuth()
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation()

    const validatePassword = (password) => {
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasMinimumLength = password.length >= 6;

        if (!hasUppercase) {
            toast.error("Password must include at least one uppercase letter.")

            return false;
        }
        if (!hasLowercase) {
            toast.error("Password must include at least one lowercase letter.")

            return false;
        }
        if (!hasMinimumLength) {
            toast.error("Password must be at least 6 characters long.")

            return false;
        }

        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if (!validatePassword(password)) return;

        createUser(email, password)
            .then((result) => {
                console.log(result);
                updateUserProfile(name, photo)
                    .then(() => {
                        console.log('User updated')
                        toast.success("Sign up successfully.")
                        navigate(location.state ? location.state : '/')
                    })
                    .catch((err) => console.log(err));
            })
            .catch((error) => console.log(error));
    };

    const googleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result);
                toast.success("Sign up successfully.")
                navigate(location.state ? location.state : '/')
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="hero  min-h-screen flex items-center justify-center">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10 items-center">
                <div className="text-center lg:text-left w-1/2">
                    <img src={img} alt="Register" className="rounded-lg shadow-lg" />
                </div>
                <div className="card bg-white w-full max-w-md rounded-lg shadow-2xl p-8">
                    <h1 className="text-center text-3xl font-extrabold text-gray-800 mb-6">Sign Up</h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="form-control">
                            <label className="label font-semibold text-gray-600">
                                <span>Name</span>
                            </label>
                            <input
                                name="name"
                                type="text"
                                placeholder="Enter your name"
                                className="input input-bordered border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label font-semibold text-gray-600">
                                <span>Photo</span>
                            </label>
                            <input
                                name="photo"
                                type="text"
                                placeholder="Enter your photo URL"
                                className="input input-bordered border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label font-semibold text-gray-600">
                                <span>Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                className="input input-bordered border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label font-semibold text-gray-600">
                                <span>Password</span>
                            </label>
                            <input
                                name="password"
                                type="password"
                                placeholder="Enter your password"
                                className="input input-bordered border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <label className="label mt-1">
                                <a href="#" className="text-sm text-blue-600 hover:underline">
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button
                                type="submit"
                                className="btn bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                    <div className="divider text-gray-400">OR</div>
                    <button
                        onClick={googleLogin}
                        className="btn flex items-center justify-center bg-white border border-gray-300 shadow-md hover:shadow-lg text-gray-700 py-2 rounded-md w-full">
                        <FcGoogle className="text-2xl mr-2" />
                        Sign up with Google
                    </button>
                    <p className="py-6 text-center text-gray-600">
                        Already have an account?{' '}
                        <Link className="font-bold text-blue-500 hover:underline" to="/login">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;