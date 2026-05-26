import { BarChart3, HandCoins, ShieldCheck } from "lucide-react"

const cards = [
    [BarChart3, "Wealth Creation", "For long-term capital appreciation through diversified equity exposure."],
    [HandCoins, "Income Generation", "Designed for investors seeking stable and predictable cash flows."],
    [ShieldCheck, "Capital Preservation", "Focused on protecting wealth while maintaining reasonable growth."],
]

export default function Portfolio() {
    return (
        <section className="px-8 py-16 text-center">
            <p className="text-sm font-bold text-[#c18a00]">PORTFOLIO MANAGEMENT</p>
            <h2 className="font-serif text-4xl font-bold text-[#071f52]">
                Investment Portfolios Built Around Your Life Goals
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                No two investors are alike. We design investment portfolios aligned with your goals,
                risk appetite, liquidity needs and long-term aspirations.
            </p>

            <div className="mx-auto mt-10 grid max-w-5xl gap-8 md:grid-cols-3">
                {cards.map(([Icon, title, text], i) => (
                    <div key={title} className="rounded-xl border border-slate-200 bg-white p-8 text-left shadow-sm">
                        <div className={`mb-5 flex h-16 w-16 items-center justify-center rounded-full ${i === 1 ? "bg-[#c99a20]" : "bg-[#003b9e]"} text-white`}>
                            <Icon size={30} />
                        </div>
                        <h3 className="font-serif text-xl font-bold text-[#071f52]">{title}</h3>
                        <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
                        <button className="mt-5 text-sm font-bold text-[#003b9e]">Learn More →</button>
                    </div>
                ))}
            </div>

            <button className="mt-10 rounded-md bg-[#003b9e] px-8 py-3 text-sm font-semibold text-white">
                Discuss Your Portfolio
            </button>
        </section>
    )
}