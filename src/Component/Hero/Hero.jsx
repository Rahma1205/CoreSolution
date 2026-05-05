import { useTranslation } from "react-i18next";

const stats = [
  { value: "60", suffix: "%", key: "stat1" },
  { value: "24", suffix: "/7", key: "stat2" },
  { value: "2", suffix: "+", key: "stat3" },
  { value: "30", suffix: null, key: "stat4" },
];

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero-section">
      <div className="container hero-content">

        <div className="fade-up delay-1">
          <span className="hero-badge">
            <span className="hero-badge-dot" />
            {t("hero.badge")}
          </span>
        </div>

        <div className="row">
          <div className="col-lg-8 col-xl-7">

            <h1 className="hero-headline fade-up delay-2">
              <span className="c-white">{t("hero.title1")}<br /></span>
              <span className="c-green">{t("hero.title2")}<br /></span>
              <span className="c-white">{t("hero.title3")}<br /></span>
              <span className="c-gold">{t("hero.title4")}</span>
            </h1>

            <p className="hero-body fade-up delay-3">
              {t("hero.description")}
            </p>

            {/* <div className="hero-cta-row fade-up delay-4">
              <a href="#pilot" className="btn-hero-primary">
                {t("hero.ctaPrimary")} →
              </a>
              <a href="#services" className="btn-hero-secondary">
                {t("hero.ctaSecondary")}
              </a>
            </div> */}

          </div>
        </div>

        <div className="hero-stats fade-up delay-5">
          <div className="row g-0">

            {stats.map((s, i) => (
              <div className="col-6 col-md-3" key={i}>
                <div className="stat-block">

                  <div className="stat-number">
                    {s.value}
                    {s.suffix && <span className="accent">{s.suffix}</span>}
                  </div>

                  <p className="stat-desc mb-0">
                    {t(`hero.stats.${s.key}`)}
                  </p>

                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}