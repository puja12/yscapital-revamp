import { ArrowRight, Phone } from "lucide-react"
import ctaBg from "../assets/cta-mountain-bg.png"

export default function CTA() {
    return (
        <section className="bg-white px-4 py-0 sm:px-6 lg:px-0">
            <div className="relative mx-auto flex min-h-[190px] max-w-[1530px] items-center overflow-hidden border border-[#123d85] bg-[#003b9e] px-6 py-8 text-white sm:min-h-[150px] sm:px-10 lg:min-h-[130px] lg:px-[245px]">

                <img
                    src={ctaBg}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.72]"
                />

                <div className="absolute inset-0 bg-[#003b9e]/55 lg:bg-[#003b9e]/48" />

                <div className="relative z-10 flex w-full flex-col gap-6 text-center sm:text-left lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <h2 className="font-serif text-[24px] font-normal leading-[1.1] tracking-[-0.4px] text-white sm:text-[27px] lg:text-[30px]">
                            Ready To Build Your Financial Future?
                        </h2>

                        <p className="mt-3 text-[13px] font-medium leading-[20px] text-white/85 sm:text-[14px]">
                            Let’s create a strategy that works for you and your family.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:gap-[18px]">
                        <button className="flex h-[46px] w-full items-center justify-center gap-[10px] rounded-[4px] bg-[#c9971d] px-[20px] text-[14px] font-semibold text-white shadow-[0_8px_18px_rgba(0,0,0,0.22)] sm:w-auto lg:h-[50px] lg:min-w-[222px] lg:text-[15px]">
                            Schedule Consultation
                            <ArrowRight size={18} strokeWidth={2.4} />
                        </button>

                        <button className="flex h-[46px] w-full items-center justify-center gap-[10px] rounded-[4px] border border-white/55 bg-[#002b7a]/25 px-[20px] text-[14px] font-semibold text-white sm:w-auto lg:h-[50px] lg:min-w-[172px] lg:text-[15px]">
                            <Phone size={17} strokeWidth={2.4} />
                            Call Us Today
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}