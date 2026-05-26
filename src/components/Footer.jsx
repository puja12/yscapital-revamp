import {
    Mail,
    MapPin,
    Phone,
    Globe,
    Send,
} from "lucide-react"

import logo from "../assets/ys-capital-logo.svg"
import amfiLogo from "../assets/amfi-logo.png"

export default function Footer() {
    return (
        <footer className="overflow-hidden bg-[#021b4b] text-white">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 border-b border-white/10 md:grid-cols-[1.15fr_0.9fr_1fr_1fr_0.95fr]">

                {/* LOGO + ABOUT */}
                <div className="border-r border-white/10 px-[34px] py-[26px]">
                    <img
                        src={logo}
                        alt="YS Capital"
                        className="h-[44px] w-auto"
                    />

                    <p className="mt-[16px] max-w-[250px] text-[12px] font-medium leading-[20px] text-white/78">
                        Your trusted partner in wealth creation and preservation.
                        We help you make smart investment decisions today for a
                        better tomorrow.
                    </p>

                    {/* SOCIAL */}
                    <div className="mt-[18px] flex items-center gap-[10px]">
                        <Social icon={Globe} />
                        <Social icon={Send} />
                    </div>
                </div>

                {/* QUICK LINKS */}
                <div className="border-r border-white/10 px-[28px] py-[26px]">
                    <h3 className="text-[12px] font-bold uppercase tracking-[0.7px] text-white">
                        Quick Links
                    </h3>

                    <ul className="mt-[14px] space-y-[7px]">
                        {[
                            "Why Us",
                            "Services",
                            "Calculators",
                            "Media",
                            "Portfolio Management",
                            "Contact Us",
                        ].map((item) => (
                            <li
                                key={item}
                                className="cursor-pointer text-[12px] font-medium text-white/78 transition hover:text-white"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* SERVICES */}
                <div className="border-r border-white/10 px-[28px] py-[26px]">
                    <h3 className="text-[12px] font-bold uppercase tracking-[0.7px] text-white">
                        Our Services
                    </h3>

                    <ul className="mt-[14px] space-y-[7px]">
                        {[
                            "Mutual Fund Advisory",
                            "SIF Solutions",
                            "Goal Planning",
                            "Tax-Efficient Investing",
                            "Portfolio Review",
                            "Family Wealth Planning",
                        ].map((item) => (
                            <li
                                key={item}
                                className="cursor-pointer text-[12px] font-medium text-white/78 transition hover:text-white"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* CONTACT */}
                <div className="border-r border-white/10 px-[28px] py-[26px]">
                    <h3 className="text-[12px] font-bold uppercase tracking-[0.7px] text-white">
                        Contact Us
                    </h3>

                    <div className="mt-[14px] space-y-[10px]">
                        <ContactItem
                            icon={Phone}
                            text="+91 22 1234 5678"
                        />

                        <ContactItem
                            icon={Mail}
                            text="info@yscapital.in"
                        />

                        <ContactItem
                            icon={MapPin}
                            text="801, Business Avenue, Andheri (E), Mumbai - 400 069"
                        />
                    </div>

                </div>

                {/* AMFI */}
                <div className="px-[28px] py-[26px]">
                    <h3 className="text-[12px] font-bold uppercase tracking-[0.7px] text-white">
                        AMFI Registered
                    </h3>

                    <div className="mt-[16px] flex items-start gap-[14px]">
                        <img
                            src={amfiLogo}
                            alt="AMFI"
                            className="h-[72px] w-auto object-contain"
                        />

                        <div className="space-y-[8px] pt-[2px]">
                            <p className="text-[11px] font-medium text-white/78">
                                Mutual Fund Distributor
                            </p>

                            <p className="text-[11px] font-medium text-white/78">
                                ARN: XXXXX
                            </p>

                            <p className="text-[11px] font-medium text-white/78">
                                SIF Distributor
                            </p>

                            <p className="text-[11px] font-medium text-white/78">
                                ARN: XXXXX
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* BOTTOM BAR */}
            <div className="mx-auto flex max-w-7xl items-center justify-between px-[34px] py-[10px] text-[10px] font-medium text-white/55">
                <p>
                    Mutual Fund investments are subject to market risks, read all
                    scheme related documents carefully.
                </p>

                <p>© 2026 YS Capital. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

/* SOCIAL ICON */
function Social({ icon: Icon }) {
    return (
        <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full border border-white/20 bg-white/6 text-white/80 transition hover:bg-white/12">
            <Icon size={13} strokeWidth={2.2} />
        </div>
    )
}

/* CONTACT ITEM */
function ContactItem({ icon: Icon, text }) {
    return (
        <div className="flex items-start gap-[9px] text-[12px] font-medium leading-[18px] text-white/78">
            <Icon
                size={14}
                strokeWidth={2.2}
                className="mt-[2px] shrink-0"
            />

            <span>{text}</span>
        </div>
    )
}