import { motion } from "framer-motion"
import { ArrowRight, CheckCircle } from "lucide-react"
import bgTexture from "../assets/background-img.png"
import deviceImage from "../assets/digital-access-devices.png"

const featuresLeft = [
    "Consolidated Portfolio View",
    "Real-Time Portfolio Valuation",
    "Goal Progress Tracking",
]

const featuresRight = [
    "Download Reports",
    "Secure & Easy Login",
    "Mobile Friendly Access",
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
        y: 34,
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

export default function DigitalAccess() {
    return (
        <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="relative overflow-hidden px-0 py-[42px] lg:py-[28px]"
        >
            {/* BACKGROUND IMAGE */}
            <motion.img
                src={bgTexture}
                alt=""
                initial={{ opacity: 0, scale: 1.08 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="absolute inset-0 h-full w-full object-cover opacity-100"
            />

            {/* LIGHT OVERLAY */}
            <div className="absolute inset-0 bg-white/[0.04]" />

            <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.45fr] lg:gap-0 lg:px-0">
                {/* LEFT CONTENT */}
                <motion.div variants={container} className="z-10 lg:pl-[34px]">
                    <motion.p
                        variants={fadeUp}
                        className="text-[12px] font-bold uppercase tracking-[0.6px] text-[#003b9e] sm:text-[13px]"
                    >
                        DIGITAL PORTFOLIO ACCESS
                    </motion.p>

                    <motion.h2
                        variants={fadeUp}
                        className="mt-[12px] font-serif text-[30px] font-normal leading-[1.08] tracking-[-0.8px] text-[#071f52] sm:mt-[14px] sm:text-[32px]"
                    >
                        Your Wealth.
                        <br />
                        Always Within Reach.
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        className="mt-[14px] max-w-[430px] text-[13.5px] font-medium leading-[22px] text-[#061d49]/85 sm:mt-[16px] sm:text-[14px] sm:leading-[23px]"
                    >
                        Monitor your portfolio, track performance and access reports
                        anytime, anywhere through our secure online platform.
                    </motion.p>

                    <motion.div
                        variants={container}
                        className="mt-[20px] grid max-w-[560px] grid-cols-1 gap-y-[12px] sm:mt-[22px] md:grid-cols-2 md:gap-x-8"
                    >
                        <div className="space-y-[12px]">
                            {featuresLeft.map((item) => (
                                <Feature key={item} text={item} />
                            ))}
                        </div>

                        <div className="space-y-[12px]">
                            {featuresRight.map((item) => (
                                <Feature key={item} text={item} />
                            ))}
                        </div>
                    </motion.div>

                    <motion.button
                        variants={fadeUp}
                        whileHover={{ y: -3, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-[22px] flex h-[44px] w-full items-center justify-center gap-3 rounded-[5px] bg-[#003b9e] px-[28px] text-[14px] font-bold text-white shadow-[0_12px_24px_rgba(0,59,158,0.22)] sm:mt-[24px] sm:w-auto sm:px-[34px]"
                    >
                        Request a Demo
                        <ArrowRight size={16} strokeWidth={2.4} />
                    </motion.button>
                </motion.div>

                {/* RIGHT IMAGE */}
                <motion.div
                    initial={{ opacity: 0, x: 80, scale: 0.96 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.25 }}
                    viewport={{ once: true }}
                    className="relative min-h-[260px] sm:min-h-[330px] lg:min-h-[330px]"
                >
                    <motion.img
                        src={deviceImage}
                        alt="Digital portfolio dashboard"
                        animate={{
                            y: [0, -10, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute bottom-[-55px] left-1/2 w-[620px] max-w-none -translate-x-1/2 object-contain sm:bottom-[-70px] sm:w-[760px] lg:bottom-[-80px] lg:left-auto lg:right-[-120px] lg:w-[820px] lg:translate-x-0"
                    />
                </motion.div>
            </div>
        </motion.section>
    )
}

function Feature({ text }) {
    return (
        <motion.div
            variants={fadeUp}
            whileHover={{ x: 5 }}
            className="flex items-start gap-[9px] text-[13px] font-semibold leading-[20px] text-[#061d49] sm:text-[13.5px]"
        >
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 220, damping: 14 }}
                viewport={{ once: true }}
            >
                <CheckCircle
                    size={17}
                    strokeWidth={2.5}
                    className="mt-[2px] shrink-0 fill-[#003b9e] text-white"
                />
            </motion.div>

            <span>{text}</span>
        </motion.div>
    )
}