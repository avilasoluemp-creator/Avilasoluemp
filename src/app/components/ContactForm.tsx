"use client";

import { FormEvent, useState } from "react";

const whatsappNumber = "5554991640157";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(
      "O formulário está pronto para integração, mas o envio ainda precisa de um serviço de backend. Por enquanto, fale conosco pelo WhatsApp ou e-mail."
    );
  }

  function handleWhatsApp() {
    const message = "Olá, gostaria de solicitar um orçamento para uma solução digital.";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <label>Nome<input name="name" required placeholder="Seu nome" /></label>
        <label>Empresa<input name="company" required placeholder="Nome da empresa" /></label>
        <label>E-mail<input name="email" type="email" required placeholder="voce@empresa.com" /></label>
        <label>WhatsApp<input name="phone" type="tel" required placeholder="(00) 00000-0000" /></label>
      </div>
      <label>Serviço de interesse
        <select name="service" defaultValue="">
          <option value="" disabled>Selecione uma opção</option>
          <option>Sistemas personalizados</option>
          <option>Sites institucionais</option>
          <option>CRM e ERP</option>
          <option>Automação empresarial</option>
          <option>Outro</option>
        </select>
      </label>
      <label>Conte um pouco sobre sua necessidade
        <textarea name="message" required rows={5} placeholder="Quais desafios você gostaria de resolver?" />
      </label>
      <p className="form-privacy">Seus dados serão usados apenas para responder ao seu contato. O envio online ainda não está conectado a um backend.</p>
      <div className="form-actions">
        <button type="submit" className="button-primary">Solicitar orçamento</button>
        <button type="button" className="button-secondary button-secondary-dark" onClick={handleWhatsApp}>Enviar pelo WhatsApp ↗</button>
      </div>
      {status && <p className="form-status" role="status">{status}</p>}
    </form>
  );
}
