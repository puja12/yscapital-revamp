import { Briefcase, UserRound, Globe2, UserCheck } from "lucide-react"

const items = [
    [
        Briefcase,
        "Business Owners",
        "Managing surplus capital efficiently while planning future growth.",
    ],
    [
        UserRound,
        "Senior Professionals",
        "Building wealth systematically and optimizing long-term investments.",
    ],
    [
        Globe2,
        "NRIs",
        "Managing Indian investments seamlessly from anywhere in the world.",
    ],
    [
        UserCheck,
        "Retirees",
        "Creating reliable income streams and preserving accumulated wealth.",
    ],
]

export default function Audience() {
    return (
        <section className="relative overflow-hidden bg-[#06245a] px-6 py-[44px] text-white">
            {/* subtle radial glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(13,73,150,0.45),transparent_55%)]" />

            {/* left wave pattern */}
            <div className="pointer-events-none absolute bottom-0 left-0 h-[145px] w-[230px] opacity-25">
                <div className="h-full w-full rounded-tr-full border-t border-[#6f94c8]" />
                <div className="absolute bottom-3 left-0 h-[110px] w-[210px] rounded-tr-full border-t border-[#6f94c8]" />
                <div className="absolute bottom-6 left-0 h-[80px] w-[185px] rounded-tr-full border-t border-[#6f94c8]" />
            </div>

            {/* right circle pattern */}
            <div className="pointer-events-none absolute right-[-40px] top-[-35px] h-[210px] w-[210px] rounded-full border border-[#6f94c8]/30" />
            <div className="pointer-events-none absolute right-[-20px] top-[-15px] h-[170px] w-[170px] rounded-full border border-[#6f94c8]/25" />
            <div className="pointer-events-none absolute right-[0px] top-[5px] h-[130px] w-[130px] rounded-full border border-[#6f94c8]/20" />

            <div className="relative mx-auto max-w-7xl text-center">
                <p className="text-[11px] font-bold uppercase tracking-[0.8px] text-[#d4a128]">
                    WHO WE SERVE
                </p>

                <h2 className="mt-2 font-serif text-[30px] font-bold leading-tight text-white md:text-[34px]">
                    Tailored Solutions for Every Stage of Wealth
                </h2>

                <div className="mx-auto mt-[30px] grid max-w-[1040px] grid-cols-1 md:grid-cols-4">
                    {items.map(([Icon, title, text], index) => (
                        <div
                            key={title}
                            className={`relative px-[38px] text-center ${index !== items.length - 1
                                    ? "md:border-r md:border-white/35"
                                    : ""
                                }`}
                        >
                            <div className="mx-auto flex h-[62px] w-[62px] items-center justify-center rounded-full border-[1.5px] border-[#d4a128] text-[#d4a128]">
                                <Icon size={28} strokeWidth={1.8} />
                            </div>

                            <h3 className="mt-[18px] font-serif text-[17px] font-bold leading-none text-white">
                                {title}
                            </h3>

                            <p className="mx-auto mt-[10px] max-w-[170px] text-[12px] font-medium leading-[20px] text-white/90">
                                {text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}