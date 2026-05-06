import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: "📞",
      title: t("services.items.0.title"),
      desc: t("services.items.0.desc"),
      badge: t("services.items.0.badge"),
    },
    {
      icon: "💬",
      title: t("services.items.1.title"),
      desc: t("services.items.1.desc"),
      badge: t("services.items.1.badge"),
    },
    {
      icon: "🔄",
      title: t("services.items.2.title"),
      desc: t("services.items.2.desc"),
      badge: t("services.items.2.badge"),
    },
    {
      icon: "🌐",
      title: t("services.items.3.title"),
      desc: t("services.items.3.desc"),
      badge: t("services.items.3.badge"),
    },
    {
      icon: "📋",
      title: t("services.items.4.title"),
      desc: t("services.items.4.desc"),
      badge: t("services.items.4.badge"),
    },
    {
      icon: "📊",
      title: t("services.items.5.title"),
      desc: t("services.items.5.desc"),
      badge: t("services.items.5.badge"),
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
    <div className="services-wrapper reveal">
      <p className="services-label">{t("services.label")}</p>

      <h1 className="services-heading">
        {t("services.heading")}
      </h1>

      <div className="services-grid stagger-children">
        {services.map((service, index) => (
          <div key={index} className="service-card hover-lift">
            <div className="card-icon">{service.icon}</div>
            <div className="card-title">{service.title}</div>
            <p className="card-desc">{service.desc}</p>
            <span className="card-badge">{service.badge}</span>
          </div>
        ))}
      </div>
    </div>
  );
}