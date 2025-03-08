"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Github } from "lucide-react";

interface FormErrors {
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactForm() {
  const [formStatus] = useState<string>("");
  const [errors, setErrors] = useState<FormErrors>({});

  function validateForm(formData: FormData): FormErrors {
    const errors: FormErrors = {};
    if (!formData.get("first_name")) errors.first_name = "First name is required";
    if (!formData.get("last_name")) errors.last_name = "Last name is required";
    if (!formData.get("email")) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.get("email") as string)) {
      errors.email = "Invalid email format";
    }
    if (!formData.get("phone")) {
      errors.phone = "Phone number is required";
    } else if (!/^[0-9]+$/.test(formData.get("phone") as string)) {
      errors.phone = "Phone number must contain only digits";
    }
    if (!formData.get("message")) errors.message = "Message is required";
    return errors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "68219471-a8e1-44d7-a2c4-c89d4170b763");

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json()
      if (result.success) {
        alert("Message sent successfully!")
       
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Submission failed. Please check your internet connection.")
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white p-6 border border-purple-500/20 rounded-xl">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-semibold">
              <span className="text-[#a855f7]">Let&apos;s</span> work together!
            </h1>
            <p className="text-gray-400">
              I design and code beautifully simple things, and I love what I do. Just simple like that!
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <Input
              type="text"
              name="first_name"
              placeholder="First name"
              required
              className="bg-transparent border-b border-gray-700 rounded-lg px-3 h-12 focus-visible:ring-0 focus-visible:border-[#a855f7]"
            />
            {errors.first_name && <p className="text-red-500">{errors.first_name}</p>}

            <Input
              type="text"
              name="last_name"
              placeholder="Last name"
              required
              className="bg-transparent border-b border-gray-700 rounded-lg px-3 h-12 focus-visible:ring-0 focus-visible:border-[#a855f7]"
            />
            {errors.last_name && <p className="text-red-500">{errors.last_name}</p>}

            <Input
              type="email"
              name="email"
              placeholder="Email address"
              required
              className="bg-transparent border-b border-gray-700 rounded-lg px-3 h-12 focus-visible:ring-0 focus-visible:border-[#a855f7]"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}

            <Input
              type="tel"
              name="phone"
              placeholder="Phone number"
              className="bg-transparent border-b border-gray-700 rounded-lg px-3 h-12 focus-visible:ring-0 focus-visible:border-[#a855f7]"
            />
            {errors.phone && <p className="text-red-500">{errors.phone}</p>}

            <Textarea
              name="message"
              placeholder="Message"
              required
              className="bg-transparent border-b border-gray-700 rounded-lg px-3 min-h-[100px] focus-visible:ring-0 focus-visible:border-[#a855f7] resize-none"
            />
            {errors.message && <p className="text-red-500">{errors.message}</p>}

            <Button type="submit" className="bg-[#a855f7] hover:bg-[#9333ea] text-white rounded-full px-8">
              Send Message
            </Button>
            {formStatus && <p className="text-gray-400 mt-2">{formStatus}</p>}
          </form>
        </div>

        <div className="space-y-8">
          <p className="text-gray-400">
            I&apos;m currently available to take on new projects, so feel free to send me a message about anything that you
            want to run past me. You can contact me anytime, 24/7.
          </p>
          <div className="space-y-4">
            <p className="text-white hover:text-[#a855f7] transition-colors">
              <a href="mailto:gerolddesign@mail.com">ADS@mail.com</a>
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#a855f7] hover:border-[#a855f7] transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#a855f7] hover:border-[#a855f7] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}