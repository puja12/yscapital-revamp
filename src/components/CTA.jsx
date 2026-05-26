import { ArrowRight, Phone } from "lucide-react"
import ctaBg from "../assets/cta-mountain-bg.png"

export default function CTA() {
    return (
        <section className="bg-white px-0 py-0">
            <div className="relative mx-auto flex min-h-[92px] max-w-[1530px] items-center overflow-hidden border border-[#123d85] bg-[#003b9e] px-[285px] text-white">
                {/* BACKGROUND IMAGE */}
                <img
                    src={ctaBg}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.72]"
                />

                {/* BLUE OVERLAY */}
                <div className="absolute inset-0 bg-[#003b9e]/48" />

                {/* CONTENT */}
                <div className="relative z-10 flex w-full items-center justify-between">
                    <div>
                        <h2 className="font-serif text-[30px] font-normal leading-none tracking-[-0.4px] text-white">
                            Ready To Build Your Financial Future?
                        </h2>

                        <p className="mt-[12px] text-[14px] font-medium leading-none text-white/85">
                            Let’s create a strategy that works for you and your family.
                        </p>
                    </div>

                    <div className="flex items-center gap-[18px]">
                        <button className="flex h-[50px] min-w-[222px] items-center justify-center gap-[10px] rounded-[4px] bg-[#c9971d] px-[24px] text-[15px] font-semibold text-white shadow-[0_8px_18px_rgba(0,0,0,0.22)]">
                            Schedule Consultation
                            <ArrowRight size={18} strokeWidth={2.4} />
                        </button>

                        <button className="flex h-[50px] min-w-[172px] items-center justify-center gap-[10px] rounded-[4px] border border-white/55 bg-[#002b7a]/25 px-[24px] text-[15px] font-semibold text-white">
                            <Phone size={17} strokeWidth={2.4} />
                            Call Us Today
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}