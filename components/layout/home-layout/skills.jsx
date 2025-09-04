import Skill from "../../../src/app/api/Skills";

export const Skills=()=>{
    return(
        <section>
        <h1 className="mb-5 mt-10 text-xl font-bold">Skills</h1>
        <div className="flex flex-wrap justify-center gap-2 md:flex md:flex-wrap">
       {Skill.map((curElem,index)=>{
            return(
            <ul key={index} className="bg-[color:var(--bg-color)] text-[color:var(--font-color)] font-bold text-xs p-2 rounded-sm hover:bg-gray-300">
              <li>
                {curElem.skills}
              </li>
            </ul>
            )})}
        </div>
         </section>
)}