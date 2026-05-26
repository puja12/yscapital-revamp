import { Briefcase, UserRound, Globe2, UserCheck } from "lucide-react"

const items = [
    [Briefcase, "Business Owners", "Managing surplus capital efficiently while planning future growth."],
    [UserRound, "Senior Professionals", "Building wealth systematically and optimizing long-term investments."],
    [Globe2, "NRIs", "Managing Indian investments seamlessly from anywhere in the world."],
    [UserCheck, "Retirees", "Creating reliable income streams and preserving accumulated wealth."],
]

export default function Audience() {
    return (
        <section className="bg-[#06245a] px-8 py-16 text-white">
            <p className="text-center text-sm font-bold text-[#d4a128]">WHO WE SERVE</p>
            <h2 className="text-center font-serif text-4xl font-bold">
                Tailored Solutions for Every Stage of Wealth
            </h2>

            <div className="mx-auto mt-10 grid max-w-6xl gap-8 md:grid-cols-4">
                {items.map(([Icon, title, text]) => (
                    <div key={title} className="border-slate-500 text-center md:border-r last:border-r-0">
                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[#d4a128] text-[#d4a128]">
                            <Icon size={30} />
                        </div>
                        <h3 className="font-serif text-xl font-bold">{title}</h3>
                        <p className="mx-auto mt-3 max-w-[190px] text-sm leading-6 text-slate-200">{text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}