"use client";
import { Button } from "@/components/ui/button";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const Contact=()=>{
    return(
        <motion.div
 initial={{ x: 50, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 1}}>
     <section className="ml-5 mr-5 lg:max-w-[59rem] lg:mx-auto mt-18">
    <MdEmail className="text-3xl sm:text-4xl"/>
    <h1 className="text-2xl sm:text-3xl font-bold mb-3">Contact Me</h1>
    <p className="text-md sm:text-lg font-medium">"Feel free to reach out to me via email or by filling out the contact form. I’ll get back <br/>to you as soon as possible — I promise."</p>
    <form className="flex flex-col space-y-5" method="POST" action="https://formsubmit.co/xhresthasohan999@gmail.com"> 
        <div className="mt-8 space-y-5 sm:flex sm:space-y-0 sm:justify-between"> 
        <input type="text" name="name" placeholder="Your Name" required className="w-86 sm:w-113 border-2 p-1 rounded-sm placeholder-[color:var(--text-color)]"/>
         <input type="email" name="email" placeholder="Your email address" required className="w-86 sm:w-113 border-2 p-1 rounded-sm placeholder-[color:var(--text-color)]"/>
         </div>
         <textarea name="message" id="message" placeholder="Your message" className="border-2  p-1 rounded-sm placeholder-[color:var(--text-color)] h-50 sm:h-60"></textarea>
         <Button className="mb-5" type="submit">Submit</Button>
    </form>
     </section>
       </motion.div>
    ) 
}
export default Contact;
