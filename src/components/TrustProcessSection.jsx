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

export default function TrustProcessSection() {
    return (
        <section className="relative overflow-hidden bg-[#f4f8ff]">
            {/* RIGHT BACKGROUND IMAGE */}
            <img
                src={processBg}
                alt=""
                className="absolute right-0 top-0 h-full w-[46%] object-cover object-right"
            />

            {/* IMAGE FADE */}
            <div className="absolute right-[32%] top-0 h-full w-[260px] bg-gradient-to-r from-[#f4f8ff] to-transparent" />
            <div className="absolute inset-0 bg-white/20" />

            <div className="relative mx-auto grid min-h-[330px] max-w-7xl grid-cols-1 lg:grid-cols-[0.33fr_0.67fr]">
                {/* LEFT WHY CHOOSE */}
                <div className="border-r border-[#d7dfec] px-8 py-[36px]">
                    <p className="text-[10px] font-bold uppercase tracking-[0.7px] text-[#003b9e]">
                        WHY YS CAPITAL
                    </p>

                    <h2 className="mt-[8px] font-serif text-[25px] font-normal leading-[1.08] tracking-[-0.5px] text-[#071f52]">
                        A Partnership
                        <br />
                        Built on Trust
                    </h2>

                    <div className="mt-[18px] space-y-[15px]">
                        {whyItems.map(([Icon, title, text]) => (
                            <div key={title} className="flex gap-[13px]">
                                <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-[#003b9e] text-[#003b9e]">
                                    <Icon size={21} strokeWidth={1.8} />
                                </div>

                                <div>
                                    <h3 className="text-[13px] font-bold leading-tight text-[#071f52]">
                                        {title}
                                    </h3>
                                    <p className="mt-[3px] max-w-[230px] text-[11.5px] font-medium leading-[16px] text-slate-600">
                                        {text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT PROCESS */}
                <div className="relative px-8 py-[36px]">
                    <p className="text-[10px] font-bold uppercase tracking-[0.7px] text-[#003b9e]">
                        OUR PROCESS
                    </p>

                    <h2 className="mt-[8px] font-serif text-[27px] font-normal leading-[1.08] tracking-[-0.5px] text-[#071f52]">
                        A Clear Process.
                        <br />
                        A Confident Future.
                    </h2>

                    <div className="relative mt-[38px] grid max-w-[760px] grid-cols-5">
                        {/* dotted line */}
                        <div className="absolute left-[8%] right-[8%] top-[32px] border-t-2 border-dotted border-[#8fa9d5]" />

                        {steps.map(([Icon, title, text], index) => (
                            <div key={title} className="relative z-10 text-center">
                                <div className="relative mx-auto flex h-[58px] w-[58px] items-center justify-center rounded-full border border-[#d6deea] bg-white/80 text-[#003b9e] shadow-sm backdrop-blur">
                                    <Icon size={23} strokeWidth={1.8} />

                                    <span className="absolute -top-[15px] left-1/2 flex h-[28px] w-[28px] -translate-x-1/2 items-center justify-center rounded-full bg-[#003b9e] text-[12px] font-bold text-white">
                                        {index + 1}
                                    </span>
                                </div>

                                <h3 className="mt-[14px] text-[12px] font-bold leading-[15px] text-[#071f52]">
                                    {title}
                                </h3>

                                <p className="mx-auto mt-[6px] max-w-[105px] text-[10px] font-medium leading-[14px] text-slate-600">
                                    {text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}