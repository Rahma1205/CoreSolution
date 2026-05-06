import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Pilot() {
  const { t } = useTranslation();

  const steps = [
    {
      number: 1,
      title: t("pilot.steps.1.title"),
      desc: t("pilot.steps.1.desc"),
    },
    {
      number: 2,
      title: t("pilot.steps.2.title"),
      desc: t("pilot.steps.2.desc"),
    },
    {
      number: 3,
      title: t("pilot.steps.3.title"),
      desc: t("pilot.steps.3.desc"),
    },
    {
      number: 4,
      title: t("pilot.steps.4.title"),
      desc: t("pilot.steps.4.desc"),
    },
  ];

  const included = [
    t("pilot.included.0"),
    t("pilot.included.1"),
    t("pilot.included.2"),
    t("pilot.included.3"),
    t("pilot.included.4"),
    t("pilot.included.5"),
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
    <div className="pilot-wrapper reveal">
      <div className="pilot-label">
        {t("pilot.label.part1")} <span className="dot">·</span> {t("pilot.label.part2")}
      </div>

      <h1 className="pilot-heading">{t("pilot.heading")}</h1>

      <p className="pilot-desc">{t("pilot.description")}</p>

      {/* Steps */}
      <div className="steps-row stagger-children">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="step">
              <div className="step-circle">{step.number}</div>
              <div className="step-title">{step.title}</div>
              <p className="step-desc">{step.desc}</p>
            </div>

            {index < steps.length - 1 && (
              <div className="step-connector">
                <div className="step-connector-line" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Included */}
      <div className="included-box reveal">
        <div className="included-title">{t("pilot.includedTitle")}</div>

        <div className="included-grid stagger-children">
          {included.map((item, index) => (
            <div key={index} className="included-item">
              <span className="check">✓</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}