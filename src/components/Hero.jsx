import { ArrowRight, BarChart3, TrendingUp } from "lucide-react"

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-white pt-24 pb-12 min-h-[620px]">

            <div className="absolute inset-0 bg-gradient-to-r from-white via-white to-blue-50"></div>

            {/* CITY SKYLINE - MORE VISIBLE */}
            <div className="absolute right-0 bottom-0 w-[65%] h-[500px] opacity-55">

                {/* skyline glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-100/60 via-blue-50/40 to-transparent"></div>

                {/* buildings */}
                <div className="absolute bottom-0 left-[5%] w-10 h-44 bg-blue-200/80 rounded-t-sm"></div>
                <div className="absolute bottom-0 left-[11%] w-14 h-64 bg-blue-100/90 rounded-t-sm"></div>
                <div className="absolute bottom-0 left-[19%] w-8 h-80 bg-blue-200/80 rounded-t-sm"></div>
                <div className="absolute bottom-0 left-[25%] w-16 h-56 bg-blue-100/90 rounded-t-sm"></div>
                <div className="absolute bottom-0 left-[35%] w-12 h-96 bg-blue-200/75 rounded-t-sm"></div>
                <div className="absolute bottom-0 left-[44%] w-20 h-72 bg-blue-100/90 rounded-t-sm"></div>
                <div className="absolute bottom-0 left-[57%] w-12 h-88 bg-blue-200/80 rounded-t-sm"></div>
                <div className="absolute bottom-0 left-[67%] w-16 h-64 bg-blue-100/90 rounded-t-sm"></div>
                <div className="absolute bottom-0 left-[79%] w-10 h-80 bg-blue-200/80 rounded-t-sm"></div>

                {/* tower */}
                <div className="absolute bottom-0 left-[31%] w-6 h-[430px] bg-blue-100/70"></div>
                <div className="absolute bottom-[430px] left-[31.7%] w-3 h-20 bg-blue-200/70"></div>
            </div>

            {/* MOUNTAIN BASE */}
            <div className="absolute right-0 bottom-0 w-[68%] h-[190px] opacity-45">
                <svg viewBox="0 0 900 260" className="w-full h-full">
                    <path
                        d="M0 210 L110 160 L190 195 L310 115 L420 175 L540 90 L650 150 L760 70 L900 135 L900 260 L0 260 Z"
                        fill="#bfdbfe"
                    />
                </svg>
            </div>

            {/* BAR CHART - BIGGER & CLEAR */}
            <div className="absolute right-12 bottom-16 hidden lg:flex items-end gap-4 opacity-90">
                {[150, 200, 250, 300, 350].map((height, index) => (
                    <div
                        key={index}
                        className="w-8 rounded-t-md bg-gradient-to-t from-blue-500/50 to-blue-100/80 shadow-lg"
                        style={{ height }}
                    ></div>
                ))}
            </div>

            {/* RISING LINES */}
            <div className="absolute right-0 top-20 hidden lg:block w-[68%] h-[420px]">
                <svg viewBox="0 0 900 430" className="w-full h-full">
                    <path
                        d="M0 345 C100 320 130 275 220 285 C300 295 330 215 410 245 C500 280 520 170 610 190 C690 210 700 95 765 115 C830 135 855 55 900 25"
                        fill="none"
                        stroke="#d4a017"
                        strokeWidth="4"
                    />

                    <path
                        d="M0 385 C120 360 150 330 240 345 C330 360 345 285 430 315 C520 345 550 245 625 265 C705 285 725 220 785 230 C845 240 870 185 900 160"
                        fill="none"
                        stroke="#2563eb"
                        strokeWidth="3"
                    />

                    <circle
                        cx="900"
                        cy="25"
                        r="9"
                        fill="white"
                        stroke="#d4a017"
                        strokeWidth="4"
                    />
                </svg>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center min-h-[500px]">

                {/* LEFT CONTENT */}
                <div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight text-[#0b1b3f]">
                        Building Digital.
                        <br />
                        <span className="text-blue-700">
                            Preserving Growth.
                        </span>
                    </h1>

                    <div className="mt-5 h-[2px] w-20 bg-yellow-500"></div>

                    <p className="mt-7 max-w-xl text-base md:text-lg leading-8 text-slate-700">
                        We help businesses build modern websites, ecommerce platforms,
                        business software, intranet solutions, and digital systems that
                        improve operations and growth.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <button className="flex items-center gap-3 rounded-md bg-blue-700 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-700/25">
                            Schedule a Consultation
                            <ArrowRight size={18} />
                        </button>

                        <button className="flex items-center gap-3 rounded-md border-2 border-blue-600 bg-white px-7 py-4 text-sm font-bold text-blue-700">
                            Explore Services
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>

                {/* FLOATING CARD */}
                <div className="relative hidden lg:block h-[440px]">
                    <div className="absolute right-4 bottom-5 w-[265px] rounded-xl bg-white p-6 shadow-2xl border border-slate-100">

                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-bold text-blue-700">
                                    Your Digital Journey
                                </p>
                                <p className="mt-1 text-xs text-slate-500">
                                    Business Growth
                                </p>
                            </div>

                            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700">
                                <BarChart3 size={24} />
                            </div>
                        </div>

                        <div className="mt-5 flex items-end gap-2">
                            <h3 className="text-4xl font-black text-[#0b1b3f]">
                                15+
                            </h3>
                            <p className="mb-1 text-sm font-bold text-slate-500">
                                Years
                            </p>
                        </div>

                        <p className="mt-1 text-sm text-slate-500">
                            Since Inception
                        </p>

                        <div className="mt-5 h-12">
                            <svg viewBox="0 0 240 60" className="w-full h-full">
                                <path
                                    d="M0 40 C30 35 45 45 70 30 C100 12 120 35 150 25 C180 15 190 25 215 12 C225 7 235 8 240 5"
                                    fill="none"
                                    stroke="#2563eb"
                                    strokeWidth="4"
                                />
                            </svg>
                        </div>

                        <div className="mt-3 flex items-center gap-2 text-green-600 text-sm font-bold">
                            <TrendingUp size={17} />
                            Growth Focused Solutions
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}