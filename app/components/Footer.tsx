import { FOOTER_CONTACT, FOOTER_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex mb-12 w-full mx-auto max-w-[1440px] px-20 py-10">
      <div className="flex flex-col items-start justify-center gap-10 md:flex-row md:justify-between ">
        <Image src="/logo.png" width="75" height="75" alt="logo" />
        <div className="flex flex-wrap gap-10 sm:justify-between sm:flex-1 md:space-x-10">
          {FOOTER_LINKS.map((footer) => (
            <FooterColumn title={footer.title} links={footer.links} />
          ))}

          <FooterColumn
            title={FOOTER_CONTACT.title}
            links={formatContactLinks(FOOTER_CONTACT.links)}
          />
        </div>
      </div>
    </div>
  );
};

type ContactInfo = {
  label: string;
  value: string;
};

const formatContactLinks = (links: ContactInfo[]) => {
  return links.map(({ label, value }) => `${label}: ${value}`);
};

type FooterColumnProps = {
  title: string;
  links: (string | JSX.Element)[];
};

const FooterColumn = ({ title, links }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-lg lg:text-xl">{title}</h2>
      <ul className="text-gray-600 lg:text-lg flex flex-col">
        {links.map((link, index) => (
          <Link href="/" key={index} className="hover:text-green-700">
            {link}
          </Link>
        ))}
      </ul>
    </div>
  );
};
export default Footer;
