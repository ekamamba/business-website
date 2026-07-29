import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Johnson Realty",
    review:
      "The website exceeded our expectations. Professional, fast, and easy to work with.",
  },
  {
    name: "Michael Brown",
    company: "Brown Construction",
    review:
      "Outstanding service from start to finish. Communication was excellent throughout the project.",
  },
  {
    name: "Lisa Martinez",
    company: "LM Consulting",
    review:
      "Our new website helped us present a much more professional image to our clients.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold">
            What Our Clients Say
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            We take pride in building long-lasting relationships with our clients.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              company={testimonial.company}
              review={testimonial.review}
            />
          ))}
        </div>

      </div>
    </section>
  );
}