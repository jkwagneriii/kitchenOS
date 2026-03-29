export default function FinalCTA() {
  return (
    <section id="demo" className="bg-[#455602] text-[#DBD4C9] border-t border-[#2A2A22] relative overflow-hidden">
      {/* Large background watermark */}
      <div className="absolute inset-0 flex items-end justify-start pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <span className="font-sans text-[25vw] font-bold text-[#DBD4C9]/[0.06] leading-none -mb-[0.15em] -ml-[0.02em]">K<span className="inline-block w-[0.04em] h-[0.65em] bg-current transform -skew-x-[20deg] mx-[0.02em]" />OS</span>
      </div>

      <div className="relative z-10">
        {/* Main CTA content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-[#DBD4C9]/20">
          <div className="lg:col-span-7 px-8 md:px-12 lg:px-16 py-section-y">
            <h2 className="text-hero mb-6 animate-on-scroll">Your Kitchen Deserves Better Software</h2>
            <p className="font-mono text-mono-body uppercase text-[#DBD4C9] max-w-md animate-on-scroll stagger-1">
              Start managing inventory, prep, and ordering in one platform today.
            </p>
          </div>

          <div className="lg:col-span-5 px-8 md:px-12 lg:px-16 py-section-y border-l border-[#DBD4C9]/20 flex items-center">
            <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll stagger-2">
              <a href="#pricing"
                 className="inline-flex items-center justify-center px-8 py-4 bg-[#DBD4C9] text-[#455602] font-mono text-mono-body uppercase tracking-widest font-bold hover:bg-[#DBD4C9]/80 transition-all duration-300 cursor-pointer">
                Start Free Trial
              </a>
              <a href="#"
                 className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#DBD4C9]/30 text-[#DBD4C9] font-mono text-mono-body uppercase tracking-widest hover:border-[#DBD4C9] transition-all duration-300 cursor-pointer">
                Book a Demo
              </a>
            </div>
          </div>
        </div>

        {/* Email input row */}
        <div className="px-8 md:px-12 lg:px-16 py-8 flex items-center justify-center">
          <form className="flex items-center gap-0 w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
            <span className="text-[#DBD4C9] font-mono text-sm mr-1">(</span>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-2 py-3 bg-transparent border-b border-[#DBD4C9]/20 text-[#DBD4C9] placeholder:text-[#DBD4C9]/30 focus:outline-none focus:border-[#DBD4C9] transition-all duration-300 font-mono text-mono-body uppercase"
            />
            <span className="text-[#DBD4C9] font-mono text-sm ml-1 mr-4">)</span>
            <button
              type="submit"
              className="px-6 py-3 bg-[#DBD4C9] text-[#455602] font-mono text-mono-body uppercase tracking-widest font-bold hover:bg-[#DBD4C9]/80 transition-all duration-300 cursor-pointer whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
