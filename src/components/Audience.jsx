import {
    BriefcaseBusiness,
    UserRound,
    Globe,
    Users,
} from "lucide-react"

import familyTree from "../assets/family-tree.png"

const items = [
    [
        BriefcaseBusiness,
        "Business Owners",
        "Managing business surplus efficiently while planning future growth.",
    ],
    [
        UserRound,
        "Senior Professionals",
        "Building wealth systematically and optimizing long-term investments.",
    ],
    [
        Globe,
        "NRIs",
        "Managing Indian investments seamlessly from anywhere in the world.",
    ],
    [
        Users,
        "Retirees",
        "Creating reliable income streams and preserving accumulated wealth.",
    ],
]

export default function Audience() {
    return (
        <section className="relative overflow-hidden bg-[#021f5a]">
            <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
                {/* LEFT SECTION */}
                <div className="relative px-[58px] py-[46px] text-white">
                    {/* subtle blue glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(17,79,175,0.45),transparent_55%)]" />

                    <div className="relative z-10">
                        <p className="text-[11px] font-bold uppercase tracking-[1px] text-[#d4a128]">
                            WHO WE SERVE
                        </p>

                        <h2 className="mt-[10px] max-w-[620px] font-serif text-[34px] font-normal leading-[1.15] tracking-[-0.7px] text-white">
                            Tailored Solutions For Every Stage Of Wealth
                        </h2>

                        {/* ITEMS */}
                        <div className="mt-[34px] grid grid-cols-4">
                            {items.map(([Icon, title, text], index) => (
                                <div
                                    key={title}
                                    className={`px-[22px] text-center ${index !== items.length - 1
                                            ? "border-r border-white/22"
                                            : ""
                                        }`}
                                >
                                    <div className="mx-auto flex h-[58px] w-[58px] items-center justify-center rounded-full border border-[#d4a128] text-[#d4a128]">
                                        <Icon size={28} strokeWidth={1.8} />
                                    </div>

                                    <h3 className="mt-[16px] text-[18px] font-bold leading-tight text-white">
                                        {title}
                                    </h3>

                                    <p className="mx-auto mt-[10px] max-w-[165px] text-[12px] font-medium leading-[20px] text-white/88">
                                        {text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative min-h-[340px] overflow-hidden">
                    <img
                        src={familyTree}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover"
                    />

                    {/* soft blend */}
                    <div className="absolute inset-y-0 left-0 w-[180px] bg-gradient-to-r from-[#021f5a] to-transparent" />
                </div>
            </div>
        </section>
    )
}