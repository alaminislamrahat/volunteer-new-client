import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Card from "../../../Components/Card/Card";
import SectionTitle from "../../../Components/SectionTItle/SectionTitle";
import useVolunteerData from "../../../Hooks/useVolunteerData";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { motion } from "framer-motion"; // Import Framer Motion for parent animation

const HomeCardContainer = () => {
  const { isDarkMode } = useAuth();

  const { data } = useVolunteerData();

  // Framer Motion animation for the parent container (grid)
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={`my-24 ${isDarkMode ? "" : ""}`}>
      <h1 className="text-center text-3xl font-bold mb-10">Volunteer Need</h1>

      {/* Animated Parent Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-5 justify-center items-center"
      >
        {data?.slice(0, 8).map((item) => (
          <Card key={item._id} item={item} />
        ))}
      </motion.div>
    </div>
  );
};

export default HomeCardContainer;
