import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function WhyEgypt() {
  const { t } = useTranslation();

  const cards = [
    {
      icon: "💰",
      title: t("why.items.0.title"),
      desc: t("why.items.0.desc"),
    },
    {
      icon: "🗣️",
      title: t("why.items.1.title"),
      desc: t("why.items.1.desc"),
    },
    {
      icon: "🌍",
      title: t("why.items.2.title"),
      desc: t("why.items.2.desc"),
    },
    {
      icon: "🎓",
      title: t("why.items.3.title"),
      desc: t("why.items.3.desc"),
    },
    {
      icon: "🔢",
      title: t("why.items.4.title"),
      desc: t("why.items.4.desc"),
    },
    {
      icon: "🔒",
      title: t("why.items.5.title"),
      desc: t("why.items.5.desc"),
    },
  ];

  // ✨ Scroll animation
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
    <div className="why-wrapper reveal">
      <p className="why-label">{t("why.label")}</p>

      <h1 className="why-heading">
        {t("why.heading")}
      </h1>

      <div className="cards-grid stagger-children">
        {cards.map((card, index) => (
          <div key={index} className="why-card hover-lift">
            <div className="card-top">
              <span className="card-icon">{card.icon}</span>
              <span className="card-title">{card.title}</span>
            </div>

            <p className="card-desc">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}