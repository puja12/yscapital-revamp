import {
    ArrowRight,
    ShieldCheck,
    Landmark,
    Users,
    IndianRupee,
    SearchCheck,
    HandCoins,
} from "lucide-react"
import { motion } from "framer-motion"

import heroBg from "../assets/serene-sunset-with-stones-background-light.png"

const stats = [
    [ShieldCheck, "AMFI Registered", "Mutual Fund Distributor"],
    [Landmark, "AMFI Registered", "SIF Distributor"],
    [Users, "500+", "Families Served"],
    [IndianRupee, "₹ XXX Cr+", "Assets Guided"],
    [SearchCheck, "Research Driven", "Investments"],
    [HandCoins, "Personalized", "Advisory"],
]

export default function Hero() {
    return (
        <section className="relative min-h-[860px] overflow-hidden bg-white pt-[86px] sm:min-h-[760px] lg:min-h-[700px] lg:pt-[92px]">
            <motion.img
                src={heroBg}
                alt=""
                initial={{ scale: 1.08, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                className="absolute inset-0 h-full w-full object-cover object-[62%_center] sm:object-center"
            />

            <div className="absolute inset-0 bg-white/20 sm:bg-white/10" />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="max-w-[540px] pt-[58px] sm:pt-[72px] lg:pt-[82px]"
                >

                    <h1 className="font-serif text-[38px] font-normal leading-[1.08] tracking-[-0.8px] text-[#071f52] sm:text-[46px] lg:text-[54px] lg:leading-[1.05] lg:tracking-[-1.4px]">
                        Growing Wealth.
                        <br />
                        <span className="text-[#c9971d]">
                            Preserving Legacies.
                        </span>
                    </h1>

                    <div className="mt-[18px] h-[2px] w-[60px] bg-[#c9971d] sm:mt-[22px] sm:w-[66px]" />

                    <p className="mt-[18px] max-w-[470px] text-[14px] font-medium leading-[23px] text-[#061d49] sm:mt-[22px] sm:text-[16px] sm:leading-[25px]">
                        Helping HNIs, professionals and business families build disciplined
                        investment portfolios through Mutual Funds, SIFs and goal-based
                        wealth strategies.
                    </p>

                    <div className="mt-[24px] flex flex-col gap-3 sm:mt-[28px] sm:flex-row sm:gap-4">
                        <motion.button
                            whileHover={{ y: -2, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex h-[46px] items-center justify-center gap-3 rounded-[5px] bg-[#003b9e] px-[24px] text-[13px] font-bold text-white shadow-[0_12px_24px_rgba(0,59,158,0.24)]"
                        >
                            Schedule Consultation
                            <ArrowRight size={15} />
                        </motion.button>

                        <motion.button
                            whileHover={{ y: -2, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex h-[46px] items-center justify-center gap-3 rounded-[5px] border border-[#003b9e] bg-white/80 px-[24px] text-[13px] font-bold text-[#003b9e] backdrop-blur-sm"
                        >
                            Explore Services
                            <ArrowRight size={15} />
                        </motion.button>

                    </div>


                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute bottom-[18px] left-1/2 w-[92%] max-w-7xl -translate-x-1/2 rounded-[16px] border border-white/12 bg-[#02122b]/72 px-4 py-[16px] shadow-[0_20px_40px_rgba(1,8,20,0.18)] backdrop-blur-[10px] sm:px-6"
            >
                <div className="grid grid-cols-2 gap-y-5 sm:grid-cols-3 lg:grid-cols-6 lg:gap-y-0">
                    {stats.map(([Icon, title, sub], index) => (
                        <div
                            key={title + sub}
                            className={`flex flex-col items-center justify-center px-3 text-center lg:px-4 ${index !== stats.length - 1
                                ? "lg:border-r lg:border-white/12"
                                : ""
                                }`}
                        >
                            <Icon
                                size={28}
                                strokeWidth={1.7}
                                className="mb-2 text-[#d4a128] sm:size-[32px] lg:size-[34px]"
                            />

                            <h4 className="text-[12px] font-bold leading-tight text-white sm:text-[13px]">
                                {title}
                            </h4>

                            <p className="mt-1 text-[11px] leading-tight text-white/90 sm:text-[12px]">
                                {sub}
                            </p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}