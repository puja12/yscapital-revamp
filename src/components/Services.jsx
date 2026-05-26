import { BarChart3, Layers, Target, Percent, PieChart, Users } from "lucide-react"

const services = [
    [BarChart3, "Mutual Fund Advisory", "Research-backed fund selection and continuous monitoring."],
    [Layers, "SIF Solutions", "Structured Investment Fund opportunities aligned with your objectives."],
    [Target, "Goal Planning", "Education, retirement and major life milestones financially secured."],
    [Percent, "Tax-Efficient Investing", "Strategies designed to improve post-tax returns."],
    [PieChart, "Portfolio Review", "Comprehensive assessment of existing investments and performance."],
    [Users, "Family Wealth Planning", "Multi-generational wealth management and succession planning."],
]

export default function Services() {
    return (
        <section className="px-8 py-16">
            <p className="text-center text-sm font-bold text-[#c18a00]">CORE SERVICES</p>
            <h2 className="text-center font-serif text-4xl font-bold text-[#071f52]">
                Comprehensive Wealth Solutions
            </h2>

            <div className="mx-auto mt-10 grid max-w-6xl gap-5 md:grid-cols-3">
                {services.map(([Icon, title, text]) => (
                    <div key={title} className="flex gap-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#eef4ff] text-[#003b9e]">
                            <Icon size={30} />
                        </div>
                        <div>
                            <h3 className="font-serif text-lg font-bold text-[#071f52]">{title}</h3>
                            <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}