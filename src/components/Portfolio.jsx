import { Sprout, BadgeIndianRupee, Shield, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
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
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="pointer-events-none absolute bottom-[-40px] left-[-60px] h-[350px] w-[300px] rounded-full bg-[#dcefd7] blur-[75px]"
            />

            <motion.img
                src={leafImage}
                alt=""
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="pointer-events-none absolute bottom-[-18px] left-[0px] w-[525px] max-w-none object-contain opacity-100"
            />

            <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-[48px] lg:grid-cols-[1fr_2fr]">
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="self-start pt-[16px] text-left"
                >
                    <p className="text-[13px] font-bold uppercase tracking-[0.5px] text-[#c9971d]">
                        PORTFOLIO MANAGEMENT
                    </p>

                    <h2 className="mt-[14px] max-w-[520px] font-serif text-[33px] font-normal leading-[1.16] tracking-[-0.7px] text-[#071f52]">
                        Investment Portfolios
                        <br />
                        Built Around Your Life Goals
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 gap-[18px] md:grid-cols-3">
                    {cards.map((card, index) => {
                        const Icon = card.icon

                        return (
                            <motion.div
                                key={card.title}
                                initial={{ opacity: 0, y: 45 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.15,
                                    ease: "easeOut",
                                }}
                                whileHover={{
                                    y: -10,
                                    scale: 1.025,
                                }}
                                viewport={{ once: true }}
                                className={`group flex min-h-[238px] cursor-pointer flex-col items-center justify-center rounded-[16px] ${card.cardBg} px-[30px] py-[28px] text-center transition-shadow duration-300 hover:shadow-[0_20px_40px_rgba(15,23,42,0.12)]`}
                            >
                                <motion.div
                                    whileHover={{ rotate: 8, scale: 1.08 }}
                                    transition={{ type: "spring", stiffness: 250 }}
                                    className={`flex h-[76px] w-[76px] items-center justify-center rounded-full ${card.iconBg} text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.22)]`}
                                >
                                    <Icon size={38} strokeWidth={1.7} />
                                </motion.div>

                                <h3 className="mt-[18px] whitespace-nowrap text-[19px] font-bold leading-tight text-[#071f52]">
                                    {card.title}
                                </h3>

                                <p className="mt-[10px] max-w-[220px] text-[13.5px] font-medium leading-[21px] text-slate-700">
                                    {card.text}
                                </p>

                                <motion.button
                                    whileHover={{ x: 5 }}
                                    className="mt-[18px] text-[#071f52]"
                                >
                                    <ArrowRight size={28} strokeWidth={2.5} />
                                </motion.button>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}