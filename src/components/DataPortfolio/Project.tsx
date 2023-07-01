import React from "react";
import Iframe from "react-iframe";

export interface Props {
  name: string;
  file: string;
  link: string;
}

const Project = ({ name, link, file }: Props) => {
  return (
    <div className="bg-mygray border border-1 p-2 rounded bg-opacity-50 overflox-auto">
      <Iframe url={file} title={name} height="500px" width="100%"></Iframe>
      <a className="text-[#2081C3] w-full" href={link} target={"_blank"}>
        {" "}
        Try it on Kaggle{" "}
      </a>
    </div>
  );
};

export default Project;
