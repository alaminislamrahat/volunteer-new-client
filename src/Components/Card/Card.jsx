import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion
import useAuth from "../../Hooks/useAuth";

const Card = ({ item }) => {
  const {
    thumbnail,
    category,
    postTitle,
    deadline,
    _id,
    volunteersNeeded,
  } = item || {};

  const { isDarkMode } = useAuth();

  // Framer Motion Variants for smooth animations
  const containerVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`col-span-1 cursor-pointer group ${
        isDarkMode
          ? "bg-[#101714] text-white"
          : "bg-[#FFFFFF] text-[#7F7F7F]"
      } shadow-xl p-3 rounded-xl`}
    >
      <div className="flex flex-col gap-2 w-full">
        {/* Thumbnail with animation */}
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <motion.img
            src={thumbnail || "https://via.placeholder.com/300"}
            alt="Thumbnail"
            className="object-cover h-full w-full group-hover:scale-110 transition"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Post Title */}
        <motion.div
          variants={textVariants}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-semibold text-2xl text-[#4E896D] px-2"
        >
          {postTitle || "Title"}
        </motion.div>

        {/* Category */}
        <motion.div
          variants={textVariants}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-semibold text-lg flex items-center gap-3 justify-between px-2"
        >
          <p>Category</p>
          <p>{category || "N/A"}</p>
        </motion.div>

        {/* Deadline */}
        <motion.div
          variants={textVariants}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-semibold text-lg flex gap-3 items-center justify-between px-2"
        >
          <p>Deadline</p>
          <p>{deadline || "N/A"}</p>
        </motion.div>

        {/* Volunteers Needed */}
        <motion.div
          variants={textVariants}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="font-semibold text-lg flex gap-3 items-center justify-between px-2"
        >
          <p>Volunteer Need</p>
          <p className="text-[#e5b546]">{volunteersNeeded}</p>
        </motion.div>

        {/* Details Button */}
        <motion.div
          variants={textVariants}
          transition={{ duration: 0.6, delay: 1 }}
          className="px-2"
        >
          <Link
            className="text-white bg-[#4E896D] px-4 py-2 rounded-lg inline-block transition hover:bg-[#3b725a]"
            to={`/volunteerDetail/${_id}`}
          >
            Details
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card;
