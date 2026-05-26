import { ArrowRight, BarChart3, TrendingUp } from "lucide-react"
import heroBg from "../assets/sky-city-background.png"

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-white pt-[120px]">
            {/* HERO BACKGROUND */}
            <div className="absolute inset-0">
                <img
                    src={heroBg}
                    alt=""
                    className="absolute right-0 bottom-0 h-full w-[78%] object-contain object-right-bottom opacity-95"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/35 to-transparent" />
            </div>
            <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center px-6 lg:grid-cols-2">
                {/* LEFT CONTENT */}
                <div className="z-10 pb-20 pt-12 lg:pb-24">
                    <h1 className="font-serif text-[44px] font-bold leading-[1.12] text-[#071f52] md:text-[64px] lg:text-[68px]">
                        Growing Wealth.
                        <br />

                        <span className="block whitespace-nowrap text-[#003b9e]">
                            Preserving Legacies.
                        </span>
                    </h1>

                    <div className="mt-6 h-[2px] w-20 bg-[#d4a128]" />

                    <p className="mt-7 max-w-[520px] text-[17px] leading-8 text-slate-700">
                        Helping HNIs, Professionals and Business Families build disciplined
                        investment portfolios through Mutual Funds, SIFs and Goal-Based
                        Strategies.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <button className="flex items-center gap-3 rounded-md bg-[#003b9e] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-blue-900/20 transition hover:bg-[#002f7d]">
                            Schedule a Consultation
                            <ArrowRight size={17} />
                        </button>

                        <button className="flex items-center gap-3 rounded-md border border-[#003b9e] bg-white px-7 py-4 text-sm font-bold text-[#003b9e] transition hover:bg-[#f3f7ff]">
                            Explore Services
                            <ArrowRight size={17} />
                        </button>
                    </div>
                </div>

                {/* RIGHT VISUAL AREA */}
                <div className="absolute bottom-8 right-4 w-[255px] rounded-[10px] border border-white/90 bg-white p-[18px] shadow-[0_18px_35px_rgba(30,64,175,0.25)]">
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-[12px] font-bold leading-none text-[#003b9e]">
                                Your Wealth Journey
                            </p>

                            <p className="mt-[9px] text-[11px] font-medium leading-none text-slate-500">
                                Long Term Growth
                            </p>
                        </div>

                        <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#eef4ff] text-[#1d4ed8]">
                            <BarChart3 size={24} strokeWidth={2.3} />
                        </div>
                    </div>

                    <div className="mt-[13px] flex items-end gap-[6px]">
                        <h3 className="text-[34px] font-bold leading-none tracking-[-1px] text-[#071f52]">
                            15.8%
                        </h3>

                        <span className="mb-[5px] text-[10px] font-bold uppercase tracking-wide text-slate-500">
                            XIRR
                        </span>
                    </div>

                    <p className="mt-[7px] text-[11px] font-medium leading-none text-slate-500">
                        Since Inception
                    </p>

                    <div className="mt-[17px] h-[42px] w-full overflow-hidden rounded-sm bg-gradient-to-t from-[#eaf2ff] to-white">
                        <svg viewBox="0 0 220 42" className="h-full w-full">
                            <path
                                d="M2 31 C18 29 25 32 40 27 C57 20 69 25 84 20 C101 14 114 19 128 17 C144 15 153 11 168 15 C183 19 191 12 204 8 C211 6 216 7 220 4"
                                fill="none"
                                stroke="#2f6de0"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    )
}