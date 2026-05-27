import {
    ClipboardList,
    Landmark,
    Target,
    BadgePercent,
    BarChart3,
    Users,
    ArrowRight,
} from "lucide-react"
import { motion } from "framer-motion"

const services = [
    {
        icon: ClipboardList,
        title: "Mutual Fund Advisory",
        text: "Research-backed solutions across market cycles.",
        color: "bg-[#eef2f7]",
        iconColor: "text-[#5b6578]",
    },
    {
        icon: Landmark,
        title: "SIF Solutions",
        text: "Access curated Structured Investment Opportunities.",
        color: "bg-[#eef2f7]",
        iconColor: "text-[#5b6578]",
    },
    {
        icon: Target,
        title: "Goal Planning",
        text: "Plan for your life goals with clarity and confidence.",
        color: "bg-[#eef2f7]",
        iconColor: "text-[#5b6578]",
    },
    {
        icon: BadgePercent,
        title: "Tax-Efficient Investing",
        text: "Optimise returns through smart tax strategies.",
        color: "bg-[#eef2f7]",
        iconColor: "text-[#5b6578]",
    },
    {
        icon: BarChart3,
        title: "Portfolio Review",
        text: "Review and rebalance for better outcomes.",
        color: "bg-[#eef2f7]",
        iconColor: "text-[#5b6578]",
    },
    {
        icon: Users,
        title: "Family Wealth Planning",
        text: "Multi-generational wealth planning & governance.",
        color: "bg-[#eef2f7]",
        iconColor: "text-[#5b6578]",
    },
]

export default function Services() {
    return (
        <section className="bg-white px-6 py-[36px]">
            <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                viewport={{ once: true }}
                className="text-center text-[11px] font-bold uppercase tracking-[0.7px] text-[#003b9e]"
            >
                CORE SERVICES
            </motion.p>

            <motion.h2
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 }}
                viewport={{ once: true }}
                className="mt-[6px] text-center font-serif text-[32px] font-normal leading-tight tracking-[-0.6px] text-[#071f52]"
            >
                Comprehensive Wealth Solutions
            </motion.h2>

            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={{
                    hidden: {},
                    show: {
                        transition: {
                            staggerChildren: 0.08,
                        },
                    },
                }}
                className="mx-auto mt-[22px] grid max-w-7xl grid-cols-1 gap-[16px] md:grid-cols-3 lg:grid-cols-6"
            >
                {services.map((service) => {
                    const Icon = service.icon

                    return (
                        <motion.div
                            key={service.title}
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 35,
                                    scale: 0.96,
                                },
                                show: {
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                },
                            }}
                            transition={{
                                duration: 0.55,
                                ease: "easeOut",
                            }}
                            whileHover={{
                                y: -8,
                                scale: 1.03,
                            }}
                            className="group flex min-h-[185px] cursor-pointer flex-col items-center rounded-[10px] border border-[#e1e5ee] bg-white px-[18px] py-[20px] text-center shadow-[0_2px_8px_rgba(15,23,42,0.03)] transition-shadow duration-300 hover:shadow-[0_18px_35px_rgba(15,23,42,0.1)]"
                        >
                            <motion.div
                                whileHover={{ rotate: 8, scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 250 }}
                                className={`flex h-[46px] w-[46px] items-center justify-center rounded-full ${service.color} ${service.iconColor}`}
                            >
                                <Icon size={24} strokeWidth={1.8} />
                            </motion.div>

                            <h3 className="mt-[13px] min-h-[38px] text-[14px] font-bold leading-[18px] text-[#071f52]">
                                {service.title}
                            </h3>

                            <p className="mt-[10px] min-h-[42px] text-[11.5px] font-medium leading-[18px] text-slate-600">
                                {service.text}
                            </p>

                            <motion.button
                                whileHover={{ x: 5 }}
                                className="mt-auto pt-[12px] text-[#071f52]"
                            >
                                <ArrowRight size={24} strokeWidth={2.3} />
                            </motion.button>
                        </motion.div>
                    )
                })}
            </motion.div>
        </section>
    )
}