import React from "react";
import { useTranslation } from "react-i18next";

const steps = [
  { num: "1", titleKey: "pilot.steps.1.title", bodyKey: "pilot.steps.1.body" },
  { num: "2", titleKey: "pilot.steps.2.title", bodyKey: "pilot.steps.2.body" },
  { num: "3", titleKey: "pilot.steps.3.title", bodyKey: "pilot.steps.3.body" },
  { num: "4", titleKey: "pilot.steps.4.title", bodyKey: "pilot.steps.4.body" },
];

const includesKeys = [
  "pilot.includes.0",
  "pilot.includes.1",
  "pilot.includes.2",
  "pilot.includes.3",
  "pilot.includes.4",
  "pilot.includes.5",
];

export default function Pilot() {
  const { t } = useTranslation();

  return (
    <section className="cs-section" id="pilot">
      <div className="container">

        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-7">
            <span className="cs-section-label">
              {t("pilot.label")}
            </span>

            <h2>{t("pilot.heading")}</h2>

            <div className="cs-divider mx-auto" />

            <p className="lead">
              {t("pilot.description")}
            </p>
          </div>
        </div>

        <div className="row g-4 align-items-start">

          {/* Steps */}
          <div className="col-lg-7">
            <div className="d-flex flex-column gap-3">
              {steps.map((s) => (
                <div className="cs-step" key={s.num}>
                  <div className="cs-step-num">{s.num}</div>
                  <div>
                    <h5>{t(s.titleKey)}</h5>
                    <p>{t(s.bodyKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-5">
            <div className="cs-pilot-includes">
              <h5>{t("pilot.includesTitle")}</h5>

              <ul>
                {includesKeys.map((key) => (
                  <li key={key}>
                    <span className="check-icon">✓</span>
                    {t(key)}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="btn btn-success rounded-pill w-100 mt-4 py-2 fw-semibold"
              >
                {t("pilot.cta")}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}