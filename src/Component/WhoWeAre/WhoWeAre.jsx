import React from "react";
import { useTranslation } from "react-i18next";

const bullets = [
  "about.bullets.0",
  "about.bullets.1",
  "about.bullets.2",
  "about.bullets.3",
  "about.bullets.4",
];

export default function WhoWeAre() {
  const { t } = useTranslation();

  return (
    <section className="cs-section" id="about">
      <div className="container">
        <div className="row align-items-center gy-5">

          <div className="col-lg-7">
            <span className="cs-section-label">
              {t("about.label")}
            </span>

            <h2>{t("about.heading")}</h2>
            <div className="cs-divider" />

            <p className="lead mb-4">
              {t("about.description")}
            </p>

            <ul className="cs-about-list">
              {bullets.map((key) => (
                <li key={key}>
                  <span className="check">✓</span>
                  <span>{t(key)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-5">
            <div className="cs-profile-card">
              <div className="mb-3" style={{ fontSize: "3rem" }}>👤</div>

              <h4>{t("about.profile.name")}</h4>

              <div className="title">
                {t("about.profile.title")}
              </div>

              <div className="contact-row">
                <span>📧</span>
                <a href="mailto:Morsy.ahmedd2@gmail.com">
                  {t("about.profile.email")}
                </a>
              </div>

              <div className="contact-row">
                <span>📍</span>
                <span>{t("about.profile.location")}</span>
              </div>

              <div className="contact-row">
                <span>🌐</span>
                <a
                  href="https://www.coresolutions.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("about.profile.website")}
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}