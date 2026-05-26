import { ArrowRight, CheckCircle } from "lucide-react"
import deviceImage from "../assets/digital-access-devices.png"

const featuresLeft = [
    "Consolidated Portfolio View",
    "Real-Time Portfolio Valuation",
    "Goal Progress Tracking",
]

const featuresRight = [
    "Download Statements & Reports",
    "Secure & Easy Login",
    "Mobile Friendly Access",
]

export default function DigitalAccess() {
    return (
        <section className="relative overflow-hidden bg-[linear-gradient(180deg,#edf4fd_0%,#f4f8ff_100%)] px-0 py-[28px]">
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center lg:grid-cols-[0.9fr_1.45fr]">
                {/* LEFT CONTENT */}
                <div className="z-10 px-8 lg:pl-[34px]">
                    <p className="text-[13px] font-bold uppercase tracking-[0.6px] text-[#003b9e]">
                        DIGITAL PORTFOLIO ACCESS
                    </p>

                    <h2 className="mt-[14px] font-serif text-[32px] font-normal leading-[1.08] tracking-[-0.8px] text-[#071f52]">
                        Your Wealth.
                        <br />
                        Always Within Reach.
                    </h2>

                    <p className="mt-[16px] max-w-[430px] text-[14px] font-medium leading-[23px] text-[#061d49]/85">
                        Monitor your portfolio, track performance and access reports
                        anytime, anywhere through our secure online platform.
                    </p>

                    <div className="mt-[22px] grid max-w-[560px] grid-cols-1 gap-x-8 gap-y-[12px] md:grid-cols-2">
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
                    </div>

                    <button className="mt-[24px] flex h-[44px] items-center gap-3 rounded-[5px] bg-[#003b9e] px-[34px] text-[14px] font-bold text-white shadow-[0_12px_24px_rgba(0,59,158,0.22)]">
                        Request a Demo
                        <ArrowRight size={16} strokeWidth={2.4} />
                    </button>
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative min-h-[330px]  items-end">
                    <img
                        src={deviceImage}
                        alt="Digital portfolio dashboard"
                        className="absolute bottom-[-80px] right-[-120px] w-[820px] max-w-none object-contain"
                    />
                </div>
            </div>
        </section>
    )
}

function Feature({ text }) {
    return (
        <div className="flex items-center gap-[9px] text-[13.5px] font-semibold text-[#061d49]">
            <CheckCircle
                size={17}
                strokeWidth={2.5}
                className="shrink-0 fill-[#003b9e] text-white"
            />
            <span>{text}</span>
        </div>
    )
}