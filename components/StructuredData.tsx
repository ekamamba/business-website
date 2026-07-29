export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",

    name: "DMK IT Solutions",

    description:
      "Professional website development, custom software development, and IT consulting.",

    url: "https://business-website-gilt-five.vercel.app",

    logo: "https://business-website-gilt-five.vercel.app/images/logo.png",

    image: "https://business-website-gilt-five.vercel.app/images/og-image.png",

    email: "mailto:dmkitsolutions2005@gmail.com",

    areaServed: "United States",

    knowsAbout: [
      "Website Development",
      "Next.js",
      "React",
      "TypeScript",
      "Software Development",
      "IT Consulting",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}