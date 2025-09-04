import Image from "next/image";
import Workexperiences from "../../../src/app/api/Workexperience";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDownIcon } from "lucide-react";
import { Description } from "@radix-ui/react-dialog";

export const WorkExperience = () => {
  const iconMap={
    ChevronDownIcon:<ChevronDownIcon/>,
  }
  return (
    <section>
      <h1 className="text-xl font-bold mt-10 mb-6">Work Experience</h1>
    <Accordion type="single" collapsible className="space-y-5">
      {Workexperiences.map((curElem, index) =>{
        const{image,title,subtitle,Description,startyear,endyear,Icon}=curElem;
      return(
        <AccordionItem key={index} value={`item-${index}`} className="shadow-[0px_2px_10px_1px_rgba(0,0,0,0.1)] rounded-xl ">
          <AccordionTrigger>
            <div className="flex justify-between rounded-xl group cursor-pointer">
            <div className="flex gap-3">
            <Image src={`/${image}`} width={40} height={0} alt="sohan" className="rounded-full"/>
           <div>
            <p>{title}</p>   
            <p className="font-semibold">{subtitle}</p>
            </div>
            </div>  

            <div className="flex items-center group">
              <p className="relative right-4 text-[color:var(--text-color)]">{startyear}-{endyear}</p>
              <p className="ml-2 hidden group-hover:block">{iconMap[Icon]}</p>
            </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p>{Description}</p>
          </AccordionContent>
        </AccordionItem>
      )})}
    </Accordion>
    </section>
  );
};
