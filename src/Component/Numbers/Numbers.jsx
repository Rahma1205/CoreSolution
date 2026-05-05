import React from "react";
import { useTranslation } from "react-i18next";

const pricing = [
  {
    flag: "🇬🇧",
    labelKey: "numbers.pricing.uk.label",
    priceKey: "numbers.pricing.uk.price",
    subKey: "numbers.pricing.sub",
    featured: false,
  },
  {
    flag: "🇪🇬",
    labelKey: "numbers.pricing.egypt.label",
    priceKey: "numbers.pricing.egypt.price",
    subKey: "numbers.pricing.sub",
    featured: true,
  },
  {
    flag: "🇪🇺",
    labelKey: "numbers.pricing.eu.label",
    priceKey: "numbers.pricing.eu.price",
    subKey: "numbers.pricing.sub",
    featured: false,
  },
];

export default function Numbers() {
  const { t } = useTranslation();

  return (
    <section className="cs-section cs-section-alt" id="numbers">
      <div className="container">

        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-7">
            <span className="cs-section-label">
              {t("numbers.label")}
            </span>

            <h2>{t("numbers.heading")}</h2>

            <div className="cs-divider mx-auto" />
          </div>
        </div>

        <div className="row g-4 align-items-center justify-content-center mb-5">
          {pricing.map((p) => (
            <div className="col-sm-6 col-lg-4" key={p.labelKey}>
              <div className={`cs-pricing-card${p.featured ? " featured" : ""}`}>
                <div className="flag">{p.flag}</div>

                <div className="label">
                  {t(p.labelKey)}
                </div>

                <div className="price">
                  {t(p.priceKey)}
                </div>

                <div className="sub">
                  {t(p.subKey)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="cs-savings-banner">
              <div className="desc mb-1">
                {t("numbers.savings.desc1")}
              </div>

              <div className="big">
                {t("numbers.savings.amount")}
              </div>

              <div className="desc mt-2">
                {t("numbers.savings.desc2.part1")}{" "}
                <strong>{t("numbers.savings.desc2.highlight")}</strong>
              </div>

              <div className="desc mt-1" style={{ opacity: 0.75 }}>
                {t("numbers.savings.desc3")}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}