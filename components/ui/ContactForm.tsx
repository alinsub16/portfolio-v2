'use client';

import React, { useState } from "react";
import { Send } from "lucide-react";

import Input from "@/components/ui/Input";
import { ContactFormData } from "@/types";
import { supabase } from "@/utils/supabase/client";
import {contactSchema} from '@/lib/validation/contactSchema'

type FormStatus = "idle" | "sending" | "success";

const ContactForm: React.FC = () => {

  const [formStatus, setFormStatus] = useState<FormStatus>("idle");

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {

  e.preventDefault();

  try {

    setFormStatus("sending");

    const { error } = await supabase
      .from("contact_messages")
      .insert([
        {
          full_name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
      ]);

    if (error) {
      throw error;
    }

    setFormStatus("success");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setFormStatus("idle");
    }, 3000);

  } catch (error) {

    console.error(error);

    setFormStatus("idle");
  }
};
  return (

    <form onSubmit={handleSubmit} className="space-y-4">

      <div className="grid sm:grid-cols-2 gap-4">

        <Input
          required
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          aria-label="Your Name"
          variant="default"
          disabled={formStatus === "sending"}
        />

        <Input
          required
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          aria-label="Email Address"
          variant="default"
          disabled={formStatus === "sending"}
        />

      </div>

      <Input
        required
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="Subject"
        aria-label="Subject"
        variant="default"
        disabled={formStatus === "sending"}
      />

      <textarea
        required
        rows={5}
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message..."
        aria-label="Your Message"
        disabled={formStatus === "sending"}
        className="
          w-full px-6 py-4
          bg-slate-950
          border border-slate-800
          rounded-2xl
          focus:outline-none
          focus:border-cyan-500
          focus:ring-2
          focus:ring-cyan-500/10
          transition-all
          text-white
          resize-none
          disabled:opacity-50
        "
      />

      <button
        type="submit"
        disabled={formStatus !== "idle"}
        className={`
          w-full py-5 rounded-2xl
          font-black
          transition-all
          flex items-center justify-center gap-3
          disabled:cursor-not-allowed
          ${
            formStatus === "success"
              ? "bg-green-500 text-white"
              : "bg-cyan-500 hover:bg-cyan-600 text-slate-900 active:scale-95"
          }
        `}
      >

        {formStatus === "idle" && (
          <>
            Send Message
            <Send size={18} />
          </>
        )}

        {formStatus === "sending" && (
          <div className="w-6 h-6 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
        )}

        {formStatus === "success" && (
          "Message Sent!"
        )}

      </button>

    </form>
  );
};

export default ContactForm;