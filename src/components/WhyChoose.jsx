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
        <section className="bg-white px-5 py-[34px] sm:px-6">
            <p className="text-center text-[11px] font-bold uppercase tracking-[0.5px] text-[#c9971d] sm:text-[12px]">
                WHY CHOOSE YS CAPITAL
            </p>

            <div className="mx-auto mt-[14px] grid max-w-[1090px] grid-cols-1 gap-[16px] sm:mt-[18px] md:grid-cols-2 lg:mt-[6px] lg:grid-cols-3 lg:gap-[18px]">
                {items.map(([Icon, title, text], index) => (
                    <div
                        key={title}
                        className="relative min-h-[150px] overflow-hidden rounded-[12px] border border-[#e5e8ef] bg-white px-[20px] py-[22px] shadow-[0_1px_8px_rgba(15,23,42,0.04)] sm:min-h-[145px] sm:px-[22px] sm:py-[24px]"
                    >
                        <span className="absolute left-[16px] top-[14px] text-[42px] font-bold leading-none text-[#e7ebf3] sm:left-[18px] sm:text-[48px]">
                            0{index + 1}
                        </span>

                        <div className="relative z-10 flex flex-col items-start gap-[16px] pt-[32px] sm:flex-row sm:items-center sm:gap-[22px] sm:pt-[33px]">
                            <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#003b9e] text-white shadow-[0_8px_18px_rgba(0,59,158,0.22)] sm:h-[68px] sm:w-[68px]">
                                <Icon size={28} strokeWidth={1.9} className="sm:size-[31px]" />
                            </div>

                            <div>
                                <h3 className="font-serif text-[18px] font-bold leading-[22px] text-[#08245c] sm:text-[19px]">
                                    {title}
                                </h3>

                                <p className="mt-[6px] text-[13.5px] font-medium leading-[21px] text-slate-600 sm:mt-[5px] sm:text-[14px] sm:leading-[22px]">
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