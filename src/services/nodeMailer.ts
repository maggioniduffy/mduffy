import nodemailer from "nodemailer"
// import sgMail from "@sendgrid/mail"

export async function sendMail(subject:string, toEmail:string, otpText:string) {
  var transporter = nodemailer.createTransport({
    //port: 25,
    host: "smtp.sendgrid.net",
    auth: {
      user: "apikey",
      pass: process.env.API_KEY,
    },
    secure: true,
    // tls: {
    //   rejectUnauthorized: false
    // }
  });

  console.log(subject,otpText)
  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
            reject(error);
        } else {
            console.log("Server is ready to take our messages");
            resolve(success);
        }
    });
  });


  var mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: process.env.NODEMAILER_EMAIL,
    subject: subject,
    text: otpText,
  };
  
  await new Promise((resolve,reject) => {
    transporter.sendMail(mailOptions, function (error:any, info:any) {
      if (error) {
        console.log('err in transporter ', error)
        throw new Error(error);
      } else {
        console.log("Email Sent", mailOptions);
        return true;
      }
    });
  })
  
}
