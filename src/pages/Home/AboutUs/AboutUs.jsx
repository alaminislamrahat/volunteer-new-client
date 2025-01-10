import Lottie from 'lottie-react';
import lottiefile from '../../../../src/Lottie/people.json'

const AboutUs = () => {
    return (
        <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center text-white">
                {/* Left Side: Heading Text */}


                {/* Right Side: Demo Image (Lottie Animation) */}
                <div className="">
                    {/* <Lottie animationData={lottiefile} loop={true} className="h-96" /> */}
                    <img className='w-5/6' src="https://i.ibb.co.com/3dxQz4j/volunteers-showing-support-and-unity-2021-08-27-10-37-24-utc-800x533.jpg" alt="" />
                </div>


                <div className="flex flex-col items-start space-y-6 justify-center">
                    <h2 className='mb-2 text-2xl font-bold'>-ABOUT US</h2>
                    <h1 className={`text-4xl font-bold mb-4 `}>

                        Together we protect the earth</h1>
                    <p className="text-lg text-left leading-relaxed space-y-4">
                        Volunteering is a selfless act of helping others and giving back to the community. It is an opportunity to make a meaningful impact on the lives of others while building connections and experiencing personal growth.
                        <br />
                        Whether it's supporting a cause you care about or helping those in need, volunteering fosters a sense of belonging and love for people. It’s about creating positive change, one action at a time.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default AboutUs;
