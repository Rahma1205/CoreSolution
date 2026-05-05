import React from "react";
import { useTranslation } from "react-i18next";

const contacts = [
  {
    icon: "👤",
    labelKey: "contact.items.person.label",
    valueKey: "contact.items.person.value",
  },
  {
    icon: "📧",
    labelKey: "contact.items.email.label",
    type: "email",
    value: "Morsy.ahmedd2@gmail.com",
  },
  {
    icon: "📍",
    labelKey: "contact.items.location.label",
    valueKey: "contact.items.location.value",
  },
  {
    icon: "🌐",
    labelKey: "contact.items.website.label",
    type: "website",
    value: "https://www.coresolutions.co",
  },
];

export default function Contact() {
  const { t } = useTranslation();

  const renderValue = (c) => {
    if (c.type === "email") {
      return (
        <a href={`mailto:${c.value}`}>
          {c.value}
        </a>
      );
    }

    if (c.type === "website") {
      return (
        <a href={c.value} target="_blank" rel="noreferrer">
          {t("contact.items.website.value")}
        </a>
      );
    }

    return t(c.valueKey);
  };

  return (
    <section className="cs-cta-section" id="contact">
      <div className="container">
        <div className="row align-items-center gy-5">

          <div className="col-lg-6">
            <span className="cs-section-label">
              {t("contact.label")}
            </span>

            <h2>{t("contact.heading")}</h2>

            <p>{t("contact.description")}</p>

            <a
              href="mailto:Morsy.ahmedd2@gmail.com"
              className="cs-hero-cta"
              style={{ display: "inline-block" }}
            >
              {t("contact.cta")}
            </a>

            <blockquote className="cs-quote">
              {t("contact.quote")}
            </blockquote>
          </div>

          <div className="col-lg-5 offset-lg-1">
            <div className="cs-contact-box">
              {contacts.map((c, i) => (
                <div className="cs-contact-row" key={i}>
                  <div className="cs-contact-icon">{c.icon}</div>
                  <div>
                    <div className="label">
                      {t(c.labelKey)}
                    </div>
                    <div className="value">
                      {renderValue(c)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}