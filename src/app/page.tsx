"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-gold selection:text-black font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter text-gold">WIG</div>
          <div className="hidden md:flex gap-12 text-sm uppercase tracking-widest font-medium text-white/70">
            <Link href="#about" className="hover:text-gold transition-colors">About</Link>
            <Link href="#projects" className="hover:text-gold transition-colors">Projects</Link>
            <Link href="#services" className="hover:text-gold transition-colors">Services</Link>
            <Link href="#contact" className="hover:text-gold transition-colors">Contact</Link>
          </div>
          <button className="bg-white text-black px-6 py-2.5 text-sm font-bold uppercase tracking-tighter hover:bg-gold transition-colors">
            Inquire Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6199fce10c?q=80&w=2070&auto=format&fit=crop"
            alt="Luxury Property"
            fill
            className="object-cover scale-105 animate-slow-zoom"
            priority
          />
        </div>
        
        <div className="relative z-20 text-center max-w-4xl px-6">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-none animate-reveal">
            REDEFINING <br />
            <span className="text-gold">LUXURY LIVING</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto animate-reveal-delayed font-light">
            World Investment Group (WIG) delivers unparalleled real estate opportunities with a focus on architectural excellence and long-term value.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center animate-reveal-delayed">
            <Link href="#projects" className="bg-gold text-black px-10 py-4 font-bold uppercase tracking-tighter hover:bg-white transition-all">
              View Portfolios
            </Link>
          </div>
        </div>
      </section>

      {/* Stats / About */}
      <section id="about" className="py-32 bg-zinc-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold tracking-tighter mb-8">WORLD INVESTMENT GROUP</h2>
              <p className="text-white/60 leading-relaxed text-lg font-light mb-6">
                Established with a vision to transform the urban landscape, WIG stands at the intersection of luxury, innovation, and reliability. We don't just build structures; we curate lifestyles.
              </p>
              <div className="grid grid-cols-2 gap-10 mt-12">
                <div>
                  <div className="text-5xl font-bold text-gold mb-2">10</div>
                  <div className="text-xs uppercase tracking-widest text-white/40">Completed Projects</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-gold mb-2">12</div>
                  <div className="text-xs uppercase tracking-widest text-white/40">Ongoing Developments</div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1600607687940-4e525cb73d0a?q=80&w=2070&auto=format&fit=crop"
                alt="Architecture"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-5xl font-bold tracking-tighter mb-4">OUR PROJECTS</h2>
              <p className="text-white/40 tracking-wide uppercase text-sm">Crafting excellence across the city</p>
            </div>
            <Link href="#" className="text-gold hover:text-white transition-colors text-sm font-bold tracking-widest uppercase mb-2 underline underline-offset-8">Explore All</Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden mb-6">
                  <Image
                    src={`https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?q=80&w=2070&auto=format&fit=crop&sig=${i}`}
                    alt="Project"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-black/80 px-3 py-1 text-[10px] uppercase tracking-widest font-bold border border-white/10">
                    {i % 2 === 0 ? "Completed" : "In Progress"}
                  </div>
                </div>
                <h3 className="text-xl font-bold tracking-tighter mb-1">THE {i === 1 ? 'ONYX' : i === 2 ? 'IVORY' : 'SAPPHIRE'} RESIDENCE</h3>
                <p className="text-white/40 text-sm font-light">Tbilisi, Georgia — Luxury Living</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="bg-white text-black py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-20">
          <div className="col-span-1">
            <h2 className="text-4xl font-bold tracking-tighter mb-6">WIG</h2>
            <p className="font-light text-sm text-black/60 leading-relaxed mb-8">
              Invest in the future with World Investment Group. We provide the foundation for your most ambitious dreams.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-6">Inquiries</h4>
            <ul className="space-y-4 text-lg">
              <li className="hover:text-gold transition-colors cursor-pointer underline underline-offset-4">sales@wig.ge</li>
              <li className="hover:text-gold transition-colors cursor-pointer">+995 555 123 456</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-6">Address</h4>
            <p className="text-lg leading-snug">
              Rustaveli Ave 1<br />
              Tbilisi, 0108<br />
              Georgia
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-black/10 flex flex-col md:flex-row justify-between gap-6 text-[10px] uppercase tracking-widest font-bold opacity-40">
          <div>© 2026 WORLD INVESTMENT GROUP. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-10">
            <span className="cursor-pointer">Privacy Policy</span>
            <span className="cursor-pointer">Terms of Service</span>
            <span className="cursor-pointer font-black text-black opacity-100">DESIGNED BY SITECH</span>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes reveal {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slow-zoom {
          from { transform: scale(1.05); }
          to { transform: scale(1.15); }
        }
        .animate-reveal { animation: reveal 1s ease-out forwards; }
        .animate-reveal-delayed { animation: reveal 1s ease-out 0.3s forwards; opacity: 0; }
        .animate-slow-zoom { animation: slow-zoom 20s linear infinite alternate; }
      `}</style>
    </div>
  );
}
