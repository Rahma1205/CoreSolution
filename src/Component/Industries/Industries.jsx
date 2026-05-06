import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Industries() {
  const { t } = useTranslation();

  const industries = [
    {
      icon: "✈️",
      title: t("industries.items.0.title"),
      items: [
        t("industries.items.0.list.0"),
        t("industries.items.0.list.1"),
        t("industries.items.0.list.2"),
        t("industries.items.0.list.3"),
      ],
    },
    {
      icon: "💳",
      title: t("industries.items.1.title"),
      items: [
        t("industries.items.1.list.0"),
        t("industries.items.1.list.1"),
        t("industries.items.1.list.2"),
        t("industries.items.1.list.3"),
      ],
    },
    {
      icon: "🏥",
      title: t("industries.items.2.title"),
      items: [
        t("industries.items.2.list.0"),
        t("industries.items.2.list.1"),
        t("industries.items.2.list.2"),
        t("industries.items.2.list.3"),
      ],
    },
    {
      icon: "📡",
      title: t("industries.items.3.title"),
      items: [
        t("industries.items.3.list.0"),
        t("industries.items.3.list.1"),
        t("industries.items.3.list.2"),
        t("industries.items.3.list.3"),
      ],
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
    <div className="ind-wrapper reveal">
      <p className="ind-label">{t("industries.label")}</p>

      <h1 className="ind-heading">{t("industries.heading")}</h1>

      <p className="ind-desc">{t("industries.description")}</p>

      <div className="ind-grid stagger-children">
        {industries.map((ind, index) => (
          <div key={index} className="ind-card hover-lift">
            <div className="ind-icon">{ind.icon}</div>
            <div className="ind-title">{ind.title}</div>
            <div className="ind-divider"></div>

            <ul className="ind-list">
              {ind.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>


    </div>
  );
}