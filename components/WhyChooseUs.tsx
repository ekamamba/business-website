const features = [
  {
    title: "Experienced Professionals",
    description:
      "We deliver reliable, high-quality solutions using modern development practices.",
  },
  {
    title: "Customer-Focused",
    description:
      "Every project starts by understanding your business goals and your customers.",
  },
  {
    title: "Modern Technology",
    description:
      "We build fast, secure, and scalable applications using the latest technologies.",
  },
  {
    title: "Ongoing Support",
    description:
      "Our relationship doesn't end after launch. We're here to help your business grow.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Why Choose Us
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            We're committed to delivering technology solutions that
            help businesses succeed.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-slate-200 p-8 shadow-sm transition hover:shadow-lg"
            >
              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl text-white">
                  ✓
                </div>

                <div>
                  <h3 className="text-2xl font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {feature.description}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}