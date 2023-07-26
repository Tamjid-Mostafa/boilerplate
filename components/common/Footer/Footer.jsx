import { FC } from "react";
import cn from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import getSlug from "@lib/get-slug";
import { Github, Vercel } from "@components/icons";
import { Logo, Container } from "@components/ui";
import { I18nWidget } from "@components/common";
import ThemeSwitcher from "@components/ui/ThemeSwitcher";
import s from "./Footer.module.css";


const links = [
  {
    name: "Home",
    url: "/",
  },
];

const Footer = ({ className }) => {
  const rootClassName = cn(s.root, className);

  return (
    <footer className={rootClassName}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-accent-2 py-12 text-primary bg-primary transition-colors duration-150">
          <div className="col-span-1 lg:col-span-2">
            <Link
              href="/"
              className="flex flex-initial items-center font-bold md:mr-24"
            >
              <span className="rounded-full  mr-2">
                <Logo />
              </span>
            </Link>
          </div>
          <div className="col-span-1 lg:col-span-7">
            <div className="grid md:grid-rows-4 md:grid-cols-3 md:grid-flow-col">
              {[...links].map((page) => (
                <span key={page.url} className="py-3 md:py-0 md:pb-4">
                  <Link
                    href={page.url}
                    className="text-accent-9 hover:text-accent-6 transition ease-in-out duration-150"
                  >
                    {page.name}
                  </Link>
                </span>
              ))}
            </div>
          </div>
          <div className="col-span-1 lg:col-span-3 flex items-start lg:justify-end text-primary">
            <div className="flex space-x-4 items-center h-10">
              <ThemeSwitcher />
              <I18nWidget />
              <a
                className={s.link}
                aria-label="Github Repository"
                href="https://github.com/tamjid-mostafa"
                target={"_blank"}
              >
                <Github />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-6 pb-10 flex flex-col md:flex-row justify-between items-center space-y-4 text-accent-6 text-sm">
          <div>
            <span>&copy; 2023 Dev. Tamjid All rights reserved.</span>
          </div>
          {/* <div className="flex items-center text-primary text-sm">
            <span className="text-primary">Created by</span>
            <a
              rel="noopener noreferrer"
              href="https://vercel.com"
              aria-label="Vercel.com Link"
              target="_blank"
              className="text-primary"
            >
              <Vercel
                className="inline-block h-6 ml-3 text-primary"
                alt="Vercel.com Logo"
              />
            </a>
          </div> */}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
