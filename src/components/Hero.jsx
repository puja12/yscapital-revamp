import {
    ArrowRight,
    ShieldCheck,
    Landmark,
    Users,
    IndianRupee,
    SearchCheck,
    HandCoins,
} from "lucide-react"

import heroBg from "../assets/serene-sunset-with-stones-background.png"

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
        <section className="relative min-h-[700px] overflow-hidden bg-white pt-[92px]">
            {/* BACKGROUND IMAGE */}
            <img
                src={heroBg}
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-center"
            />

            {/* light overlay */}
            <div className="absolute inset-0 bg-white/10" />

            <div className="relative mx-auto max-w-7xl px-8">
                {/* CONTENT */}
                <div className="max-w-[540px] pt-[82px]">
                    <h1 className="font-serif text-[54px] font-normal leading-[1.05] tracking-[-1.4px] text-[#071f52]">
                        Growing Wealth.
                        <br />
                        <span className="text-[#c9971d]">
                            Preserving Legacies.
                        </span>
                    </h1>

                    <div className="mt-[22px] h-[2px] w-[66px] bg-[#c9971d]" />

                    <p className="mt-[22px] max-w-[470px] text-[16px] font-medium leading-[25px] text-[#061d49]">
                        Helping HNIs, professionals and business families build disciplined
                        investment portfolios through Mutual Funds, SIFs and goal-based
                        wealth strategies.
                    </p>

                    <div className="mt-[28px] flex gap-4">
                        <button className="flex h-[46px] items-center gap-3 rounded-[5px] bg-[#003b9e] px-[24px] text-[13px] font-bold text-white shadow-[0_12px_24px_rgba(0,59,158,0.24)]">
                            Schedule Consultation
                            <ArrowRight size={15} />
                        </button>

                        <button className="flex h-[46px] items-center gap-3 rounded-[5px] border border-[#003b9e] bg-white/80 px-[24px] text-[13px] font-bold text-[#003b9e] backdrop-blur-sm">
                            Explore Services
                            <ArrowRight size={15} />
                        </button>
                    </div>
                </div>


            </div>
            {/* STATS BAR */}
            <div className="absolute bottom-[15px] left-1/2 w-full max-w-7xl -translate-x-1/2 rounded-[16px] border border-white/12 bg-[#02122b]/68 px-6 py-[16px] shadow-[0_20px_40px_rgba(1,8,20,0.18)] backdrop-blur-[10px]">
                <div className="grid grid-cols-6">
                    {stats.map(([Icon, title, sub], index) => (
                        <div
                            key={title + sub}
                            className={`flex flex-col items-center justify-center px-4 text-center ${index !== stats.length - 1
                                ? "border-r border-white/12"
                                : ""
                                }`}
                        >
                            <Icon
                                size={34}
                                strokeWidth={1.7}
                                className="mb-3 text-[#d4a128]"
                            />

                            <h4 className="text-[13px] font-bold leading-tight text-white">
                                {title}
                            </h4>

                            <p className="mt-1 text-[12px] leading-tight text-white/90">
                                {sub}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}