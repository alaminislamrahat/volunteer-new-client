import { HiMiniCalendarDateRange } from "react-icons/hi2";
import { IoGameControllerOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

import { motion } from "framer-motion"; // Import Framer Motion

import { useContext } from "react";
import useAuth from "../../Hooks/useAuth";


const Card = ({ item }) => {
    const {
        thumbnail,
        category,
        postTitle,
        deadline,
        _id,
        volunteersNeeded, description
    } = item || {};

    const { isDarkMode } = useAuth()

    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}

            className={`col-span-1 cursor-pointer group ${isDarkMode ? 'bg-[#101714] text-white' : 'bg-[#FFFFFF]  text-[#7F7F7F]'}   shadow-xl p-3 rounded-xl`}
        >
            <div
                className="flex flex-col gap-2 w-full"

            >
                {/* Game Cover */}
                <div
                    className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          "
                >
                    <motion.img
                        className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
                        src={thumbnail || "https://via.placeholder.com/300"}
                        alt="Game Cover"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                    />
                </div>

                {/* Game Title */}
                <div className="font-semibold text-2xl text-[#4E896D] px-2">{postTitle || "Title"}</div>

                {/* Genre */}
                <div className="font-semibold text-lg flex items-center gap-3 justify-between px-2">
                    <p>Category</p>  <p>{category || "N/A"}</p>
                </div>

                {/* Publishing Year */}
                <div className="font-semibold text-lg flex gap-3 items-center justify-between px-2">
                    <p>Deadline</p>  <p>{deadline || "N/A"}</p>
                </div>

                {/* Rating */}
                <div className="font-semibold text-lg flex gap-3 items-center justify-between px-2">
                    <p>Volunteer Need</p>  <p className="text-[#e5b546]">{volunteersNeeded}</p>
                </div>
                <div>
                    <Link className="text-white bg-[#4E896D] btn"
                        to={`/volunteerDetail/${_id}`}>Details</Link>
                </div>

            </div>
        </motion.div>
    );
};

export default Card;