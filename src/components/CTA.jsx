export default function CTA() {
    return (
        <section className="px-8">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 rounded-t-3xl bg-[#003b9e] px-12 py-10 text-white md:flex-row">
                <h2 className="font-serif text-4xl font-bold">
                    Ready to Build <br /> Your Financial Future?
                </h2>
                <p className="max-w-md text-sm leading-6">
                    Connect with our advisors and discover a disciplined approach to wealth creation and preservation.
                </p>
                <div className="flex flex-col gap-3">
                    <button className="rounded-md bg-[#d4a128] px-8 py-3 text-sm font-bold text-white">
                        Schedule a Consultation →
                    </button>
                    <button className="rounded-md border border-white px-8 py-3 text-sm font-bold">
                        Call Us Now
                    </button>
                </div>
            </div>
        </section>
    )
}