import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function WhoWeAre() {
  const { t } = useTranslation();

  const features = [
    t("who.features.0"),
    t("who.features.1"),
    t("who.features.2"),
    t("who.features.3"),
    t("who.features.4"),
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
    <div className="core-wrapper">
      <section className="core-section reveal">

        <div className="row g-4 align-items-center">

          {/* LEFT */}
          <div className="col-12 col-md-7">
            <p className="who-label">{t("who.label")}</p>

            <h1 className="core-heading">{t("who.heading")}</h1>

            <p className="core-desc">
              {t("who.description")}
            </p>

            <ul className="feature-list stagger-children">
              {features.map((feature, index) => (
                <li key={index} className="feature-item">
                  <span className="feature-dot"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="col-12 col-md-5 d-flex align-items-stretch">
            <div className="contact-card w-100 reveal hover-lift">
              <div className="contact-name">
                {t("who.contact.name")}
              </div>

              <div className="contact-role">
                {t("who.contact.role")}
                <br />
                {t("who.contact.company")}
              </div>

              <div className="contact-divider"></div>

              <div className="contact-info">
                <div className="contact-row">
                  <span>📧</span>
                  <span>{t("who.contact.email")}</span>
                </div>

                <div className="contact-row">
                  <span>📍</span>
                  <span>{t("who.contact.location")}</span>
                </div>

                <div className="contact-row">
                  <span>🌐</span>
                  <span>{t("who.contact.website")}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      

      </section>
    </div>
  );
}