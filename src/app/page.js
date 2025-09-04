"use client";

import { HeroSection } from "../../components/layout/home-layout/herosection";
import { Learning } from "../../components/layout/home-layout/Learning";
import { Project } from "../../components/layout/home-layout/Project";
import { Qualification } from "../../components/layout/home-layout/Qualification";
import { Skills } from "../../components/layout/home-layout/skills";
import { WorkExperience } from "../../components/layout/home-layout/Workexperience";
import { motion } from "framer-motion";

export default function Home(){
  return (    
  <section className="ml-5 mr-10 sm:ml-10 sm:mr-10 lg:max-w-[59rem] lg:m-auto">
<motion.div
 initial={{ x: 50, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 1}}>
  <HeroSection/>
  <WorkExperience/>
  <Qualification/>
  <Skills/>
  <Project/>
  <Learning/>
  </motion.div>
  </section>
  );
}
