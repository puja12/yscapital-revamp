import { motion } from "framer-motion"

import {
    Users,
    Building2,
    Handshake,
    BadgeCheck,
    Home,
    FileCheck,
    ClipboardCheck,
    RefreshCcw,
} from "lucide-react"

import processBg from "../assets/process-mountain-bg.png"

const whyItems = [
    [
        Users,
        "Personalized Advisory",
        "Solutions tailored to your unique goals and aspirations.",
    ],
    [
        Building2,
        "Research Driven Process",
        "Rigorous research and data-driven investment decisions.",
    ],
    [
        Handshake,
        "Long-Term Partnership",
        "We grow when you grow. Committed to your financial journey.",
    ],
]

const steps = [
    [BadgeCheck, "Discovery Meeting", "Understanding your goals and priorities."],
    [Home, "Risk Assessment", "Evaluating risk profile and investment preferences."],
    [FileCheck, "Portfolio Design", "Crafting a customised investment strategy for you."],
    [ClipboardCheck, "Implementation", "Executing the strategy with the right investments."],
    [RefreshCcw, "Review & Monitoring", "Continuous monitoring and periodic portfolio review."],
]

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
}

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
}

export default function TrustProcessSection() {
    return (
        <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="relative overflow-hidden bg-[#f4f8ff]"
        >
            {/* RIGHT BACKGROUND IMAGE */}
            <motion.img
                initial={{ opacity: 0, scale: 1.08 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                src={processBg}
                alt=""
                className="absolute right-0 top-0 h-full w-[46%] object-cover object-right"
            />

            {/* IMAGE FADE */}
            <div className="absolute right-[32%] top-0 h-full w-[260px] bg-gradient-to-r from-[#f4f8ff] to-transparent" />
            <div className="absolute inset-0 bg-white/20" />

            <div className="relative mx-auto grid min-h-[330px] max-w-7xl grid-cols-1 lg:grid-cols-[0.33fr_0.67fr]">
                {/* LEFT SECTION */}
                <motion.div
                    variants={container}
                    className="border-r border-[#d7dfec] px-8 py-[36px]"
                >
                    <motion.p
                        variants={fadeUp}
                        className="text-[10px] font-bold uppercase tracking-[0.7px] text-[#003b9e]"
                    >
                        WHY YS CAPITAL
                    </motion.p>

                    <motion.h2
                        variants={fadeUp}
                        className="mt-[8px] font-serif text-[25px] font-normal leading-[1.08] tracking-[-0.5px] text-[#071f52]"
                    >
                        A Partnership
                        <br />
                        Built on Trust
                    </motion.h2>

                    <div className="mt-[18px] space-y-[15px]">
                        {whyItems.map(([Icon, title, text]) => (
                            <motion.div
                                key={title}
                                variants={fadeUp}
                                whileHover={{
                                    x: 6,
                                    transition: { duration: 0.25 },
                                }}
                                className="flex gap-[13px]"
                            >
                                <motion.div
                                    whileHover={{
                                        scale: 1.08,
                                        rotate: 6,
                                    }}
                                    className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-[#003b9e] text-[#003b9e]"
                                >
                                    <Icon size={21} strokeWidth={1.8} />
                                </motion.div>

                                <div>
                                    <h3 className="text-[13px] font-bold leading-tight text-[#071f52]">
                                        {title}
                                    </h3>

                                    <p className="mt-[3px] max-w-[230px] text-[11.5px] font-medium leading-[16px] text-slate-600">
                                        {text}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* RIGHT PROCESS */}
                <motion.div
                    variants={container}
                    className="relative px-8 py-[36px]"
                >
                    <motion.p
                        variants={fadeUp}
                        className="text-[10px] font-bold uppercase tracking-[0.7px] text-[#003b9e]"
                    >
                        OUR PROCESS
                    </motion.p>

                    <motion.h2
                        variants={fadeUp}
                        className="mt-[8px] font-serif text-[27px] font-normal leading-[1.08] tracking-[-0.5px] text-[#071f52]"
                    >
                        A Clear Process.
                        <br />
                        A Confident Future.
                    </motion.h2>

                    <div className="relative mt-[38px] grid max-w-[760px] grid-cols-5">
                        {/* animated dotted line */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="absolute left-[8%] right-[8%] top-[32px] origin-left border-t-2 border-dotted border-[#8fa9d5]"
                        />

                        {steps.map(([Icon, title, text], index) => (
                            <motion.div
                                key={title}
                                variants={fadeUp}
                                whileHover={{ y: -6 }}
                                className="relative z-10 text-center"
                            >
                                <motion.div
                                    initial={{ scale: 0.7, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{
                                        duration: 0.45,
                                        delay: index * 0.12,
                                    }}
                                    viewport={{ once: true }}
                                    whileHover={{
                                        scale: 1.08,
                                        rotate: 4,
                                    }}
                                    className="relative mx-auto flex h-[58px] w-[58px] items-center justify-center rounded-full border border-[#d6deea] bg-white/80 text-[#003b9e] shadow-sm backdrop-blur"
                                >
                                    <Icon size={23} strokeWidth={1.8} />

                                    <motion.span
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{
                                            delay: index * 0.12 + 0.2,
                                            type: "spring",
                                        }}
                                        viewport={{ once: true }}
                                        className="absolute -top-[15px] left-1/2 flex h-[28px] w-[28px] -translate-x-1/2 items-center justify-center rounded-full bg-[#003b9e] text-[12px] font-bold text-white"
                                    >
                                        {index + 1}
                                    </motion.span>
                                </motion.div>

                                <h3 className="mt-[14px] text-[12px] font-bold leading-[15px] text-[#071f52]">
                                    {title}
                                </h3>

                                <p className="mx-auto mt-[6px] max-w-[105px] text-[10px] font-medium leading-[14px] text-slate-600">
                                    {text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
}