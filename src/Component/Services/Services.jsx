import React from "react";
import { useTranslation } from "react-i18next";

const services = [
  {
    icon: "📞",
    titleKey: "services.items.voice.title",
    bodyKey: "services.items.voice.body",
    tagKey: "services.items.voice.tag",
  },
  {
    icon: "💬",
    titleKey: "services.items.chat.title",
    bodyKey: "services.items.chat.body",
    tagKey: "services.items.chat.tag",
  },
  {
    icon: "🔄",
    titleKey: "services.items.overflow.title",
    bodyKey: "services.items.overflow.body",
    tagKey: "services.items.overflow.tag",
  },
  {
    icon: "🌐",
    titleKey: "services.items.multilingual.title",
    bodyKey: "services.items.multilingual.body",
    tagKey: "services.items.multilingual.tag",
  },
  {
    icon: "📋",
    titleKey: "services.items.queue.title",
    bodyKey: "services.items.queue.body",
    tagKey: "services.items.queue.tag",
  },
  {
    icon: "📊",
    titleKey: "services.items.reporting.title",
    bodyKey: "services.items.reporting.body",
    tagKey: "services.items.reporting.tag",
  },
];

export default function Services() {
  const { t } = useTranslation();

  return (
    <section className="cs-section cs-section-alt" id="services">
      <div className="container">

        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-7">
            <span className="cs-section-label">
              {t("services.label")}
            </span>

            <h2>{t("services.heading")}</h2>

            <div className="cs-divider mx-auto" />
          </div>
        </div>

        <div className="row g-4">
          {services.map((s) => (
            <div className="col-sm-6 col-lg-4" key={s.titleKey}>
              <div className="cs-service-card">
                <span className="cs-service-icon">{s.icon}</span>
                <h5>{t(s.titleKey)}</h5>
                <p>{t(s.bodyKey)}</p>
                <span className="cs-service-tag">
                  {t(s.tagKey)}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}