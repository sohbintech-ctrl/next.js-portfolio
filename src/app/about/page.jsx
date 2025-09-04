"use client";
import { BiMessageRoundedDots } from "react-icons/bi";
import { Profile } from "../../../components/layout/home-layout/Profile";
import { motion } from "framer-motion";

const About=()=>{
    return(
          <motion.div
 initial={{ x: 50, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 1}}>
        <section className="ml-3 mr-4 sm:ml-10 sm:mr-10 lg:max-w-[59rem] lg:mx-auto mt-18 mb-20">
            <BiMessageRoundedDots className="text-3xl sm:text-5xl"/>
            <h1 className="text-2xl sm:text-3xl font-bold mb-3">About me</h1>
            <motion.div
        initial={{ scale: 0, rotate: 0, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1}}
        transition={{ duration: 1,ease:"easeInOut"}}>
            <Profile/>
            </motion.div>
          <p className="max-w-[55rem] mt-10 font-medium">
  Hey there, I'm Sohan Shrestha — a curious mind stepping into the exciting world of technology. Welcome to my little space on the internet!<br /><br />

  As someone who's just getting started in the coding community, I may not have years of experience or internships under my belt yet, but I do bring something just as powerful — a deep passion for learning and a strong drive to grow. I'm currently pursuing a Bachelor's in Information Technology, having completed my 3rd semester, and every step of this journey so far has fueled my fascination with the digital world.<br /><br />

  My goal is to gradually build a solid foundation in software development, exploring everything from clean code to creative problem-solving. I believe in learning by doing — and while I’m still early in my journey, I’m excited to experiment, make mistakes, and grow through real-world projects and collaboration.<br /><br />

  Beyond just code, I’ve also started dipping my toes into writing — whether it’s breaking down tech concepts I’m learning, or just sharing my thoughts and experiences. Writing helps me reflect, understand better, and hopefully connect with others like you along the way.<br /><br />

  This website is a place where I’ll share what I learn, build, and explore. If you’re a beginner too, or just someone who loves tech, design, or storytelling — I hope you’ll find something here that clicks with you.<br /><br />

  Thanks for stopping by. I may be just starting out, but I’m excited for what’s ahead — and I’d love for you to join me on this journey of growth, learning, and discovery.
</p>

        </section>
        </motion.div>
    )
}
export default About;
