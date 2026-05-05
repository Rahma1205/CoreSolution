import emailjs from "@emailjs/browser";

export default function sendEmail(values) {
  return emailjs.send(
    process.env.REACT_APP_SERVICE_NAME,
    process.env.REACT_APP_TEMPLATE_ID,
    {
      to_email: process.env.REACT_APP_EMAIL_USER,
      first_name: values.firstName,
      last_name: values.lastName,
      company: values.company,
      industry: values.industry,
      message: values.message,
    },
    process.env.REACT_APP_PUBLIC_KEY
  );
}