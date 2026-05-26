import { BarChart3, HandCoins, ShieldCheck, ArrowRight } from "lucide-react"

const cards = [
    {
        icon: BarChart3,
        title: "Wealth Creation",
        text: "For long-term capital appreciation through diversified equity exposure.",
        color: "bg-[#003b9e]",
    },
    {
        icon: HandCoins,
        title: "Income Generation",
        text: "Designed for investors seeking stable and predictable cash flows.",
        color: "bg-[#c9971d]",
    },
    {
        icon: ShieldCheck,
        title: "Capital Preservation",
        text: "Focused on protecting wealth while maintaining reasonable growth.",
        color: "bg-[#003b9e]",
    },
]

export default function Portfolio() {
    return (
        <section className="bg-white px-6 py-[58px] text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.4px] text-[#c9971d]">
                PORTFOLIO MANAGEMENT
            </p>

            <h2 className="mt-2 font-serif text-[34px] font-bold leading-tight text-[#08245c]">
                Investment Portfolios Built Around Your Life Goals
            </h2>

            <p className="mx-auto mt-4 max-w-[710px] text-[15px] leading-[26px] text-slate-500">
                No two investors are alike. We design investment portfolios aligned with your goals,
                <br className="hidden md:block" />
                risk appetite, liquidity needs and long-term aspirations.
            </p>

            <div className="mx-auto mt-[34px] grid max-w-[1110px] grid-cols-1 gap-[34px] md:grid-cols-3">
                {cards.map((card) => {
                    const Icon = card.icon

                    return (
                        <div
                            key={card.title}
                            className="min-h-[158px] rounded-[14px] border border-[#e3e6ee] bg-white px-[38px] py-[30px] text-left shadow-[0_1px_8px_rgba(15,23,42,0.04)]"
                        >
                            <div className="flex items-start gap-[26px]">
                                <div
                                    className={`flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full ${card.color} text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)]`}
                                >
                                    <Icon size={30} strokeWidth={1.9} />
                                </div>

                                <div className="pt-[2px]">
                                    <h3 className="font-serif text-[20px] font-bold leading-none text-[#08245c]">
                                        {card.title}
                                    </h3>

                                    <p className="mt-[15px] max-w-[190px] text-[13.5px] font-medium leading-[23px] text-slate-600">
                                        {card.text}
                                    </p>

                                    <button className="mt-[16px] flex items-center gap-[6px] text-[13px] font-bold text-[#2457d6]">
                                        Learn More
                                        <ArrowRight size={14} strokeWidth={2.6} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <button className="mt-[30px] rounded-[5px] bg-[#003b9e] px-[42px] py-[13px] text-[14px] font-semibold text-white shadow-[0_8px_18px_rgba(0,59,158,0.25)]">
                Discuss Your Portfolio
            </button>
        </section>
    )
}