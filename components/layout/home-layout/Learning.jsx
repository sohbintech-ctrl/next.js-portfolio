import Learnings from "../../../src/app/api/Learning";
export const Learning=()=>{
    return(
        <section>
        <h1 className="mb-5 mt-10 text-xl font-bold">Learning & Training</h1>
        <div className="space-y-5">
         {Learnings.map((curElem,index)=>{
          return(  
         <ul key={index}>
        <div className="grid grid-cols-2 space-y-3 shadow-[0px_2px_10px_1px_rgba(0,0,0,0.1)] rounded-xl">
        <li className="text-sm font-medium ml-3">{curElem.title}</li>
        <li className="text-sm text-right mr-3 text-[color:var(--text-color)] relative top-4">{curElem.year}</li>
        </div>  
        </ul>
        )})}
        </div>
        <hr class="border-t border-[#1E293B] my-4" />
          <h1 className="mb-1 text-xl font-bold">Contact me</h1>
            <p>xhresthasohan999@gmail.com | github</p>
        </section>
    )
}