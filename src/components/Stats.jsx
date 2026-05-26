import { ShieldCheck, Award, Users, Coins, Search, UserRound } from "lucide-react"

const stats = [
    [ShieldCheck, "AMFI", "Registered"],
    [Award, "15+", "Years Experience"],
    [Users, "500+", "Families Served"],
    [Coins, "₹1,250+ Cr", "Assets Guided"],
    [Search, "Research", "Driven"],
    [UserRound, "Personalized", "Advisory"],
]

export default function Stats() {
    return (
        <section className="bg-[#eef5ff]">
            <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-300 px-8 py-8 md:grid-cols-6">
                {stats.map(([Icon, title, sub]) => (
                    <div key={title} className="flex items-center gap-4 px-4">
                        <Icon className="text-[#003b9e]" size={34} />
                        <div>
                            <h4 className="font-bold text-[#071f52]">{title}</h4>
                            <p className="text-sm text-slate-600">{sub}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}