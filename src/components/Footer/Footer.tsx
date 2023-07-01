import Image from "next/image";
import github from "../../../public/assets/github.png";
import linkedin from "../../../public/assets/linkedin.png";

const Footer = () => {
  return (
    <footer className="text-gray font-medium w-full text-center mt-5 flex flex-col place-items-center justify-center space-x-3">
      <p>Made by Maggioni Duffy </p>
      <div className="w-fit px-3 flex">
        {" "}
        <a href="https://github.com/maggioniduffy" target={"_blank"}>
          <Image src={github} alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/maggioniduffy/" target={"_blank"}>
          <Image src={linkedin} alt="linkedin" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
