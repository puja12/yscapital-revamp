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
        <section className="relative overflow-hidden bg-[#002763]">
            <div className="grid min-h-[320px] grid-cols-1 lg:grid-cols-[1.35fr_0.85fr]">
                {/* LEFT CONTENT */}
                <div className="relative z-10 pl-[150px] pr-[20px] py-[42px] text-white">
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,#002763_0%,#002763_70%,rgba(0,39,99,0.75)_100%)]" />

                    <div className="relative z-10">
                        <p className="text-[11px] font-bold uppercase tracking-[1px] text-[#d4a128]">
                            WHO WE SERVE
                        </p>

                        <h2 className="mt-[8px] font-serif text-[30px] font-normal leading-[1.12] tracking-[-0.5px] text-white">
                            Tailored Solutions For Every Stage Of Wealth
                        </h2>

                        <div className="mt-[35px] grid max-w-[760px] grid-cols-4">
                            {items.map(([Icon, title, text], index) => (
                                <div
                                    key={title}
                                    className={`px-[22px] text-center ${index !== items.length - 1
                                        ? "border-r border-white/25"
                                        : ""
                                        }`}
                                >
                                    <Icon
                                        size={38}
                                        strokeWidth={1.65}
                                        className="mx-auto text-[#d4a128]"
                                    />

                                    <h3 className="mt-[16px] text-[14px] font-bold leading-tight text-white">
                                        {title}
                                    </h3>

                                    <p className="mx-auto mt-[9px] max-w-[135px] text-[10.5px] font-medium leading-[17px] text-white/85">
                                        {text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT IMAGE - EXTREME RIGHT */}
                <div className="absolute inset-y-0 right-0 hidden w-[46%] lg:block">
                    <img
                        src={familyTree}
                        alt=""
                        className="h-full w-full object-cover object-right-center"
                    />

                    <div className="absolute inset-y-0 left-0 w-[260px] bg-gradient-to-r from-[#002763] via-[#002763]/75 to-transparent" />
                </div>
            </div>
        </section>
    )
}