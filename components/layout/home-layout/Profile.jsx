import Image from "next/image";
import Profiles from "../../../src/app/api/image";
export const Profile=()=>{
    return(
        <div className="grid grid-cols-2 gap-5 sm:flex sm:gap-15">
        {Profiles.map((curElem,index)=>{
        return(
        <ul key={index} className={`transform transition duration-300 hover:rotate-0 ${index%2==0?'rotate-4':'-rotate-4'}`}>
         <li>
         <Image src={`/${curElem.Image}`} width={150} height={250} alt="sohan" className="rounded-sm sm:w-250"/>
         </li>
      </ul>
    )})}
    </div>
    )
}