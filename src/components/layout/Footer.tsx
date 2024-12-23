import { config } from "../../lib/project.config";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t py-5 border-border/80">
      <div className="container flex justify-between items-center">
        <p className="text-sm">
          Copyright for <b>{config.name}</b> &copy; {new Date().getFullYear()}
        </p>

        <ul className="flex justify-start items-center gap-2">
          <li>
            <Link
              className="bg-gray-800 inline-block p-1 rounded dark:bg-white dark:text-gray-800 text-white"
              href="https://linedin.com/in/abdellah-damri"
            >
              <Linkedin size={18} />
            </Link>
          </li>
          <li>
            <Link
              className="bg-gray-800 inline-block p-1 rounded dark:bg-white dark:text-gray-800 text-white"
              href="https://github.com/EDAMGHY"
            >
              <Github size={18} />
            </Link>
          </li>
          <li>
            <Link
              className="bg-gray-800 inline-block p-1 rounded dark:bg-white dark:text-gray-800 text-white"
              href="https://x.com/abdellah-damri"
            >
              <Twitter size={18} />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
