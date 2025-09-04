import Projects from "../../../src/app/api/Projects";

export const Project=()=>{  
    return(
      <section className="flex flex-col items-center space-y-3 mt-15">
        <div className="bg-[color:var(--bg-color)] text-[color:var(--font-color)] text-center p-1 rounded-sm">My projects</div>
        <h1 className="text-2xl sm:text-4xl font-black">Check Out my latest projects</h1>
        <div className="text-center text-[color:var(--text-color)] space-y-1 text-lg">
        <p className="text-sm sm:text-2xl">I’m a beginner web developer who loves building things! Here are some of my favorite personal projects, </p>
        <p className="text-sm sm:text-2xl">showcasing what I’ve been learning.</p>
        </div>
        {
            Projects.map((curElem,index)=>{
                 return(
                <ul key={index}>
                        <li className="text-sm">{curElem.project}</li>
                </ul>
             )})
        }
      </section>
    )
}