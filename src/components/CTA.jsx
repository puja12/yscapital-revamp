import { ArrowRight, Phone } from "lucide-react"

export default function CTA() {
    return (
        <section className="bg-white px-6 pt-[8px]">
            <div className="relative mx-auto flex max-w-[1180px] flex-col items-start justify-between overflow-hidden rounded-t-[24px] rounded-b-none bg-[#0038a8] px-[68px] py-[20px] text-white md:flex-row md:items-center">

                <div className="absolute inset-0 opacity-[0.12]">
                    <div className="absolute left-[-70px] top-[-45px] h-[180px] w-[420px] rounded-full border border-white/40" />
                    <div className="absolute left-[-35px] top-[-15px] h-[150px] w-[380px] rounded-full border border-white/30" />
                    <div className="absolute right-[-120px] top-[-60px] h-[220px] w-[420px] rounded-full border border-white/30" />
                    <div className="absolute right-[-80px] top-[-20px] h-[180px] w-[360px] rounded-full border border-white/20" />
                </div>

                <div className="relative z-10">
                    <h2 className="font-serif text-[31px] font-normal leading-[1.06] tracking-[-0.8px] text-white md:text-[35px]">
                        Ready to Build
                        <br />
                        Your Financial Future?
                    </h2>
                </div>

                <div className="relative z-10 mt-5 max-w-[340px] md:mt-0">
                    <p className="text-[14px] font-normal leading-[23px] text-white/95">
                        Connect with our advisors and discover a disciplined approach to wealth creation and preservation.
                    </p>
                </div>

                <div className="relative z-10 mt-6 flex w-full flex-col gap-[8px] md:mt-0 md:w-auto">
                    <button className="flex h-[42px] min-w-[245px] items-center justify-center gap-3 rounded-[5px] bg-[#c9971d] px-8 text-[13px] font-semibold text-white shadow-[0_8px_18px_rgba(0,0,0,0.15)]">
                        Schedule a Consultation
                        <ArrowRight size={15} strokeWidth={2.4} />
                    </button>

                    <button className="flex h-[42px] min-w-[245px] items-center justify-center gap-2 rounded-[5px] border border-white/55 bg-transparent px-8 text-[13px] font-semibold text-white">
                        Call Us Now
                        <Phone size={13} strokeWidth={2.4} />
                    </button>
                </div>
            </div>
        </section>
    )
}