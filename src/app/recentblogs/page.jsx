"use client";
import { motion } from "framer-motion";
import { IoIosPaper } from "react-icons/io";

const recentBlogs=()=>{
    return(
        <motion.div
 initial={{ x: 50, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 1}}>
        <section className="ml-4 mr-3 sm:ml-10 lg:max-w-[59rem] lg:mx-auto mt-18">
            <IoIosPaper className="text-4xl"/>
            <h1 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4">I write about technology</h1>
            <p className="mb-45">I've always had a passion for technology, and I now express it through writing.</p>
        </section>
        </motion.div>
    )
}   
export default recentBlogs;
