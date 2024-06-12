import React from "react";
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

interface Props {
  url: string;
}

function GitHubLink({ url }: Props) {
  return (
    <div className="flex gap-8">
      <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center text-white hover:text-themeColor">
        <FaGithub className="mr-2" />
        Code GitHub
      </a>
    </div>
  );
}
/*      <a href={url2} target="_blank" rel="noopener noreferrer" className="flex items-center text-white hover:text-themeColor">
        <CiGlobe className="mr-2" />
        Site Web
      </a>
 */

export default GitHubLink;
