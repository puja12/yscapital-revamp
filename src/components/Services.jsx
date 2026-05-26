import {
    ClipboardList,
    Landmark,
    Target,
    BadgePercent,
    BarChart3,
    Users,
    ArrowRight,
} from "lucide-react"

const services = [
    {
        icon: ClipboardList,
        title: "Mutual Fund Advisory",
        text: "Research-backed solutions across market cycles.",
        color: "bg-[#003b9e]",
    },
    {
        icon: Landmark,
        title: "SIF Solutions",
        text: "Access curated Structured Investment Opportunities.",
        color: "bg-[#c9971d]",
    },
    {
        icon: Target,
        title: "Goal Planning",
        text: "Plan for your life goals with clarity and confidence.",
        color: "bg-[#3f7f32]",
    },
    {
        icon: BadgePercent,
        title: "Tax-Efficient Investing",
        text: "Optimise returns through smart tax strategies.",
        color: "bg-[#003b9e]",
    },
    {
        icon: BarChart3,
        title: "Portfolio Review",
        text: "Review and rebalance for better outcomes.",
        color: "bg-[#c9971d]",
    },
    {
        icon: Users,
        title: "Family Wealth Planning",
        text: "Multi-generational wealth planning & governance.",
        color: "bg-[#3f7f32]",
    },
]

export default function Services() {
    return (
        <section className="bg-white px-6 py-[36px]">
            <p className="text-center text-[11px] font-bold uppercase tracking-[0.7px] text-[#003b9e]">
                CORE SERVICES
            </p>

            <h2 className="mt-[6px] text-center font-serif text-[32px] font-normal leading-tight tracking-[-0.6px] text-[#071f52]">
                Comprehensive Wealth Solutions
            </h2>

            <div className="mx-auto mt-[22px] grid max-w-7xl grid-cols-1 gap-[16px] md:grid-cols-3 lg:grid-cols-6">
                {services.map((service) => {
                    const Icon = service.icon

                    return (
                        <div
                            key={service.title}
                            className="flex min-h-[185px] flex-col items-center rounded-[10px] border border-[#e1e5ee] bg-white px-[18px] py-[20px] text-center shadow-[0_2px_8px_rgba(15,23,42,0.03)]"
                        >
                            <div
                                className={`flex h-[46px] w-[46px] items-center justify-center rounded-full ${service.color} text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)]`}
                            >
                                <Icon size={24} strokeWidth={1.8} />
                            </div>

                            <h3 className="mt-[13px] min-h-[38px] text-[14px] font-bold leading-[18px] text-[#071f52]">
                                {service.title}
                            </h3>

                            <p className="mt-[10px] min-h-[42px] text-[11.5px] font-medium leading-[18px] text-slate-600">
                                {service.text}
                            </p>

                            <button className="mt-auto pt-[12px] text-[#071f52]">
                                <ArrowRight size={24} strokeWidth={2.3} />
                            </button>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}