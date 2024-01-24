import { GithubIcon, Github } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex justify-evenly py-5  flex-wrap font-0 text-white bg-green-900">
      <div>logo</div>
      <div>All rights reserved&#169;</div>
      <div className="flex gap-1">
        <a
          href="https://github.com/AtmaniChouaib22"
          target="_blank"
          rel="noreferrer"
        >AtmaniChouaib22</a>
        <Github />
      </div>
    </div>
  );
};

export default Footer;
