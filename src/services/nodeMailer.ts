import nodemailer from "nodemailer"
// import sgMail from "@sendgrid/mail"

export async function sendMail(subject:string, toEmail:string, otpText:string) {
  var transporter = nodemailer.createTransport({
    port: 25,
    host: "smtp.sendgrid.net",
    auth: {
      user: "apikey",
      pass: process.env.API_KEY,
    },
    secure: false,
    tls: {
      rejectUnauthorized: false
    }
  });

  var mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: process.env.NODEMAILER_EMAIL,
    subject: subject,
    text: otpText,
  };

  transporter.sendMail(mailOptions, function (error:any, info:any) {
    if (error) {
      throw new Error(error);
    } else {
      console.log("Email Sent");
      return true;
    }
  });
}

// export async function send() {
// sgMail.setApiKey(process.env.API_KEY+"")
// const msg = {
//   to: process.env.NODEMAILER_EMAIL+"", // Change to your recipient
//   from: process.env.NODEMAILER_EMAIL+"", // Change to your verified sender
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// }
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error) => {
//     console.error(error)
//   })
// }