import { UserRound, SearchCheck, Handshake } from "lucide-react"

const items = [
    [UserRound, "Personalized Guidance", "Direct access and relationship-driven service tailored to your needs."],
    [SearchCheck, "Research-Based Recommendations", "Investment decisions supported by disciplined analysis and deep research."],
    [Handshake, "Long-Term Partnership", "Focused on helping you stay invested and achieve financial success across market cycles."],
]

export default function WhyChoose() {
    return (
        <section className="px-8 py-12">
            <p className="text-center text-sm font-bold text-[#c18a00]">WHY CHOOSE YS CAPITAL</p>

            <div className="mx-auto mt-8 grid max-w-6xl gap-6 md:grid-cols-3">
                {items.map(([Icon, title, text], index) => (
                    <div key={title} className="relative rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
                        <span className="absolute left-5 top-3 text-6xl font-bold text-slate-100">
                            0{index + 1}
                        </span>
                        <div className="relative z-10 flex gap-5">
                            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#003b9e] text-white">
                                <Icon size={30} />
                            </div>
                            <div>
                                <h3 className="font-serif text-xl font-bold text-[#071f52]">{title}</h3>
                                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}