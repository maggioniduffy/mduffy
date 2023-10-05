import { sendMail } from "../../services/nodeMailer";

const handler = async (req: any, res:any) => {
  console.log("REQ: ", req.body)
  try {
    const { method, body } = req;
    const newBody = JSON.parse(body);
    console.log("NEW BODY", newBody)
    switch (method) {
      case "POST": {
        //Do some thing
        await sendMail(
          newBody.subject,
          process.env.NODEMAILER_MAIL+"",
          newBody.otpText
        );
        res.status(200).send("Success");
        break;
      }
      case "GET": {
        //Do some thing
        res.status(200).send(req.auth_data);
        break;
      }
      default:
        res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  } catch (err:any) {
    console.log('err in api: ', err)
    res.status(400).json({
      error_code: "api_one",
      message: err.message,
    });
  }
};

export default handler;