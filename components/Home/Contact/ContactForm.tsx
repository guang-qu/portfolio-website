"use client";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [result, setResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const onSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult({
      success: true,
      message: "sending.....",
    });

    const body = {
      ...formData,
      access_key: "99800d64-7454-48d6-83ba-ccfc048b61cd",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (data.success) {
        setResult({ success: true, message: "Form Submitted Successfully" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResult({ success: false, message: data.message });
      }
    } catch (error) {
      console.error(error);
      setResult({
        success: false,
        message: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name" className="mt-5 text-white/70">
        Full Name:
      </label>
      <input
        id="name"
        type="text"
        placeholder="First Last"
        value={formData.name}
        onChange={handleChange}
        className="px-4 py-3.5 mb-5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
        required
      ></input>
      <label htmlFor="email" className="text-white/70">
        Email:
      </label>
      <input
        id="email"
        type="email"
        placeholder="example@email.com"
        value={formData.email}
        onChange={handleChange}
        className="px-4 py-3.5 mb-5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
        required
      ></input>
      <label htmlFor="message" className="text-white/70">
        Share your thoughts!
      </label>
      <textarea
        id="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Write your message here"
        className="px-4 py-3.5 mb-5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70 h-40"
        required
      ></textarea>
      <button
        type="submit"
        className="px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all duration-300 cursor-pointer text-white rounded-full"
      >
        Send Message
      </button>

      {result && (
        <p className={result.success ? "text-green-400" : "text-red-400"}>
          {result.message}
        </p>
      )}
    </form>
  );
}
