import React from "react";
import { useTranslation } from "react-i18next";

const challenges = [
  {
    icon: "💸",
    titleKey: "challenge.items.cost.title",
    bodyKey: "challenge.items.cost.body",
  },
  {
    icon: "📈",
    titleKey: "challenge.items.scale.title",
    bodyKey: "challenge.items.scale.body",
  },
  {
    icon: "🌍",
    titleKey: "challenge.items.language.title",
    bodyKey: "challenge.items.language.body",
  },
  {
    icon: "⏰",
    titleKey: "challenge.items.timezone.title",
    bodyKey: "challenge.items.timezone.body",
  },
];

export default function Challenge() {
  const { t } = useTranslation();

  return (
    <section className="cs-section cs-section-alt" id="challenge">
      <div className="container">

        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-7">
            <span className="cs-section-label">
              {t("challenge.badge")}
            </span>
            <h2>{t("challenge.heading")}</h2>
            <div className="cs-divider mx-auto" />
          </div>
        </div>

        <div className="row g-4">
          {challenges.map((c) => (
            <div className="col-sm-6 col-lg-3" key={c.titleKey}>
              <div className="cs-challenge-card">
                <span className="cs-challenge-icon">{c.icon}</span>
                <h5>{t(c.titleKey)}</h5>
                <p>{t(c.bodyKey)}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}