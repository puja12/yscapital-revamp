import {
    Users,
    ClipboardList,
    PieChart,
    Send,
    TrendingUp,
} from "lucide-react"

const steps = [
    [Users, "Discovery Meeting", "Understand goals, concerns and aspirations."],
    [ClipboardList, "Risk Assessment", "Evaluate risk profile and investment suitability."],
    [PieChart, "Portfolio Design", "Create customized recommendations aligned with goals."],
    [Send, "Implementation", "Execute the investment strategy efficiently."],
    [TrendingUp, "Ongoing Review", "Monitor, review and rebalance regularly for long-term success."],
]

export default function Process() {
    return (
        <section className="bg-[#f1f7ff] px-6 py-[42px] text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.5px] text-[#c9971d]">
                OUR PROCESS
            </p>

            <h2 className="mt-2 font-serif text-[34px] font-bold leading-tight text-[#08245c]">
                A Clear Process. A Confident Future.
            </h2>

            <div className="relative mx-auto mt-[34px] grid max-w-[1060px] grid-cols-1 gap-10 md:grid-cols-5 md:gap-0">
                {/* dotted connecting line */}
                <div className="absolute left-[9%] right-[9%] top-[42px] hidden border-t-2 border-dashed border-[#8fa9d5] md:block" />

                {steps.map(([Icon, title, text], index) => (
                    <div key={title} className="relative z-10 text-center">
                        <div className="relative mx-auto mb-[18px] flex h-[74px] w-[74px] items-center justify-center rounded-full border border-[#bed0ec] bg-[#f8fbff] text-[#003b9e] shadow-[0_1px_4px_rgba(15,23,42,0.04)]">
                            <Icon size={34} strokeWidth={2.3} />

                            <span className="absolute -top-[18px] left-1/2 flex h-[29px] w-[29px] -translate-x-1/2 items-center justify-center rounded-[6px] border border-[#bed0ec] bg-white text-[16px] font-bold leading-none text-[#003b9e] shadow-sm">
                                {index + 1}
                            </span>
                        </div>

                        <h3 className="text-[16px] font-bold leading-tight text-[#08245c]">
                            {title}
                        </h3>

                        <p className="mx-auto mt-[8px] max-w-[150px] text-[13.5px] font-medium leading-[22px] text-slate-600">
                            {text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}