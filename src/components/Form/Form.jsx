import React, { useState } from "react";
import "./Form.css";
import axios from "axios";

const ContactForm = () => {
  // 2. Gérer l'état du formulaire
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");

  // Gérer les changements de saisie
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // 3. Gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation simple
    if (!formData.name || !formData.email || !formData.message) {
      setError("Tous les champs sont requis");
      return;
    }

    setError("");

    try {
      console.log("Envoi des données du formulaire:", formData); 
      const response = await axios.post("http://localhost:5000/api/contact", formData);
      console.log("•͡˘㇁•͡˘Response du serveur:", response.data);

      // Réinitialisation des champs du formulaire après une soumission réussie
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      alert("Formulaire envoyé avec succès!");
    } catch (error) {
      console.error("ʕ·͡ᴥ·ʔ﻿Error:", error);
      setError(error.response?.data?.message || "Une erreur s'est produite lors de l'envoi du formulaire");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
         {error && <div className="error">{error}</div>}
      <div>
        <label>
          Nom / Organisation:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </label>
      </div>
      <button className="button-form" type="submit">Envoyer</button>
    </form>
  );
};

export default ContactForm;
