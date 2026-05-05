import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import sendEmail from '../../email';

const ContactSchema = (t) =>
  Yup.object().shape({
    firstName: Yup.string()
      .min(2, t('GetInTouch.validation.tooShort'))
      .max(50, t('GetInTouch.validation.tooLong'))
      .required(t('GetInTouch.validation.firstNameRequired')),

    lastName: Yup.string()
      .min(2, t('GetInTouch.validation.tooShort'))
      .max(50, t('GetInTouch.validation.tooLong'))
      .required(t('GetInTouch.validation.lastNameRequired')),

    company: Yup.string()
      .min(2, t('GetInTouch.validation.tooShort'))
      .required(t('GetInTouch.validation.companyRequired')),

    industry: Yup.string()
      .notOneOf([''], t('GetInTouch.validation.selectIndustry'))
      .required(t('GetInTouch.validation.industryRequired')),

    message: Yup.string()
      .min(10, t('GetInTouch.validation.messageMin'))
      
  });

const initialValues = {
  firstName: '',
  lastName: '',
  company: '',
  industry: '',
  message: '',
};

const INDUSTRIES = (t) => [
  t('GetInTouch.industries.travel'),
  t('GetInTouch.industries.fintech'),
  t('GetInTouch.industries.telecom'),
  t('GetInTouch.industries.other'),
];

const INFO_ITEMS = (t) => [
  {
    icon: '👤',
    label: t('GetInTouch.info.name'),
    sub: t('GetInTouch.info.role'),
  },
  {
    icon: '✉️',
    label: t('GetInTouch.info.email'),
    sub: t('GetInTouch.info.emailSub'),
  },
  {
    icon: '📍',
    label: t('GetInTouch.info.location'),
    sub: t('GetInTouch.info.locationSub'),
  },
  {
    icon: '🕐',
    label: t('GetInTouch.info.response'),
    sub: t('GetInTouch.info.responseSub'),
  },
];

export default function GetInTouch() {
  const { t } = useTranslation();

  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState('');

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setServerError('');

    try {
      const subject = `[Pilot Request] ${values.firstName} ${values.lastName} — ${values.company}`;

      const htmlBody = `
        <div style="font-family: Arial; max-width:600px; margin:auto;">
          <h2>${t('GetInTouch.email.title')}</h2>

          <p><b>${t('GetInTouch.form.firstName')}:</b> ${values.firstName} ${values.lastName}</p>
          <p><b>${t('GetInTouch.form.company')}:</b> ${values.company}</p>
          <p><b>${t('GetInTouch.form.industry')}:</b> ${values.industry}</p>

          <hr />

          <p><b>${t('GetInTouch.form.message')}:</b></p>
          <p>${values.message.replace(/\n/g, '<br/>')}</p>
        </div>
      `;

      await sendEmail({
        subject,
        html: htmlBody,
        ...values,
      });

      resetForm();
      setSubmitted(true);
    } catch (err) {
  setServerError(
    err?.text || t('GetInTouch.error')
  );
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="section-title">{t('GetInTouch.title')}</h2>

        <div className="row align-items-start g-5">
          <div className="col-lg-5 left-col">
            <p className="tagline">{t('GetInTouch.tagline')}</p>
            <p className="description">{t('GetInTouch.description')}</p>

            <div className="info-list">
              {INFO_ITEMS(t).map((item, i) => (
                <div className="info-item" key={i}>
                  <div className="info-icon">{item.icon}</div>
                  <div className="info-text">
                    <strong>{item.label}</strong>
                    <span>{item.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-7">
            <div className="form-card">
              <Formik
                initialValues={initialValues}
                validationSchema={ContactSchema(t)}
                onSubmit={handleSubmit}
              >
                {({ errors, touched, isSubmitting }) => (
                  <Form noValidate>

                    {/* NAME */}
                    <div className="row g-3 mb-3">
                      <div className="col-6">
                        <label className="form-label-custom">
                          {t('GetInTouch.form.firstName')}
                        </label>
                        <Field
                          name="firstName"
                          className={`form-control-custom ${
                            errors.firstName && touched.firstName ? 'is-invalid' : ''
                          }`}
                        />
                        <ErrorMessage name="firstName" component="p" className="invalid-msg" />
                      </div>

                      <div className="col-6">
                        <label className="form-label-custom">
                          {t('GetInTouch.form.lastName')}
                        </label>
                        <Field
                          name="lastName"
                          className={`form-control-custom ${
                            errors.lastName && touched.lastName ? 'is-invalid' : ''
                          }`}
                        />
                        <ErrorMessage name="lastName" component="p" className="invalid-msg" />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label-custom">
                        {t('GetInTouch.form.company')}
                      </label>
                      <Field
                        name="company"
                        className={`form-control-custom ${
                          errors.company && touched.company ? 'is-invalid' : ''
                        }`}
                      />
                      <ErrorMessage name="company" component="p" className="invalid-msg" />
                    </div>

                    <div className="mb-3">
                      <label className="form-label-custom">
                        {t('GetInTouch.form.industry')}
                      </label>

                      <Field
                        as="select"
                        name="industry"
                        className={`form-control-custom ${
                          errors.industry && touched.industry ? 'is-invalid' : ''
                        }`}
                      >
                        <option value="">
                          {t('GetInTouch.form.selectIndustry')}
                        </option>

                        {INDUSTRIES(t).map((ind) => (
                          <option key={ind} value={ind}>
                            {ind}
                          </option>
                        ))}
                      </Field>

                      <ErrorMessage name="industry" component="p" className="invalid-msg" />
                    </div>

                    <div className="mb-4">
                      <label className="form-label-custom">
                        {t('GetInTouch.form.message')}
                      </label>

                      <Field
                        as="textarea"
                        name="message"
                        className={`form-control-custom ${
                          errors.message && touched.message ? 'is-invalid' : ''
                        }`}
                      />

                      <ErrorMessage name="message" component="p" className="invalid-msg" />
                    </div>

                    {serverError && (
                      <p className="invalid-msg mb-3">{serverError}</p>
                    )}

                    <button type="submit" className="btn-submit" disabled={isSubmitting}>
                      {isSubmitting
                        ? t('GetInTouch.form.sending')
                        : t('GetInTouch.form.submit')}
                    </button>

                    {submitted && (
                      <div className="success-alert">
                        <span>✅</span>
                        <span>{t('GetInTouch.success')}</span>
                      </div>
                    )}

                  </Form>
                )}
              </Formik>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}