import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Numbers() {
  const { t } = useTranslation();

  const bars = [
    {
      flag: "🇬🇧",
      label: t("numbers.bars.0.label"),
      width: "100%",
      color: "#e05a3a",
      price: t("numbers.bars.0.price"),
      inside: true,
    },
    {
      flag: "🇪🇺",
      label: t("numbers.bars.1.label"),
      width: "71%",
      color: "#e8912a",
      price: t("numbers.bars.1.price"),
      inside: false,
    },
    {
      flag: "🇪🇬",
      label: t("numbers.bars.2.label"),
      width: "27%",
      color: "#2dd4bf",
      price: t("numbers.bars.2.price"),
      inside: false,
    },
  ];

  // ✨ Scroll animation + bar animation
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal, .stagger-children");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");

            // 🎯 animate bars
            const fills = entry.target.querySelectorAll(".bar-fill");
            fills.forEach((bar) => {
              bar.style.width = bar.getAttribute("data-width");
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="num-wrapper reveal">
      <p className="num-label">{t("numbers.label")}</p>

      <h1 className="num-heading">{t("numbers.heading")}</h1>

      <div className="main-row">

        {/* LEFT */}
        <div className="bars-col stagger-children">
          {bars.map((bar, index) => (
            <div key={index} className="bar-group">
              <div className="bar-flag-label">
                {bar.flag} {bar.label}
              </div>

              <div className="bar-track">
                <div
                  className="bar-fill"
                  data-width={bar.width}
                  style={{
                    width: "0%",
                    background: bar.color,
                    transition: "width 1.2s ease"
                  }}
                />

                {bar.inside ? (
                  <span className="bar-label-inside">{bar.price}</span>
                ) : (
                  <span className="bar-label-outside">{bar.price}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="savings-card reveal">
          <p className="savings-top-text">
            {t("numbers.savings.top")}
          </p>

          <div className="savings-amount">
            {t("numbers.savings.amount")}
          </div>

          <div className="savings-per">
            {t("numbers.savings.per")}
          </div>

          <div className="savings-divider" />

          <div className="savings-highlight">
            {t("numbers.savings.highlight")}
          </div>

          <div className="savings-note">
            {t("numbers.savings.note")}
          </div>
        </div>

      </div>
    </div>
  );
}