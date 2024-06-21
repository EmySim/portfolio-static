import React, { useState } from "react";
import "./Email.css";
import { useForm, ValidationError } from "@formspree/react";

function EmailForm() {
  const [state, handleSubmit] = useForm("xdknnael");
  const [formValues, setFormValues] = useState({
    email: "",
    message: "",
  });
  const [error, setError] = useState("");

  // Gérer les changements de saisie
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // Valider l'adresse email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Gérer la soumission du formulaire
  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prévenir le comportement par défaut

    // Validation des champs du formulaire
    if (!formValues.email || !formValues.message) {
      setError("Tous les champs sont requis");
      return;
    }

    if (!validateEmail(formValues.email)) {
        setError("Veuillez entrer une adresse email valide");
        return;
      }

    setError(""); // Réinitialiser les erreurs

    try {
      const result = await handleSubmit(e);
      if (result && result.succeeded) {
        setFormValues({
          email: "",
          message: "",
        });
        alert("Message envoyé avec succès!");
      } else {
        setError("Une erreur s'est produite lors de l'envoi du message");
      }
    } catch (error) {
      console.error("ʕ·͡ᴥ·ʔ﻿Error:", error);
      setError(error.response?.data?.message || "Une erreur s'est produite lors de l'envoi du message");
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {error && <div className="error">{error}</div>}
      <div>
        <label htmlFor="email">Entrez votre Adresse Email</label>
      </div>

      <div className="email">
        <input
          id="email"
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="message">Adressez moi un message.</label>
        <textarea
          id="message"
          name="message"
          value={formValues.message}
          onChange={handleChange}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <div>
        <button type="submit" disabled={state.submitting}>
          Envoyez
        </button>
        {state.succeeded && <p>Votre message a bien été envoyé.</p>}
      </div>
    </form>
  );
}

export default EmailForm;
