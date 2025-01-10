import React from "react";
import { motion } from "framer-motion";
import useAuth from "../../../Hooks/useAuth";

const Services = () => {

    const {isDarkMode} = useAuth()
    const services = [
        {
            title: "Beach Cleanup",
            description: "Help keep beaches clean and protect wildlife.",
            image: "https://i.ibb.co/vJ3jT3m/Volunteering-bro.png", // Replace with your image
        },
        {
            title: "Tree Planting",
            description: "Plant trees to combat climate change.",
            image: "https://i.ibb.co/zmMYmkf/Volunteering-cuate.png", // Replace with your image
        },
        {
            title: "Clean Up Society",
            description: "We have clean our society as well. It's for our future.",
            image: "https://i.ibb.co/crTs4W2/Volunteering-amico.png", // Replace with your image
        },
        {
            title: "Elderly Assistance",
            description: "Support the elderly with daily tasks and companionship.",
            image: "https://i.ibb.co/WH0D1bK/World-Humanitarian-Day-pana.png", // Replace with your image
        },
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className={`max-w-7xl mx-auto container `}>
            <h2 className="text-3xl font-bold text-center my-20">
                Volunteers make each day brighter
            </h2>
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ staggerChildren: 0.2 }}
            >
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className={`p-6 ${isDarkMode ? 'bg-[#101714] text-white' : 'bg-white'}  rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300`}
                        variants={cardVariants}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-48 object-cover rounded-t-lg mb-4"
                        />
                        <h3 className={`${isDarkMode && 'text-white'} text-xl font-semibold mb-2 text-gray-800`}>
                            {service.title}
                        </h3>
                        <p className={`${isDarkMode && 'text-white'} text-gray-600`}>{service.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Services;
