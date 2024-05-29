"use client";
import React, { useState } from "react";
import Button from "./button";

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique pour gérer l'envoi du formulaire
    console.log({ name, email, message });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md">
      <div className="mb-3">
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full rounded-md border border-colorSilver bg-nightBlack p-2 text-white placeholder-colorSilver"
          placeholder="Nom"
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full rounded-md border border-colorSilver bg-nightBlack p-2 text-white placeholder-colorSilver"
          placeholder="E-Mail"
          required
        />
      </div>
      <div className="mb-4">
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 w-full rounded-md border border-colorSilver bg-nightBlack p-2 text-white placeholder-colorSilver"
          rows={4}
          placeholder="Message"
          required
        ></textarea>
      </div>
      <Button type="submit">
        <div className="">Send Message</div>
      </Button>
    </form>
  );
};

export default ContactForm;
