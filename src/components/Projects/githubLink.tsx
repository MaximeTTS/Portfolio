import React from "react";
import { FaGithub, FaFigma } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

interface Props {
  url: string;
  url2: string;
  url3?: string;
}

function GitHubLink({ url, url2, url3 }: Props) {
  return (
    <div className="flex gap-8">
      <a href={url} target="_blank" rel="noopener noreferrer" className="link-hover-effect flex items-center text-colorGray">
        <FaGithub className="mr-2" />
        Code GitHub
      </a>
      <a href={url2} target="_blank" rel="noopener noreferrer" className="link-hover-effect flex items-center text-colorGray">
        <FaFigma className="mr-2" />
        Maquette Figma
      </a>
      {url3 && (
        <a href={url3} target="_blank" rel="noopener noreferrer" className="link-hover-effect flex items-center text-colorGray">
          <CiGlobe className="mr-2" />
          Site Web
        </a>
      )}
    </div>
  );
}

export default GitHubLink;
