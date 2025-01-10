import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#4E896D] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* About the Organization */}
        <div>
          <h6 className="text-lg font-semibold mb-4">About Us</h6>
          <p className="text-sm mb-4">
            We are a community-driven organization focused on bringing positive change through volunteering. Join us in making a difference!
          </p>
          <a
            href="/about"
            className="text-sm underline hover:text-[#E5B561] transition-colors"
          >
            Learn More
          </a>
        </div>

        {/* Volunteer Opportunities */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Volunteer With Us</h6>
          <ul className="space-y-2">
            <li>
              <a
                href="/volunteer"
                className="text-sm hover:text-[#E5B561] transition-colors"
              >
                Current Volunteer Needs
              </a>
            </li>
            <li>
              <a
                href="/apply"
                className="text-sm hover:text-[#E5B561] transition-colors"
              >
                Become a Volunteer
              </a>
            </li>
            <li>
              <a
                href="/testimonials"
                className="text-sm hover:text-[#E5B561] transition-colors"
              >
                Volunteer Stories
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Follow Us</h6>
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-[#E5B561] transition-colors"
              >
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-[#E5B561] transition-colors"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-[#E5B561] transition-colors"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-[#E5B561] transition-colors"
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider and Copyright Section */}
      <div className="border-t border-gray-400 mt-10 pt-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Volunteer Organization. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
