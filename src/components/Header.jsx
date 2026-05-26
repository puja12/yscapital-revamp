import { ChevronDown } from "lucide-react"
import logo from "../assets/ys-capital-logo.svg"

export default function Header() {
    return (
        <header className="absolute top-0 left-0 z-50 w-full">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">

                {/* LOGO */}
                <div className="flex items-center">
                    <img
                        src={logo}
                        alt="YS Capital"
                        className="h-16 w-auto object-contain"
                    />
                </div>

                {/* NAVIGATION */}
                <nav className="hidden items-center gap-8 text-sm font-semibold text-[#061d49] lg:flex">
                    <a href="#" className="hover:text-[#003b9e] transition">
                        Why Us
                    </a>

                    <a
                        href="#"
                        className="flex items-center gap-1 hover:text-[#003b9e] transition"
                    >
                        Services
                        <ChevronDown size={14} />
                    </a>

                    <a href="#" className="hover:text-[#003b9e] transition">
                        Calculators
                    </a>

                    <a
                        href="#"
                        className="flex items-center gap-1 hover:text-[#003b9e] transition"
                    >
                        Media
                        <ChevronDown size={14} />
                    </a>

                    <a href="#" className="hover:text-[#003b9e] transition">
                        Portfolio Management
                    </a>
                </nav>

                {/* CTA BUTTON */}
                <button className="rounded-md bg-[#003b9e] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#002d7a]">
                    Schedule Consultation
                </button>
            </div>
        </header>
    )
}