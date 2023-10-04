import Image from "next/image";
import github from "../../../public/assets/github.png";
import linkedin from "../../../public/assets/linkedin.png";

const Footer = () => {

  const aux = async () => {
    try {
      const data = await fetch('/api/api_four')
      const res = await data.json()
      console.log(res)
    } catch (error) {

    }
  }
  return (
    <footer id="footer" className="text-gray font-medium w-full h-screen text-center mt-5 flex flex-col place-items-center justify-center space-y-8 p-14 space-x-3">
      {/* <p>Made by <b>me</b></p> */}
      <h3 className="text-6xl font-bold drop-shadow"> Let's talk</h3>
      <div className="bg-mywhite w-96 h-fit border-4 rounded-xl shadow border-myyyellow-300 p-4">
        <form className="m-auto h-full flex flex-col place-items-start justify-center space-y-3 text-sm" onSubmit={aux}>
          <p> Please tell me your name</p>
          <input className="border rounded w-full h-12"></input>
          <p> Your email address </p>
          <input className="border rounded w-full h-12"></input>
          <p> How can I help you? </p>
          <textarea className="border rounded w-full h-44"></textarea>
          <button type="submit" onClick={aux}> click me</button>
        </form>
      </div>
      <div className="w-fit px-3 flex flex-col space-x-4">
        <h4 className="text-lg"> Or contact me on </h4>
        <div className="flex justify-center place-items-center"><a href="https://github.com/maggioniduffy" target={"_blank"}>
          <Image src={github} alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/maggioniduffy/" target={"_blank"}>
          <Image src={linkedin} alt="linkedin" />
        </a>
        </div> 
      </div>
    </footer>
  );
};

export default Footer;
