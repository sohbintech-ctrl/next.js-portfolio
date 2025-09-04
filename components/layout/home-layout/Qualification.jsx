import Image from "next/image";
import Qualifications from "../../../src/app/api/Qualification";

export const Qualification=()=>{
    return(
    <section className="mt-10">
    <h1 className="mb-5 text-xl font-bold">Education</h1>
    {Qualifications.map((curElem,index)=>{
    const{institution,degree,start_year,end_year,image,link}=curElem;
     return(
        <a key={index} href={link} target="_blank" rel="noopener noreferrer" className="flex justify-between mb-7 shadow-[0px_2px_10px_1px_rgba(0,0,0,0.1)] rounded-xl cursor-pointer">
            <div className="flex p-2">
            <div className=" relative w-13 ">
           <Image src={`/${image}`} width={40} height={0} alt="sohan" className="rounded-full"/>
           </div>
           <p className="relative bottom-1 space-y-1">
            <p className="text-sm font-medium">{institution}</p>
             <p className="text-sm">{degree}</p>
            </p> 
            </div>
            <p className="text-[color:var(--text-color)] relative right-4 top-3 text-sm">{start_year}-{end_year}</p>
        </a>
     )})}
     </section>
     );
}