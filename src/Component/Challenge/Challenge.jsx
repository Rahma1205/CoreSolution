import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Challenge() {
  const { t } = useTranslation();

  const challenges = [
    {
      icon: "💸",
      title: t("challenge.items.0.title"),
      desc: t("challenge.items.0.desc"),
    },
    {
      icon: "📈",
      title: t("challenge.items.1.title"),
      desc: t("challenge.items.1.desc"),
    },
    {
      icon: "🌍",
      title: t("challenge.items.2.title"),
      desc: t("challenge.items.2.desc"),
    },
    {
      icon: "⏰",
      title: t("challenge.items.3.title"),
      desc: t("challenge.items.3.desc"),
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
    <div className="chal-wrapper reveal">
      <p className="chal-label">{t("challenge.label")}</p>

      <h1 className="chal-heading">
        {t("challenge.heading")}
      </h1>

      <div className="chal-grid stagger-children">
        {challenges.map((item, index) => (
          <div key={index} className="chal-card hover-lift">
            <div className="card-top">
              <span className="card-icon">{item.icon}</span>
              <span className="card-title">{item.title}</span>
            </div>

            <p className="card-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}