import emailjs from "@emailjs/browser";

export default function sendEmail(values) {
  
    try {  return emailjs.send(
    process.env.service_name,
    process.env.temp_id,
    {
       to_email: process.nextTick.EMAIL_USER,
    first_name: values.firstName,
      last_name: values.lastName,
      company: values.company,
      industry: values.industry,
      message: values.message,
    },
    process.env.PUBLIC_URL
  );}
  catch (error) {
    console.log(error);
    
  }
}