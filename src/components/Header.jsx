import { useEffect, useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
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
    const [mobileOpen, setMobileOpen] = useState(false)
    const [servicesOpen, setServicesOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60)

        handleScroll()
        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${scrolled || mobileOpen
                    ? "bg-white/95 shadow-[0_8px_24px_rgba(15,23,42,0.08)] backdrop-blur-xl"
                    : "bg-transparent"
                }`}
        >
            <div className="relative">
                <div
                    className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8 ${scrolled ? "h-[72px] lg:h-[78px]" : "h-[76px] lg:h-[86px]"
                        }`}
                >
                    <img
                        src={logo}
                        alt="YS Capital"
                        className="h-12 w-auto object-contain sm:h-14 lg:h-16"
                    />

                    {/* DESKTOP NAV */}
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

                    {/* DESKTOP BUTTON */}
                    <button className="hidden rounded-[6px] bg-[#003b9e] px-6 py-[13px] text-[13px] font-semibold text-white shadow-[0_10px_20px_rgba(0,59,158,0.18)] transition hover:bg-[#002d7a] lg:block">
                        Schedule Consultation
                    </button>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="flex h-10 w-10 items-center justify-center rounded-md border border-[#d9e1ea] bg-white/80 text-[#061d49] lg:hidden"
                    >
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

                {/* MOBILE MENU */}
                <div
                    className={`overflow-hidden bg-white transition-all duration-300 lg:hidden ${mobileOpen ? "max-h-[620px] border-t border-[#e1e5ee]" : "max-h-0"
                        }`}
                >
                    <div className="space-y-1 px-5 py-5 text-[13px] font-bold uppercase tracking-[0.7px] text-[#061d49]">
                        <a className="block py-3" href="#">
                            Why Us
                        </a>

                        <button
                            onClick={() => setServicesOpen(!servicesOpen)}
                            className="flex w-full items-center justify-between py-3 text-left"
                        >
                            Services
                            <ChevronDown
                                size={16}
                                className={`transition ${servicesOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-300 ${servicesOpen ? "max-h-[500px]" : "max-h-0"
                                }`}
                        >
                            <div className="space-y-2 border-l border-[#d9e1ea] pl-4 pb-3 text-[12px] font-semibold normal-case tracking-normal text-[#08245c]/80">
                                {services.map((item) => (
                                    <a key={item} href="#" className="block py-2">
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <a className="block py-3" href="#">
                            Calculators
                        </a>

                        <a className="block py-3" href="#">
                            Media
                        </a>

                        <a className="block py-3" href="#">
                            Portfolio Management
                        </a>

                        <button className="mt-4 w-full rounded-[6px] bg-[#003b9e] px-6 py-[13px] text-[13px] font-semibold text-white shadow-[0_10px_20px_rgba(0,59,158,0.18)]">
                            Schedule Consultation
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}