"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Spinner from "@/components/Spinner";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.email("Please enter a valid email address."),
  phone: z.string().optional(),
  website: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const [status, setStatus] = useState<{
  type: "success" | "error";
  message: string;
} | null>(null);



 async function onSubmit(data: ContactFormData) {
  setStatus(null);

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message);
    }

    setStatus({
      type: "success",
      message: result.message,
    });

    reset();
  } catch {
    setStatus({
      type: "error",
      message: "Unable to send your message. Please try again.",
    });
  }
}

  return (
    <>
{status && (
  <div
    className={`mb-6 rounded-lg p-4 ${
      status.type === "success"
        ? "bg-green-100 text-green-800"
        : "bg-red-100 text-red-800"
    }`}
  >
    {status.message}
  </div>
)}
      <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
      >
              {/* Name */}

              <div>
                  <label className="mb-2 block font-semibold">
                      Name
                  </label>

                  <input
  {...register("name")}
  placeholder="John Smith"
  autoComplete="name"
  className="w-full rounded-lg border border-gray-300 px-4 py-3
             shadow-sm transition
             focus:border-blue-500
             focus:outline-none
             focus:ring-2
             focus:ring-blue-500"
/>

                  {errors.name && (
                      <p className="mt-1 text-sm text-red-600">
                          {errors.name.message}
                      </p>
                  )}
              </div>

              {/* Email */}

              <div>
                  <label className="mb-2 block font-semibold">
                      Email
                  </label>

               <input
  type="email"
  {...register("email")}
  placeholder="john@example.com"
  autoComplete="email"
  className="w-full rounded-lg border border-gray-300 px-4 py-3
             shadow-sm transition
             focus:border-blue-500
             focus:outline-none
             focus:ring-2
             focus:ring-blue-500"
/>

                  {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                          {errors.email.message}
                      </p>
                  )}
              </div>

              {/* Phone */}

              <div>
                  <label className="mb-2 block font-semibold">
                      Phone
                  </label>

                  <input
  {...register("phone")}
  placeholder="(555) 123-4567"
  autoComplete="tel"
  className="w-full rounded-lg border border-gray-300 px-4 py-3
             shadow-sm transition
             focus:border-blue-500
             focus:outline-none
             focus:ring-2
             focus:ring-blue-500"
/>

              </div>

              {/* Message */}

              <div>
                  <label className="mb-2 block font-semibold">
                      Message
                  </label>

                  <textarea
  rows={6}
  {...register("message")}
  placeholder="Tell us how we can help..."
  className="w-full rounded-lg border border-gray-300 px-4 py-3
             shadow-sm transition
             focus:border-blue-500
             focus:outline-none
             focus:ring-2
             focus:ring-blue-500"
/>

                  {errors.message && (
                      <p className="mt-1 text-sm text-red-600">
                          {errors.message.message}
                      </p>
                  )}
              </div>
<div className="hidden">
  <label htmlFor="website">Website</label>

  <input
    id="website"
    type="text"
    autoComplete="off"
    tabIndex={-1}
    {...register("website")}
  />
</div>
              <button
  type="submit"
  disabled={isSubmitting}
  className="inline-flex items-center justify-center rounded-lg
             bg-blue-600 px-6 py-3 font-medium text-white
             transition-all duration-200
             hover:bg-blue-700
             focus:outline-none
             focus:ring-2
             focus:ring-blue-500
             disabled:cursor-not-allowed
             disabled:opacity-50"
>
  <>
  {isSubmitting && <Spinner />}

  {isSubmitting ? "Sending..." : "Send Message"}
</>
</button>
          </form>
          
          </>
  );
}