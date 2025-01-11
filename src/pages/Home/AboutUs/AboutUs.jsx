import { motion } from "framer-motion";

const AboutUs = () => {
    // Animation Variants
    const leftToRight = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };

    const rightToLeft = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };

    return (
        <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center text-white">
                {/* Right Side: Demo Image (Lottie Animation) */}
                <motion.div
                    variants={rightToLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    className=""
                >
                    <img
                        className="w-5/6"
                        src="https://i.ibb.co.com/3dxQz4j/volunteers-showing-support-and-unity-2021-08-27-10-37-24-utc-800x533.jpg"
                        alt=""
                    />
                </motion.div>

                {/* Left Side: Heading and Text */}
                <motion.div
                    variants={leftToRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    className="flex flex-col items-start space-y-6 justify-center"
                >
                    <h2 className="mb-2 text-2xl font-bold">-ABOUT US</h2>
                    <h1 className="text-4xl font-bold mb-4">
                        Together we protect the earth
                    </h1>
                    <p className="text-lg text-left leading-relaxed space-y-4">
                        Volunteering is a selfless act of helping others and giving back to
                        the community. It is an opportunity to make a meaningful impact on
                        the lives of others while building connections and experiencing
                        personal growth.
                        <br />
                        Whether it's supporting a cause you care about or helping those in
                        need, volunteering fosters a sense of belonging and love for people.
                        It’s about creating positive change, one action at a time.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutUs;
