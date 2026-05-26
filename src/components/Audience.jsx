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
            {/* MOBILE/TABLET BACKGROUND IMAGE */}
            <div className="absolute inset-0 lg:hidden">
                <img
                    src={familyTree}
                    alt=""
                    className="h-full w-full object-cover object-right"
                />
                <div className="absolute inset-0 bg-[#002763]/85" />
            </div>

            <div className="relative grid min-h-[520px] grid-cols-1 lg:min-h-[320px] lg:grid-cols-[1.35fr_0.85fr]">
                {/* LEFT CONTENT */}
                <div className="relative z-10 px-5 py-[42px] text-white sm:px-8 md:px-12 lg:pl-[150px] lg:pr-[20px]">
                    <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,#002763_0%,#002763_70%,rgba(0,39,99,0.75)_100%)] lg:block" />

                    <div className="relative z-10">
                        <p className="text-[11px] font-bold uppercase tracking-[1px] text-[#d4a128]">
                            WHO WE SERVE
                        </p>

                        <h2 className="mt-[8px] max-w-[680px] font-serif text-[26px] font-normal leading-[1.15] tracking-[-0.5px] text-white sm:text-[30px]">
                            Tailored Solutions For Every Stage Of Wealth
                        </h2>

                        <div className="mt-[32px] grid max-w-[760px] grid-cols-1 gap-y-8 sm:grid-cols-2 lg:mt-[35px] lg:grid-cols-4 lg:gap-y-0">
                            {items.map(([Icon, title, text], index) => (
                                <div
                                    key={title}
                                    className={`px-4 text-center sm:px-[22px] ${index !== items.length - 1
                                            ? "lg:border-r lg:border-white/25"
                                            : ""
                                        }`}
                                >
                                    <Icon
                                        size={36}
                                        strokeWidth={1.65}
                                        className="mx-auto text-[#d4a128] lg:size-[38px]"
                                    />

                                    <h3 className="mt-[14px] text-[14px] font-bold leading-tight text-white lg:mt-[16px]">
                                        {title}
                                    </h3>

                                    <p className="mx-auto mt-[8px] max-w-[180px] text-[11.5px] font-medium leading-[18px] text-white/85 lg:mt-[9px] lg:max-w-[135px] lg:text-[10.5px] lg:leading-[17px]">
                                        {text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT IMAGE - DESKTOP */}
                <div className="absolute inset-y-0 right-0 hidden w-[46%] lg:block">
                    <img
                        src={familyTree}
                        alt=""
                        className="h-full w-full object-cover object-right-center"
                    />

                    <div className="absolute inset-y-0 left-0 w-[200px] bg-gradient-to-r from-[#002763] from-[0%] via-[#002763]/95 via-[38%] via-[#002763]/65 via-[62%] to-transparent to-[100%]" />

                    <div className="absolute inset-y-0 left-[-80px] w-[260px] bg-[#002763]/80 blur-[55px]" />
                </div>
            </div>
        </section>
    )
}