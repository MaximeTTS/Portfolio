"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactForm: React.FC = () => {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().max(50, "Doit contenir 50 caractères ou moins").required("Requis"),
      email: Yup.string().email("Adresse email invalide").required("Requis"),
      message: Yup.string().max(500, "Doit contenir 500 caractères ou moins").required("Requis"),
    }),
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values, { setSubmitting, setStatus, resetForm }) => {
      setSubmitting(true);
      setStatus(null);
      setHasSubmitted(true);

      try {
        const response = await fetch("https://formspree.io/f/xwkgjgre", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          setStatus({ success: "Message envoyé avec succès!" });
          resetForm();
          setHasSubmitted(false);
        } else {
          throw new Error("Erreur lors de l'envoi du message.");
        }
      } catch (error) {
        if (error instanceof Error) {
          setStatus({ error: error.message });
        } else {
          setStatus({ error: "An unknown error occurred." });
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="max-w-md">
      <div className="mb-3">
        <input
          type="text"
          id="name"
          {...formik.getFieldProps("name")}
          className="mt-1 w-full rounded-md border border-colorSilver bg-nightBlack p-2 text-white placeholder-colorSilver"
          placeholder="Nom"
        />
        {(hasSubmitted || formik.touched.name) && formik.errors.name ? (
          <div className="pt-1 text-platinum">{formik.errors.name}</div>
        ) : null}
      </div>
      <div className="mb-3">
        <input
          type="email"
          id="email"
          {...formik.getFieldProps("email")}
          className="mt-1 w-full rounded-md border border-colorSilver bg-nightBlack p-2 text-white placeholder-colorSilver"
          placeholder="E-Mail"
        />
        {(hasSubmitted || formik.touched.email) && formik.errors.email ? (
          <div className="pt-1 text-platinum">{formik.errors.email}</div>
        ) : null}
      </div>
      <div className="mb-4">
        <textarea
          id="message"
          {...formik.getFieldProps("message")}
          className="mt-1 w-full rounded-md border border-colorSilver bg-nightBlack p-2 text-white placeholder-colorSilver"
          rows={4}
          placeholder="Message"
        ></textarea>
        {(hasSubmitted || formik.touched.message) && formik.errors.message ? (
          <div className="pt-1 text-platinum">{formik.errors.message}</div>
        ) : null}
      </div>
      <button
        type="submit"
        disabled={formik.isSubmitting}
        className="w-fit cursor-pointer rounded-3xl bg-themeColor px-5 py-4 font-bold text-white transition-all hover:shadow-customHover"
      >
        {formik.isSubmitting ? "Envoi en cours..." : "Send Message"}
      </button>
      {formik.status?.error && <div className="mt-3 text-red-500">{formik.status.error}</div>}
      {formik.status?.success && <div className="mt-3 text-green-500">{formik.status.success}</div>}
    </form>
  );
};

export default ContactForm;
