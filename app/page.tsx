// app/page.tsx
import Link from 'next/link'

export default function Home() {
  return (
    <main className="py-12">
      <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-brand-primary to-[#003D95] p-8 text-white shadow-soft">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="badge bg-white/20 text-white">Beta</span>
            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
              The Fastest Way to Find Affiliate Programs
            </h1>
            <p className="mt-3 text-lg opacity-90">Discover. Compare. Earn More.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/programs" className="btn-primary bg-brand-accent text-black hover:bg-[#EED72A]">
                Explore Programs
              </Link>
              <Link href="/submit" className="btn-ghost bg-white/10 border-white/30 text-white hover:bg-white/20">
                List Your Program
              </Link>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-white/80">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">
                <span className="h-2 w-2 rounded-full bg-brand-accent"></span>
                SEO-optimized pages
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">
                <span className="h-2 w-2 rounded-full bg-brand-accent"></span>
                PWA Install on Phone
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <img src="/branding/afz-logo-light.png" alt="AFZ Affiliates" className="w-[380px] drop-shadow-xl" />
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Popular Categories</h2>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {['VPN', 'Hosting', 'SaaS', 'Finance', 'Education', 'Marketing'].map((c) => (
            <div key={c} className="rounded-lg border bg-white p-4 shadow-soft hover:shadow-md transition cursor-pointer">
              <p className="font-medium">{c}</p>
              <p className="text-xs text-gray-500">Top programs</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}