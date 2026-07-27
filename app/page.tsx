import Hero from "@/components/Hero";
import Image from "next/image";
import ServiceCard from "../components/ServiceCard";
import WhyChooseUs from "../components/WhyChooseUs";

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

        <h2 className="mb-10 text-4xl font-bold">
          Our Services
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
  {services.map((service) => (
    <ServiceCard
      key={service.title}
      title={service.title}
      description={service.description}
    />
  ))}
        </div>

      </section>
{/* Services Section */}
<WhyChooseUs />
    </main>
    </>
  );
}
