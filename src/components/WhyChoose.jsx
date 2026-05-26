import { UserRound, SearchCheck, Handshake } from "lucide-react"

const items = [
    [
        UserRound,
        "Personalized Guidance",
        "Direct access and relationship-driven service tailored to your needs.",
    ],
    [
        SearchCheck,
        "Research-Based Recommendations",
        "Investment decisions supported by disciplined analysis and deep research.",
    ],
    [
        Handshake,
        "Long-Term Partnership",
        "Focused on helping you stay invested and achieve financial success across market cycles.",
    ],
]

export default function WhyChoose() {
    return (
        <section className="bg-white px-6 py-[34px]">
            <p className="text-center text-[12px] font-bold uppercase tracking-[0.5px] text-[#c9971d]">
                WHY CHOOSE YS CAPITAL
            </p>

            <div className="mx-auto mt-[6px] grid max-w-[1090px] grid-cols-1 gap-[18px] md:grid-cols-3">
                {items.map(([Icon, title, text], index) => (
                    <div
                        key={title}
                        className="relative min-h-[145px] overflow-hidden rounded-[12px] border border-[#e5e8ef] bg-white px-[22px] py-[24px] shadow-[0_1px_8px_rgba(15,23,42,0.04)]"
                    >
                        <span className="absolute left-[18px] top-[14px] text-[48px] font-bold leading-none text-[#e7ebf3]">
                            0{index + 1}
                        </span>

                        <div className="relative z-10 flex items-center gap-[22px] pt-[33px]">
                            <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full bg-[#003b9e] text-white shadow-[0_8px_18px_rgba(0,59,158,0.22)]">
                                <Icon size={31} strokeWidth={1.9} />
                            </div>

                            <div>
                                <h3 className="font-serif text-[19px] font-bold leading-[22px] text-[#08245c]">
                                    {title}
                                </h3>

                                <p className="mt-[5px] text-[14px] font-medium leading-[22px] text-slate-600">
                                    {text}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}