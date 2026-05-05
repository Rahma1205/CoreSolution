import emailjs from "@emailjs/browser";

export default function sendEmail(values) {
  return emailjs.send(
    // process.env.REACT_APP_SERVICE_NAME ,
    "service_ho0ede4",
    // process.env.REACT_APP_TEMPLATE_ID,
    "template_uwzfdi8",
    {
      to_email:"morsy.ahmedd2@gmail.com",
      first_name: values.firstName,
      last_name: values.lastName,
      company: values.company,
      industry: values.industry,
      message: values.message,
    },
    // process.env.REACT_APP_PUBLIC_KEY
    "bzCT_YcEsPABijuvh"
  );
}