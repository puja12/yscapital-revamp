import { Mail, MapPin, Phone } from "lucide-react"
import logo from "../assets/ys-capital-logo.svg"

export default function Footer() {
    return (
        <footer className="bg-[#061b3f] px-8 py-10 text-white">
            <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
                <div>
                    <img
                        src={logo}
                        alt="YS Capital"
                        className="h-16 w-auto"
                    />

                    <p className="mt-4 text-sm leading-6 text-slate-300">
                        Trusted wealth management partners helping individuals and
                        families build, grow and preserve wealth for generations.
                    </p>
                </div>

                <div>
                    <h4 className="font-bold">Quick Links</h4>
                    <ul className="mt-4 space-y-2 text-sm text-slate-300">
                        <li>Why Us</li>
                        <li>Services</li>
                        <li>Calculators</li>
                        <li>Media</li>
                        <li>Portfolio Management</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold">Our Services</h4>
                    <ul className="mt-4 space-y-2 text-sm text-slate-300">
                        <li>Mutual Fund Advisory</li>
                        <li>SIF Solutions</li>
                        <li>Goal Planning</li>
                        <li>Portfolio Review</li>
                        <li>Tax-Efficient Investing</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold">Contact Us</h4>
                    <ul className="mt-4 space-y-3 text-sm text-slate-300">
                        <li className="flex gap-2"><Phone size={16} /> +91 98765 43210</li>
                        <li className="flex gap-2"><Mail size={16} /> info@yscapital.com</li>
                        <li className="flex gap-2"><MapPin size={16} /> Mumbai, Maharashtra</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}