import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import sendEmail from "../../email";

export default function GetInTouch() {
  const { t } = useTranslation();

  const [successMsg, setSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const ContactSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, t("getInTouch.validation.tooShort"))
      .required(t("getInTouch.validation.firstNameRequired")),

    lastName: Yup.string()
      .min(2, t("getInTouch.validation.tooShort"))
      .required(t("getInTouch.validation.lastNameRequired")),

    company: Yup.string()
      .min(2, t("getInTouch.validation.companyRequired"))
      .required(t("getInTouch.validation.companyRequired")),

    phone: Yup.string()
      .min(8, t("getInTouch.validation.phoneRequired"))
      .required(t("getInTouch.validation.phoneRequired")),

    industry: Yup.string()
      .required(t("getInTouch.validation.selectIndustry")),

    message: Yup.string()
      .min(10, t("getInTouch.validation.messageMin"))
  });

  const contactInfo = [
    { icon: "👤", title: t("getInTouch.contact.name"), sub: t("getInTouch.contact.role") },
    { icon: "📧", title: t("getInTouch.contact.email"), sub: t("getInTouch.contact.emailSub") },
    { icon: "📍", title: t("getInTouch.contact.location"), sub: t("getInTouch.contact.locationSub") },
    { icon: "🕐", title: t("getInTouch.contact.time"), sub: t("getInTouch.contact.timeSub") },
  ];

const INDUSTRIES = (t) => [
    "other",
  "travel",
  "fintech",
  "telecom",
  "healthcare",
];

  return (
    <div className="git-wrapper">
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        <p className="git-label">{t("getInTouch.label")}</p>

        <h1 className="git-heading">
          {t("getInTouch.title1")}{" "}
          <span style={{ color: "#2a9d74" }}>
            {t("getInTouch.titleHighlight")}
          </span>
        </h1>

        <div className="main-grid">

          {/* LEFT */}
          <div>
            <p className="git-sub">{t("getInTouch.subtitle")}</p>
            <p className="git-body">{t("getInTouch.body")}</p>

            {contactInfo.map((item, i) => (
              <div key={i} className="info-row">
                <div className="info-icon-wrap">{item.icon}</div>
                <div className="info-text">
                  <strong>{item.title}</strong>
                  <span>{item.sub}</span>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="form-card">

            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                company: "",
                phone: "",
                industry: "Other",
                message: "",
              }}
              validationSchema={ContactSchema}
              onSubmit={async (values, { resetForm }) => {
                try {
                  setErrorMsg("");
                  setSuccessMsg(false);

                  await sendEmail({
                    subject: `Contact from ${values.firstName} ${values.lastName}`,
                    html: `
                      <div>
                        <h3>New Contact Message</h3>
                        <p><b>Name:</b> ${values.firstName} ${values.lastName}</p>
                        <p><b>Company:</b> ${values.company}</p>
                        <p><b>Phone:</b> ${values.phone}</p>
                        <p><b>Industry:</b> ${values.industry}</p>
                        <p><b>Message:</b> ${values.message}</p>
                      </div>
                    `,
                    ...values,
                  });

                  setSuccessMsg(true);
                  resetForm();

                  setTimeout(() => setSuccessMsg(false), 3000);
                } catch (err) {
                  console.error(err);
                  setErrorMsg(t("getInTouch.error") || "Something went wrong");
                }
              }}
            >
              {({ isSubmitting }) => (
                <Form>

                  {/* FIRST NAME */}
                  <div>
                    <label>{t("getInTouch.form.firstName")}</label>
                    <Field name="firstName" className="form-control-custom" />
                    <ErrorMessage name="firstName" component="p" className="invalid-msg" />
                  </div>

                  {/* LAST NAME */}
                  <div>
                    <label>{t("getInTouch.form.lastName")}</label>
                    <Field name="lastName" className="form-control-custom" />
                    <ErrorMessage name="lastName" component="p" className="invalid-msg" />
                  </div>

                  {/* COMPANY */}
                  <div>
                    <label>{t("getInTouch.form.company")}</label>
                    <Field name="company" className="form-control-custom" />
                    <ErrorMessage name="company" component="p" className="invalid-msg" />
                  </div>

                  {/* PHONE */}
                  <div>
                    <label>{t("getInTouch.form.phone")}</label>
                    <Field name="phone" className="form-control-custom" />
                    <ErrorMessage name="phone" component="p" className="invalid-msg" />
                  </div>

                  {/* INDUSTRY */}
                  <div>
                    <label>{t("getInTouch.form.industry")}</label>
                    <Field as="select" name="industry" className="form-control-custom">
                     {INDUSTRIES().map((key) => (
  <option key={key} value={key}>
    {t(`getInTouch.industries.${key}`)}
  </option>
))}
                    </Field>
                    <ErrorMessage name="industry" component="p" className="invalid-msg" />
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label>{t("getInTouch.form.message")}</label>
                    <Field as="textarea" name="message" className="form-control-custom" />
                    <ErrorMessage name="message" component="p" className="invalid-msg" />
                  </div>

                  {/* BUTTON */}
                  <button type="submit" className="btn-submit" disabled={isSubmitting}>
                    {isSubmitting
                      ? "Sending..."
                      : t("getInTouch.form.submit")}
                  </button>

                  {/* SUCCESS */}
                  {successMsg && (
                    <div className="success-alert">
                      <span>✅</span>
                      <span>{t("getInTouch.success")}</span>
                    </div>
                  )}

                  {/* ERROR */}
                  {errorMsg && (
                    <div className="error-alert">
                      <span>❌</span>
                      <span>{errorMsg}</span>
                    </div>
                  )}

                </Form>
              )}
            </Formik>

          </div>
        </div>
      </div>
    </div>
  );
}