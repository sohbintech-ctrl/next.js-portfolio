export default function Footer(){
    const currentYear=new Date().getFullYear();
    return(
        <section className="max-w-[61rem] mx-auto">
            <div className="text-center mt-10 mb-5 text-sm text-[#737373]">{currentYear}-By sohan shrestha</div>
        </section>
    )
}