import Image from "next/image";
import github from "../../../public/assets/github.png";
import linkedin from "../../../public/assets/linkedin.png";
import { useState } from "react";

const initStyle = "bg-mypink-300";

const Footer = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [msg, setMessage] = useState("");
  const [style, setStyle] = useState(initStyle);

  const clear = () => {
    setName("");
    setMail("");
    setMessage("");
  };

  const aux = async (e: any) => {
    e.preventDefault();
    console.log(name, mail, msg);
    try {
      const subj = "Message from " + name + " mail: " + mail;
      const data = await fetch("/api/api_four", {
        method: "POST",
        body: JSON.stringify({
          subject: subj,
          toEmail: mail,
          otpText: msg,
        }),
      });
      //const res = await data.json()
      setStyle("text-mywhite bg-green");
      setTimeout(() => {
        setStyle(initStyle);
      }, 2000);
      clear();
    } catch (error) {
      console.log("err", error);
      setStyle("text-mywhite bg-red");
      setTimeout(() => {
        setStyle(initStyle);
      }, 2000);
    }
  };

  const updateName = (value: string) => {
    setName(value);
  };

  const updateMail = (value: string) => {
    setMail(value);
  };

  const updateMessage = (value: string) => {
    setMessage(value);
  };

  return (
    <footer
      id="footer"
      className="text-gray font-medium w-full h-screen text-center mt-8 flex flex-col place-items-center justify-center space-y-8 md:p-14"
    >
      {/* <p>Made by <b>me</b></p> */}
      <h3 className="text-6xl font-bold drop-shadow"> Let&lsquo;s talk</h3>
      <div className="bg-mywhite w-full lg:w-96 h-fit border-4 rounded-xl shadow border-myyyellow-300 p-4">
        <form
          className="m-auto h-full flex flex-col place-items-start justify-center space-y-3 text-sm"
          onSubmit={aux}
        >
          <p className="font-bold"> Please tell me your name</p>
          <input
            value={name}
            className="border rounded w-full h-12 p-2"
            onChange={(e) => updateName(e.target.value)}
          ></input>
          <p className="font-bold"> Your email address </p>
          <input
            value={mail}
            className="border rounded w-full h-12 p-2"
            onChange={(e) => updateMail(e.target.value)}
          ></input>
          <p className="font-bold"> How can I help you? </p>
          <textarea
            value={msg}
            className="border rounded w-full h-44 p-2"
            onChange={(e) => updateMessage(e.target.value)}
          ></textarea>
          <button
            type="submit"
            onClick={(e) => aux(e)}
            className={`m-auto w-20 h-12 ${style} rounded shadow`}
          >
            {" "}
            Send
          </button>
        </form>
      </div>
      <div className="w-fit px-3 flex flex-col space-x-4">
        <h4 className="text-lg"> Or contact me on </h4>
        <div className="flex justify-center place-items-center">
          <a href="https://github.com/maggioniduffy" target={"_blank"}>
            <Image src={github} alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/maggioniduffy/"
            target={"_blank"}
          >
            <Image src={linkedin} alt="linkedin" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
