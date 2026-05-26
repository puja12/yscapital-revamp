import {
    ArrowRight,
    Calculator,
    BadgeDollarSign,
    CalendarDays,
} from "lucide-react"

import marketImg from "../assets/article-market.jpg"
import goalsImg from "../assets/article-goals.jpg"
import wealthImg from "../assets/article-wealth.jpg"

const articles = [
    {
        image: marketImg,
        title: "Market Outlook 2024: Key Trends To Watch",
        date: "May 10, 2024",
    },
    {
        image: goalsImg,
        title: "How To Plan Your Financial Goals Better",
        date: "May 03, 2024",
    },
    {
        image: wealthImg,
        title: "Wealth Creation Strategies For Long-Term Success",
        date: "April 28, 2024",
    },
]

const calculators = [
    {
        icon: Calculator,
        title: "SIP Calculator",
        text: "Calculate potential returns on your SIP investments.",
        color: "text-[#003b9e]",
    },
    {
        icon: BadgeDollarSign,
        title: "Goal Calculator",
        text: "Plan for your financial goals with ease.",
        color: "text-[#3f7f32]",
    },
    {
        icon: CalendarDays,
        title: "Retirement Calculator",
        text: "Estimate your retirement corpus and plan accordingly.",
        color: "text-[#3f7f32]",
    },
]

export default function InsightsCalculators() {
    return (
        <section className="bg-white px-6 py-[34px]">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-[42px] lg:grid-cols-[1.1fr_0.9fr]">
                {/* LEFT ARTICLES */}
                <div>
                    <p className="text-[12px] font-bold uppercase tracking-[0.8px] text-[#003b9e]">
                        INSIGHTS THAT HELP YOU INVEST BETTER
                    </p>

                    <div className="mt-[24px] grid grid-cols-1 gap-[22px] md:grid-cols-3">
                        {articles.map((article) => (
                            <div
                                key={article.title}
                                className="overflow-hidden rounded-[10px] border border-[#e1e5ee] bg-white shadow-[0_2px_8px_rgba(15,23,42,0.03)]"
                            >
                                <img
                                    src={article.image}
                                    alt=""
                                    className="h-[112px] w-full object-cover"
                                />

                                <div className="px-[16px] py-[16px]">
                                    <h3 className="font-serif text-[19px] font-normal leading-[22px] tracking-[-0.3px] text-[#071f52]">
                                        {article.title}
                                    </h3>

                                    <p className="mt-[9px] text-[12px] font-medium text-slate-500">
                                        {article.date}
                                    </p>

                                    <button className="mt-[20px] flex items-center gap-[10px] text-[13px] font-bold text-[#003b9e]">
                                        Read More
                                        <ArrowRight size={15} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="mx-auto mt-[22px] flex items-center gap-[10px] text-[15px] font-bold text-[#003b9e]">
                        View All Articles
                        <ArrowRight size={18} />
                    </button>
                </div>

                {/* RIGHT CALCULATORS */}
                <div className="border-l border-[#e1e5ee] pl-[46px]">
                    <p className="text-[12px] font-bold uppercase tracking-[0.8px] text-[#003b9e]">
                        PLAN WITH CONFIDENCE
                    </p>

                    <h2 className="mt-[20px] max-w-[520px] font-serif text-[22px] font-normal leading-[30px] tracking-[-0.3px] text-[#071f52]">
                        Use our financial calculators to estimate future wealth, SIP growth
                        and retirement readiness.
                    </h2>

                    <div className="mt-[24px] grid grid-cols-1 gap-[20px] md:grid-cols-3">
                        {calculators.map((item) => {
                            const Icon = item.icon

                            return (
                                <div
                                    key={item.title}
                                    className="flex min-h-[175px] flex-col items-center justify-center rounded-[10px] border border-[#e1e5ee] bg-white px-[18px] py-[20px] text-center shadow-[0_2px_8px_rgba(15,23,42,0.03)]"
                                >
                                    <Icon
                                        size={42}
                                        strokeWidth={1.8}
                                        className={item.color}
                                    />

                                    <h3 className="mt-[14px] font-serif text-[18px] font-bold leading-[20px] text-[#071f52]">
                                        {item.title}
                                    </h3>

                                    <p className="mt-[12px] text-[12px] font-medium leading-[18px] text-slate-600">
                                        {item.text}
                                    </p>
                                </div>
                            )
                        })}
                    </div>

                    <button className="mx-auto mt-[20px] flex items-center gap-[10px] text-[15px] font-bold text-[#003b9e]">
                        Explore All Calculators
                        <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    )
}