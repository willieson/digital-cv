import { link } from "framer-motion/client";
import PortfolioCard from "./PortfolioCard";
import rhkImage from "../assets/rhk.png";
import ardtImage from "../assets/ardt.png";
import mpolisImage from "../assets/mpolis.png";
import casabellaImage from "../assets/casabella.png";
import metropolisImage from "../assets/Queue metropolis.png";
import metrowebImage from "../assets/metroweb.png";
import mitrajayarayaImage from "../assets/mitrajayaraya.png";
import dayasaktiImage from "../assets/dayasakti.png";

const PortfolioSection = () => {
  const portfolios = [
    {
      title: "Rolling Hills Landing Page",
      image: rhkImage,
      description:
        "This website is used for promotion and information delivery, helping to achieve sales targets for Rollinghills properties in Karawang.",
    },
    {
      title: "Aryaduta Suites Landing Page",
      image: ardtImage,
      description:
        "This website is used for promotion and information delivery, helping to achieve sales targets for Aryaduta Auites Apartment in Semanggi.",
      link: "https://aryadutasuites.id/Lock/",
    },
    {
      title: "Metropolisland Landing Page",
      image: mpolisImage,
      description:
        "This website serves to promote and provide information about projects and collaborations by PT Metropolis Propertindo Utama.",
      link: "https://metropolisland.id/",
    },
    {
      title: "La Casa Bella Landing Page",
      image: casabellaImage,
      description:
        "This website is used for promotion and information delivery, helping to achieve sales targets for La Casa Bella in Carita Beach.",
      link: "https://lacasabella.id/temp/",
    },
    {
      title: "Queue Application",
      image: metropolisImage,
      description:
        "An internal web application for managing a queue system, covering re-registration to property unit selection.",
      link: "http://139.255.37.130:1212/login/login.php?menu=login",
    },
    {
      title: "Metroweb Application",
      image: metrowebImage,
      description:
        "An internal web-based information system functioning as a simplified ERP, managing HR modules (employee leave and attendance), company data such as share values, company assets, property taxes, permits, as well as Legal, Corsec, Corfin, company profile, and corporate database as a centralized information hub for employees and management.",
      link: "http://139.255.37.130:8080",
    },
    {
      title: "Mitra Jaya Raya Landing Page",
      image: mitrajayarayaImage,
      description:
        "This website is used for promotion and information delivery, helping to achieve sales targets for PT Mitra Jaya Raya.",
      link: "http://mitrajayaraya.com",
    },
    {
      title: "Dayasakti Mitra Mandiri Landing Page",
      image: dayasaktiImage,
      description:
        "This website is used for promotion and information delivery, helping to achieve sales targets for PT Dayasakti Mitra Mandiri.",
      link: "http://dayasakti.net",
    },
  ];

  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Portfolio</h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {portfolios.map((project, index) => (
            <PortfolioCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
