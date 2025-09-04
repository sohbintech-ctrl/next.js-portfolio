"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {CiLinkedin, CiYoutube} from "react-icons/ci";
import { SiUpwork } from "react-icons/si";
import { LuGithub } from "react-icons/lu";
import Image from 'next/image'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {BriefcaseBusiness, Mail, Menu, MessageCircleDashed, Zap} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/modetoggle";
export default function Navigation(){
   const pathname = usePathname();
    return(
        
        <section className=" sticky top-0 z-50 backdrop-blur-md max-w-[61rem] mx-auto flex justify-between shadow-lg p-2">
        <Sheet>
        <SheetTrigger className="cursor-pointer hover:border-1 pl-1 pr-1 rounded-sm ml-4 sm:ml-0"><Menu/></SheetTrigger>
        <div className="relative top-1 sm:relative sm:top-0 text-2xl font-bold">
          <span>Soh</span>
        <span>bintech</span>
        </div>
        <ModeToggle/>
  <SheetContent side="left" className="w-70">
    <SheetHeader className="gap-15 ml-10"> 
        <SheetTitle></SheetTitle>
        <div className="flex gap-2 mt-0 sm:mt-10">
        <Image src="/sohan.jpg" width={50}
      height={100} alt="sohan" className="rounded-full"></Image>
      <div className="text-sm">
        <h1>Sohan Shrestha</h1>
        <span>full stack<br/>developer</span>
      </div>
      </div>

    <nav>
     <ul className="space-y-1">
        <li>  
        <Link
          href="/"
          prefetch={true}
          className={`flex px-3 gap-1 py-2 rounded-lg transition-colors text-sm
            ${pathname === "/" ? "bg-blue-100 text-blue-600" : "text-gray-500 hover:bg-gray-100"}
          `}
        >
          <Zap/>
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          prefetch={true}
          className={`flex gap-1 px-3 py-2 rounded-lg transition-colors text-sm
            ${pathname === "/about" ? "bg-blue-100 text-blue-600" : "text-gray-500 hover:bg-gray-100"}
          `}
        >
          <MessageCircleDashed />
          About
        </Link>
      </li>
      <li>
        <Link
          href="/recentblogs"
          prefetch={true}
          className={`flex gap-1 px-3 py-2 rounded-lg transition-colors text-sm
            ${pathname === "/recentblogs" ? "bg-blue-100 text-blue-600" : "text-gray-500 hover:bg-gray-100"}
          `}
        >
          <BriefcaseBusiness />
          RecentBlogs
        </Link>
      </li>
      <li>
        <Link
          href="/contact"
          prefetch={true}
          className={`flex gap-1 px-3 py-2 rounded-lg transition-colors text-sm
            ${pathname === "/contact" ? "bg-blue-100 text-blue-600" : "text-gray-500 hover:bg-gray-100"}
          `}
        >
          <Mail />
          Contact
        </Link>
      </li>
     </ul>
     </nav>

     <nav>
        <ul className="space-y-1">
          <h1>Socials</h1>
            <li className="flex gap-1 px-3 py-2 rounded-lg transition-colors ">
             <CiLinkedin />
           <Link href="https://www.linkedin.com/in/sohan-shrestha-2a2667243/" target="_blank">Linkedin</Link>
           </li> 
           <li className="flex gap-1  px-3 py-2 rounded-lg transition-colors">
             <CiYoutube />
           <Link href="https://www.youtube.com/@Eagle-z9" target="_blank">Youtube</Link>
           </li>
           <li className="flex gap-1  px-3 py-2 rounded-lg transition-colors">
           <LuGithub />
           <Link href="https://github.com/sohbintech-ctrl" target="_blank">Github</Link>
          </li>
          <li className="flex gap-1  px-3 py-2 rounded-lg transition-colors">
        <SiUpwork/>
           <Link href="https://www.upwork.com/freelancers/~01c457855c17a74042" target="_blank">Upwork</Link>
           </li>
        </ul>
     </nav>
     <Link href="Subash-Shrestha-CV.pdf" target="_blank">
     <Button className="rounded-full w-35 p-4">Read Resume</Button>
     </Link>
     
    </SheetHeader>
  </SheetContent>
</Sheet>
</section> 
)
}