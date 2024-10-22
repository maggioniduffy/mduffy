import Link from "next/link";
import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";

export interface Props {
  name: string;
  description?: string;
  link: string;
  image: StaticImageData;
}

const Project = ({ image, link, description }: Props) => {
  return (
    <div className="project bg-opacity-50 overflox-auto flex justify-center align-center place-items-center">
      {description && <p> {description} </p>}
      <Link
        className="text-pink w-full rounded bg-mygray bg-opacity-50 place-items-center rounded-xl"
        href={link}
        target={"_blank"}
      >
        {image && <Image src={image} alt="Try it" className="rounded" />}
        <b className="text-center m-auto p-auto"> Try it! </b>
      </Link>
    </div>
  );
};

export default Project;
