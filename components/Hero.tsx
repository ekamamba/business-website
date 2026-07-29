export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      
      <div className="mx-auto max-w-7xl px-6 py-24 lg:flex lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-200">
            ★ Trusted Business Solutions
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight lg:text-6xl">
            Helping Businesses Grow Through Modern Technology
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            We design modern, responsive websites and custom software
            solutions that help businesses attract customers, improve
            efficiency, and grow with confidence.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Get a Free Quote
            </a>

            <a
              href="/services"
              className="rounded-lg border border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-slate-900"
            >
              Our Services
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3 text-yellow-300">
            <span className="text-xl">★★★★★</span>
            <span className="text-sm text-slate-300">
              Professional • Reliable • Customer Focused
            </span>
          </div>
        </div>
        <div className="mt-16 lg:mt-0 lg:ml-12">
  <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-md shadow-2xl border border-white/10">

    <h3 className="text-2xl font-bold">
      Why Businesses Choose Us
    </h3>

    <ul className="mt-6 space-y-4 text-slate-200">
      <li>✅ Modern Responsive Websites</li>
      <li>✅ Custom Software Solutions</li>
      <li>✅ SEO-Friendly Development</li>
      <li>✅ Fast & Secure Applications</li>
      <li>✅ Ongoing Support</li>
    </ul>

    <div className="mt-8 rounded-xl bg-blue-600 p-6 text-center">
      <p className="text-4xl font-extrabold">
        20+
      </p>

      <p className="mt-2 text-sm">
        Years Experience
      </p>
    </div>

  </div>
</div>
      </div>
    </section>
  );
}