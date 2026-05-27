import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import logo from "../assets/ys-capital-logo.svg"

const services = [
    "Mutual Fund Distribution",
    "Portfolio Management",
    "Fixed Deposits",
    "Risk Management",
    "Alternate Investment Funds",
    "Treasury Management",
    "Consultancy on Currency & Commodity",
    "Bonds",
]

export default function Header() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60)
        }

        handleScroll()
        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${scrolled
                    ? "bg-white/95 shadow-[0_8px_24px_rgba(15,23,42,0.08)] backdrop-blur-xl"
                    : "bg-transparent"
                }`}
        >
            <div className="group/header relative">
                <div
                    className={`mx-auto flex max-w-7xl items-center justify-between px-8 transition-all duration-300 ${scrolled ? "h-[78px]" : "h-[86px]"
                        }`}
                >
                    <img
                        src={logo}
                        alt="YS Capital"
                        className="h-16 w-auto object-contain"
                    />

                    <nav className="hidden items-center gap-9 text-[14px] font-bold uppercase tracking-[0.8px] text-[#061d49] lg:flex">
                        <a href="#" className="transition duration-200 hover:text-[#c9971d]">
                            Why Us
                        </a>

                        <div className="group/services flex h-[86px] items-center">
                            <a
                                href="#"
                                className="flex items-center gap-1 transition duration-200 group-hover/services:text-[#c9971d]"
                            >
                                Services
                                <ChevronDown
                                    size={15}
                                    className="transition group-hover/services:rotate-180"
                                />
                            </a>

                            <div
                                className={`invisible absolute left-0 w-screen translate-y-2 bg-white opacity-0 shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition-all duration-300 group-hover/services:visible group-hover/services:translate-y-0 group-hover/services:opacity-100 ${scrolled ? "top-[78px]" : "top-[86px]"
                                    }`}
                            >
                                <div className="mx-auto grid max-w-7xl grid-cols-3 gap-x-12 px-8 py-9">
                                    {services.map((item) => (
                                        <a
                                            key={item}
                                            href="#"
                                            className="border-b border-[#d9e1ea] py-5 text-[20px] font-semibold tracking-[0.2px] text-[#08245c] transition duration-200 hover:text-[#003b9e]"
                                        >
                                            {item}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <a href="#" className="transition duration-200 hover:text-[#c9971d]">
                            Calculators
                        </a>

                        <a href="#" className="transition duration-200 hover:text-[#c9971d]">
                            Media
                        </a>

                        <a href="#" className="transition duration-200 hover:text-[#c9971d]">
                            Portfolio Management
                        </a>
                    </nav>

                    <button className="rounded-[6px] bg-[#003b9e] px-6 py-[13px] text-[13px] font-semibold text-white shadow-[0_10px_20px_rgba(0,59,158,0.18)] transition hover:bg-[#002d7a]">
                        Schedule Consultation
                    </button>
                </div>
            </div>
        </header>
    )
}