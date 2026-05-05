import React from "react";
import { useTranslation } from "react-i18next";

const industries = [
  {
    icon: "✈️",
    key: "travel",
  },
  {
    icon: "💳",
    key: "fintech",
  },
  {
    icon: "🏥",
    key: "healthcare",
  },
  {
    icon: "📡",
    key: "telecom",
  },
];

export default function Industries() {
  const { t } = useTranslation();

  return (
    <section className="cs-section" id="industries">
      <div className="container">

        <div className="row justify-content-center text-center mb-2">
          <div className="col-lg-8">
            <span className="cs-section-label">
              {t("industries.label")}
            </span>

            <h2>{t("industries.heading")}</h2>

            <div className="cs-divider mx-auto" />

            <p className="lead">
              {t("industries.description")}
            </p>
          </div>
        </div>

        <div className="row g-4 mt-2">
          {industries.map((ind) => (
            <div className="col-sm-6 col-lg-3" key={ind.key}>
              <div className="cs-industry-card">
                <div className="cs-industry-icon">{ind.icon}</div>

                <h5>
                  {t(`industries.items.${ind.key}.title`)}
                </h5>

                <ul>
                  {t(`industries.items.${ind.key}.list`, {
                    returnObjects: true,
                  }).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
} 