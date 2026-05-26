import { Users, ClipboardList, PieChart, Send, TrendingUp } from "lucide-react"

const steps = [
    [Users, "Discovery Meeting", "Understand goals, concerns and aspirations."],
    [ClipboardList, "Risk Assessment", "Evaluate risk profile and investment suitability."],
    [PieChart, "Portfolio Design", "Create customized recommendations aligned with goals."],
    [Send, "Implementation", "Execute the investment strategy efficiently."],
    [TrendingUp, "Ongoing Review", "Monitor, review and rebalance regularly for long-term success."],
]

export default function Process() {
    return (
        <section className="bg-[#eef5ff] px-8 py-16 text-center">
            <p className="text-sm font-bold text-[#c18a00]">OUR PROCESS</p>
            <h2 className="font-serif text-4xl font-bold text-[#071f52]">
                A Clear Process. A Confident Future.
            </h2>

            <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-5">
                {steps.map(([Icon, title, text], index) => (
                    <div key={title} className="relative">
                        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-[#9bb7e8] bg-white text-[#003b9e]">
                            <Icon size={34} />
                        </div>
                        <span className="absolute left-1/2 top-[-10px] rounded-md border bg-white px-2 text-sm font-bold text-[#003b9e]">
                            {index + 1}
                        </span>
                        <h3 className="font-bold text-[#071f52]">{title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}