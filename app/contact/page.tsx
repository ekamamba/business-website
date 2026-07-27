import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="mb-8 text-4xl font-bold">
        Contact Us
      </h1>

      <p className="mb-8 text-gray-600">
        We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
      </p>

      <ContactForm />
    </main>
  );
}