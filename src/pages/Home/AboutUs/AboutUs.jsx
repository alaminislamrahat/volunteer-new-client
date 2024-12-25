import Lottie from 'lottie-react';
import lottiefile from '../../../../src/Lottie/people.json'

const AboutUs = () => {
    return (
        <div className="flex items-center justify-center ">
            <div className="max-w-screen-lg w-full p-8">
                <div className="flex flex-col lg:flex-row">
                    {/* Left Side: Heading Text */}
                    <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 flex flex-col justify-center">
                        <h1 className={`text-3xl font-bold mb-4`}>About Volunteering</h1>
                        <p className={`text-lg`}>
                            Volunteering is a selfless act of helping others and giving back to the community. It is an opportunity to make a meaningful impact on the lives of others while building connections and experiencing personal growth.
                        </p>
                        <p className={`text-lg mt-4`}>
                            Whether it's supporting a cause you care about or helping those in need, volunteering fosters a sense of belonging and love for people. It’s about creating positive change, one action at a time.
                        </p>
                    </div>

                    {/* Right Side: Demo Image (Lottie Animation) */}
                    <div className="lg:w-1/2 flex justify-center items-center">
                        <Lottie animationData={lottiefile} loop={true} className="h-96" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
