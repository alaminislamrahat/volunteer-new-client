
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const JoinTheMovement = () => {
    const {
        isDarkMode
    } = useAuth();
    return (
        <div className={`${isDarkMode ?'  bg-gradient-to-r from-purple-950 to-fuchsia-700' : 'bg-gradient-to-r from-teal-400 to-blue-500' } relative  text-white py-20`}>
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://example.com/volunteer-background.jpg')" }}></div>
            <div className="relative z-10 container mx-auto text-center px-4">
                <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-shadow-md">
                    Become a Volunteer Today and Make a Lasting Impact
                </h2>
                <p className="text-lg sm:text-xl mb-8">
                    Volunteering is not just about giving your time—it's about touching lives, creating a positive impact, and making the world a better place.
                    Join our community of change-makers and spread kindness, compassion, and hope.
                </p>
                <div className="flex justify-center gap-4 mb-12">
                    <Link to="/all-volunteer-needs" className="btn bg-gradient-to-r from-teal-400 to-blue-500 text-white px-8 py-3 rounded-lg hover:bg-gradient-to-l transform transition-all duration-300">
                        Explore Opportunities
                    </Link>
                    <Link to="/contact-us" className="btn bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-800 transform transition-all duration-300">
                        Contact Us
                    </Link>
                </div>
                <div className="mt-10 text-lg font-semibold">
                    <p className="italic">“The best way to find yourself is to lose yourself in the service of others.” - Mahatma Gandhi</p>
                </div>
            </div>
        </div>
    );
};

export default JoinTheMovement;
