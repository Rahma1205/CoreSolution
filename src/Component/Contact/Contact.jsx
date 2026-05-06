import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  const cards = [
    {
      icon: "👤",
      label: t("contact.cards.contact.label"),
      value: (
        <>
          {t("contact.cards.contact.name")}
          <br />
          {t("contact.cards.contact.role")}
        </>
      ),
    },
    {
      icon: "📧",
      label: t("contact.cards.email.label"),
      value: t("contact.cards.email.value"),
    },
    {
      icon: "📍",
      label: t("contact.cards.location.label"),
      value: t("contact.cards.location.value"),
    },
    {
      icon: "🌐",
      label: t("contact.cards.website.label"),
      value: t("contact.cards.website.value"),
    },
  ];

  // ✨ Scroll Animation
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal, .stagger-children");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="talk-wrapper reveal">
      <p className="talk-label">{t("contact.label")}</p>

      <h1 className="talk-heading">
        {t("contact.heading.line1")}
        <br />
        <span className="teal">{t("contact.heading.highlight")}</span>
      </h1>

      <div className="talk-desc">{t("contact.description")}</div>

      <div className="cards-row stagger-children">
        {cards.map((card, index) => (
          <div key={index} className="contact-card hover-lift">
            <div className="c-icon">{card.icon}</div>
            <div className="c-label">{card.label}</div>
            <div className="c-value">{card.value}</div>
          </div>
        ))}
      </div>

      <p className="talk-quote">{t("contact.quote")}</p>
    </div>
  );
}