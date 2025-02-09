import React, { useState, useEffect } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Recupera os dados salvos no Local Storage quando o componente é montado
  useEffect(() => {
    const savedContact = JSON.parse(localStorage.getItem("contact"));
    if (savedContact) setContact(savedContact);
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setContact((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  function validateInputs() {
    const newErrors = {};
    if (!contact.fName) newErrors.fName = "O nome é obrigatório.";
    if (!contact.lName) newErrors.lName = "O sobrenome é obrigatório.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) {
      newErrors.email = "E-mail inválido.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (validateInputs()) {
      localStorage.setItem("contact", JSON.stringify(contact));
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      
      try {
        const response = await fetch("http://localhost:5000/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(contact),
        });
        const data = await response.json();
        console.log("Servidor respondeu:", data);
      } catch (error) {
        console.error("Erro ao enviar dados para o backend:", error);
      }
    }
  }

  function handleReset() {
    setContact({ fName: "", lName: "", email: "" });
    setErrors({});
    localStorage.removeItem("contact");
  }

  return (
    <div className="container">
      <h1>Preencha o formulário</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input onChange={handleChange} value={contact.fName} name="fName" placeholder="Nome" />
          {errors.fName && <small style={{ color: "red" }}>{errors.fName}</small>}
        </div>
        <div>
          <input onChange={handleChange} value={contact.lName} name="lName" placeholder="Sobrenome" />
          {errors.lName && <small style={{ color: "red" }}>{errors.lName}</small>}
        </div>
        <div>
          <input onChange={handleChange} value={contact.email} name="email" placeholder="E-mail" />
          {errors.email && <small style={{ color: "red" }}>{errors.email}</small>}
        </div>
        <button type="submit">{isSubmitted ? "Enviado!" : "Enviar"}</button>
        <button type="button" onClick={handleReset}>Limpar</button>
      </form>
    </div>
  );
}

export default App;
