import Hero from "@/components/Hero";
import Image from "next/image";
import ServiceCard from "../components/ServiceCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";

const services = [
  {
    title: "Custom Software",
    description: "Business applications built specifically for your workflow.",
  },
  {
    title: "Cloud Solutions",
    description: "Deploy secure and scalable cloud infrastructure.",
  },
  {
    title: "Database Design",
    description: "Design high-performance relational databases.",
  },
];

export default function Home() {
  return (
    <>
     <main className="mx-auto max-w-6xl p-8">
      <Hero />

      <section className="mt-20">

        <section className="bg-slate-50 py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">
      <h2 className="text-4xl font-bold">
        Our Services
      </h2>

      <p className="mt-4 text-lg text-slate-600">
        Professional technology solutions designed
        to help your business succeed.
      </p>
    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      <ServiceCard
        icon="🌐"
        title="Website Development"
        description="Modern, responsive websites built using the latest technologies."
      />

      <ServiceCard
        icon="⚙️"
        title="Custom Software"
        description="Business applications tailored to your organization's needs."
      />

      <ServiceCard
        icon="☁️"
        title="Cloud Solutions"
        description="Scalable cloud services, hosting, deployment, and automation."
      />

    </div>

  </div>
</section>

      </section>
{/* Services Section */}
<WhyChooseUs />
<Testimonials />
<CallToAction />
    </main>
    </>
  );
}
