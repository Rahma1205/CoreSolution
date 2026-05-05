import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="cs-footer">
      <div className="container">
        {t("footer.company")} · {t("footer.tagline")} ·{" "}
        {t("footer.location")} ·{" "}

        <a
          href="https://www.coresolutions.com"
          target="_blank"
          rel="noreferrer"
          style={{ color: "rgba(255,255,255,.45)", textDecoration: "none" }}
        >
          {t("footer.website")}
        </a>{" "}
        · © {new Date().getFullYear()} {t("footer.rights")}
      </div>
    </footer>
  );
}