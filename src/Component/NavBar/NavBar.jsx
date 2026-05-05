import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white fixed-top">
        <div className="container-fluid">

          <div className="pe-2 ms-5">
           <i className="fa-solid fa-circle-user text-success "></i>
          </div>

    <Link className="navbar-brand display-5 fw-bold text-decoration-none" to="/">
      <span className="text-dark">CORE </span>
      <span className="text-success">SOLUTIONS</span>
  </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse mx-auto" id="navbarNav">
            <ul className="navbar-nav mx-auto">

            <li className="nav-item">
                <Link className="nav-link active text-dark success-hover" to="/challenge">
                  {t('challenge.badge')}
                </Link>
              </li>
             <li className="nav-item">
                <Link className="nav-link text-muted success-hover" to="/WhoWeAre">
                  {t('about.label')}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-muted success-hover" to="/WhyEgypt">
                  {t('WhyEgypt')}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-muted success-hover" to="/OurServices">
                  {t('Services')}
                </Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link text-muted success-hover" to="/Industries">
                  {t('Industries')}
                </Link>
              </li>
                             <li className="nav-item">
                <Link className="nav-link text-muted success-hover" to="/Numbers">
                  {t('numbers.label')}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-muted success-hover" to="/Pilot">
                  {t('DaysPilot')}
                </Link>
              </li>

       <li className="nav-item">
                <Link className="nav-link text-muted success-hover" to="/Contact">
                  {t('Contact')}
                </Link>
              </li>
          
            </ul>
          </div>

          <div className="d-flex ms-auto align-items-center">

            <span
              onClick={toggleLanguage}
              className="nav-link text-muted success-hover fw-bold fs-5"
              style={{ cursor: 'pointer' }}
            >
              {i18n.language === 'ar' ? 'EN' : 'AR'}
            </span>

     
              <Link className="nav-link" to="/GetInTouch">
                <button type="button" className="btn-hero-primary">
                  {t('GetAfreeConsultation')}
                </button>
              </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
