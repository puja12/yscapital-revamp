import { ChevronDown } from "lucide-react"
import logo from "../assets/ys-capital-logo.svg"

export default function Header() {
    return (
        <header className="fixed top-0 left-0 z-50 w-full border-b border-white/40 bg-white/85 backdrop-blur-xl transition-all duration-300">
            <div className="mx-auto flex h-[86px] max-w-7xl items-center justify-between px-8">

                {/* LOGO */}
                <div className="flex items-center">
                    <img
                        src={logo}
                        alt="YS Capital"
                        className="h-16 w-auto object-contain"
                    />
                </div>

                {/* NAVIGATION */}
                <nav className="hidden items-center gap-8 text-[14px] font-semibold text-[#061d49] lg:flex">
                    <a href="#" className="transition hover:text-[#003b9e]">
                        Why Us
                    </a>

                    <a
                        href="#"
                        className="flex items-center gap-1 transition hover:text-[#003b9e]"
                    >
                        Services
                        <ChevronDown size={14} />
                    </a>

                    <a href="#" className="transition hover:text-[#003b9e]">
                        Calculators
                    </a>

                    <a
                        href="#"
                        className="flex items-center gap-1 transition hover:text-[#003b9e]"
                    >
                        Media
                        <ChevronDown size={14} />
                    </a>

                    <a href="#" className="transition hover:text-[#003b9e]">
                        Portfolio Management
                    </a>
                </nav>

                {/* CTA BUTTON */}
                <button className="rounded-[6px] bg-[#003b9e] px-6 py-[13px] text-[13px] font-semibold text-white shadow-[0_10px_20px_rgba(0,59,158,0.18)] transition hover:bg-[#002d7a]">
                    Schedule Consultation
                </button>
            </div>
        </header>
    )
}