import { motion } from "framer-motion"

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

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.14,
        },
    },
}

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 35,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
            ease: "easeOut",
        },
    },
}

export default function InsightsCalculators() {
    return (
        <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18 }}
            className="bg-white px-6 py-[34px]"
        >
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-[42px] lg:grid-cols-[1.1fr_0.9fr]">
                {/* LEFT ARTICLES */}
                <motion.div variants={container}>
                    <motion.p
                        variants={fadeUp}
                        className="text-[12px] font-bold uppercase tracking-[0.8px] text-[#003b9e]"
                    >
                        INSIGHTS THAT HELP YOU INVEST BETTER
                    </motion.p>

                    <motion.div
                        variants={container}
                        className="mt-[24px] grid grid-cols-1 gap-[22px] md:grid-cols-3"
                    >
                        {articles.map((article) => (
                            <motion.div
                                key={article.title}
                                variants={fadeUp}
                                whileHover={{
                                    y: -8,
                                    scale: 1.02,
                                    transition: { duration: 0.25 },
                                }}
                                className="overflow-hidden rounded-[10px] border border-[#e1e5ee] bg-white shadow-[0_2px_8px_rgba(15,23,42,0.03)]"
                            >
                                <motion.img
                                    src={article.image}
                                    alt=""
                                    whileHover={{ scale: 1.08 }}
                                    transition={{ duration: 0.4 }}
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
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.button
                        variants={fadeUp}
                        whileHover={{ x: 5 }}
                        className="mx-auto mt-[22px] flex items-center gap-[10px] text-[15px] font-bold text-[#003b9e]"
                    >
                        View All Articles
                        <ArrowRight size={18} />
                    </motion.button>
                </motion.div>

                {/* RIGHT CALCULATORS */}
                <motion.div
                    variants={container}
                    className="border-l border-[#e1e5ee] pl-[46px]"
                >
                    <motion.p
                        variants={fadeUp}
                        className="text-[12px] font-bold uppercase tracking-[0.8px] text-[#003b9e]"
                    >
                        PLAN WITH CONFIDENCE
                    </motion.p>

                    <motion.h2
                        variants={fadeUp}
                        className="mt-[20px] max-w-[520px] font-serif text-[22px] font-normal leading-[30px] tracking-[-0.3px] text-[#071f52]"
                    >
                        Use our financial calculators to estimate future wealth, SIP growth
                        and retirement readiness.
                    </motion.h2>

                    <motion.div
                        variants={container}
                        className="mt-[24px] grid grid-cols-1 gap-[20px] md:grid-cols-3"
                    >
                        {calculators.map((item) => {
                            const Icon = item.icon

                            return (
                                <motion.div
                                    key={item.title}
                                    variants={fadeUp}
                                    whileHover={{
                                        y: -8,
                                        scale: 1.03,
                                        transition: { duration: 0.25 },
                                    }}
                                    className="flex min-h-[175px] flex-col items-center justify-center rounded-[10px] border border-[#e1e5ee] bg-white px-[18px] py-[20px] text-center shadow-[0_2px_8px_rgba(15,23,42,0.03)]"
                                >
                                    <motion.div
                                        whileHover={{
                                            rotate: 8,
                                            scale: 1.1,
                                        }}
                                    >
                                        <Icon
                                            size={42}
                                            strokeWidth={1.8}
                                            className={item.color}
                                        />
                                    </motion.div>

                                    <h3 className="mt-[14px] font-serif text-[18px] font-bold leading-[20px] text-[#071f52]">
                                        {item.title}
                                    </h3>

                                    <p className="mt-[12px] text-[12px] font-medium leading-[18px] text-slate-600">
                                        {item.text}
                                    </p>
                                </motion.div>
                            )
                        })}
                    </motion.div>

                    <motion.button
                        variants={fadeUp}
                        whileHover={{ x: 5 }}
                        className="mx-auto mt-[20px] flex items-center gap-[10px] text-[15px] font-bold text-[#003b9e]"
                    >
                        Explore All Calculators
                        <ArrowRight size={18} />
                    </motion.button>
                </motion.div>
            </div>
        </motion.section>
    )
}