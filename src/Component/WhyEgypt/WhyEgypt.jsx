import React from "react";
import { useTranslation } from "react-i18next";

const reasons = [
  {
    icon: "💰",
    titleKey: "whyEgypt.items.cost.title",
    bodyKey: "whyEgypt.items.cost.body",
  },
  {
    icon: "🗣️",
    titleKey: "whyEgypt.items.language.title",
    bodyKey: "whyEgypt.items.language.body",
  },
  {
    icon: "🌍",
    titleKey: "whyEgypt.items.timezone.title",
    bodyKey: "whyEgypt.items.timezone.body",
  },
  {
    icon: "🎓",
    titleKey: "whyEgypt.items.education.title",
    bodyKey: "whyEgypt.items.education.body",
  },
  {
    icon: "📱",
    titleKey: "whyEgypt.items.digital.title",
    bodyKey: "whyEgypt.items.digital.body",
  },
  {
    icon: "🔒",
    titleKey: "whyEgypt.items.security.title",
    bodyKey: "whyEgypt.items.security.body",
  },
];

export default function WhyEgypt() {
  const { t } = useTranslation();

  return (
    <section className="cs-section cs-section-dark" id="why-egypt">
      <div className="container">

        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-7">
            <span className="cs-section-label">
              {t("whyEgypt.label")}
            </span>

            <h2>{t("whyEgypt.heading")}</h2>

            <div className="cs-divider mx-auto" />
          </div>
        </div>

        <div className="row g-4">
          {reasons.map((r) => (
            <div className="col-sm-6 col-lg-4" key={r.titleKey}>
              <div className="cs-why-card">
                <div className="cs-why-icon">{r.icon}</div>
                <h5>{t(r.titleKey)}</h5>
                <p>{t(r.bodyKey)}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}