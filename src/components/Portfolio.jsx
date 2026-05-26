import { Sprout, BadgeIndianRupee, Shield, ArrowRight } from "lucide-react"
import leafImage from "../assets/portfolio-leaf.png"

const cards = [
    {
        icon: Sprout,
        title: "Wealth Creation",
        text: "For long-term capital appreciation through diversified equity exposure.",
        iconBg: "bg-[#003b9e]",
        cardBg: "bg-[#eef5ff]",
    },
    {
        icon: BadgeIndianRupee,
        title: "Income Generation",
        text: "Designed for investors seeking stable and predictable cash flows.",
        iconBg: "bg-[#c9971d]",
        cardBg: "bg-[#fff5df]",
    },
    {
        icon: Shield,
        title: "Capital Preservation",
        text: "Focused on protecting wealth while maintaining reasonable growth.",
        iconBg: "bg-[#2f7d26]",
        cardBg: "bg-[#eef7ef]",
    },
]

export default function Portfolio() {
    return (
        <section className="relative overflow-hidden bg-white px-6 py-[52px]">
            {/* left plant decoration 
            <div className="pointer-events-none absolute bottom-0 left-0 h-[210px] w-[245px] opacity-90">
                <div className="absolute bottom-[-30px] left-[-40px] h-[220px] w-[160px] rounded-full bg-gradient-to-tr from-[#2f7d26]/25 to-transparent blur-xl" />
            </div>*/}
            {/* LEAF GLOW */}
            {/* LEAF GLOW */}
            <div className="pointer-events-none absolute bottom-[-40px] left-[-60px] h-[260px] w-[240px] rounded-full bg-[#dcefd7] blur-[65px]" />

            {/* LEFT LEAF DECORATION */}
            <img
                src={leafImage}
                alt=""
                className="pointer-events-none absolute bottom-[-18px] left-[0px] w-[525px] max-w-none object-contain opacity-100"
            />

            <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-[48px] lg:grid-cols-[1fr_2fr]">
                {/* LEFT TEXT */}
                <div className="self-start pt-[16px] text-left">
                    <p className="text-[13px] font-bold uppercase tracking-[0.5px] text-[#c9971d]">
                        PORTFOLIO MANAGEMENT
                    </p>

                    <h2 className="mt-[14px] max-w-[520px] font-serif text-[33px] font-normal leading-[1.16] tracking-[-0.7px] text-[#071f52]">
                        Investment Portfolios
                        <br />
                        Built Around Your Life Goals
                    </h2>
                </div>

                {/* CARDS */}
                <div className="grid grid-cols-1 gap-[18px] md:grid-cols-3">
                    {cards.map((card) => {
                        const Icon = card.icon

                        return (
                            <div
                                key={card.title}
                                className={`flex min-h-[238px] flex-col items-center justify-center rounded-[16px] ${card.cardBg} px-[30px] py-[28px] text-center`}
                            >
                                <div
                                    className={`flex h-[76px] w-[76px] items-center justify-center rounded-full ${card.iconBg} text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.22)]`}
                                >
                                    <Icon size={38} strokeWidth={1.7} />
                                </div>

                                <h3 className="mt-[18px] whitespace-nowrap text-[19px] font-bold leading-tight text-[#071f52]">
                                    {card.title}
                                </h3>

                                <p className="mt-[10px] max-w-[220px] text-[13.5px] font-medium leading-[21px] text-slate-700">
                                    {card.text}
                                </p>

                                <button className="mt-[18px] text-[#071f52]">
                                    <ArrowRight size={28} strokeWidth={2.5} />
                                </button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section >
    )
}