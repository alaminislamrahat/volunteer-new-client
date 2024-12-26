const Footer = () => {
    return (
        <footer className="footer bg-neutral text-neutral-content p-10 mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {/* About the Organization */}
                <div>
                    <h6 className="footer-title text-lg">About Us</h6>
                    <p className="text-sm mb-4">
                        We are a community-driven organization focused on bringing positive change through volunteering. Join us in making a difference!
                    </p>
                    <a href="/about" className="link link-hover text-sm">Learn More</a>
                </div>

                {/* Volunteer Opportunities */}
                <div>
                    <h6 className="footer-title text-lg">Volunteer With Us</h6>
                    <ul>
                        <li><a href="/volunteer" className="link link-hover text-sm">Current Volunteer Needs</a></li>
                        <li><a href="/apply" className="link link-hover text-sm">Become a Volunteer</a></li>
                        <li><a href="/testimonials" className="link link-hover text-sm">Volunteer Stories</a></li>
                    </ul>
                </div>

                {/* Legal & Policies */}
                <div>
                    <h6 className="footer-title text-lg">Policies</h6>
                    <ul>
                        <li><a href="/terms" className="link link-hover text-sm">Terms of Service</a></li>
                        <li><a href="/privacy" className="link link-hover text-sm">Privacy Policy</a></li>
                        <li><a href="/cookies" className="link link-hover text-sm">Cookie Policy</a></li>
                    </ul>
                </div>
            </div>

            <div className="text-center mt-10">
                <p className="text-sm">&copy; 2024 Volunteer Organization. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
