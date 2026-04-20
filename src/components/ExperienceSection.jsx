import ExperienceCard from "../components/ExperienceCard";
import StaggerItem from "./StaggerItem";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Web & IT Support Specialist",
      company: "PT Mitra Jaya Raya & PT Dayasakti Mitra Mandiri",
      period: "2024 - Now",
      description: [
        "Developing and maintaining the company website (landing page).",
        "Optimizing SEO and online visibility.",
        "Managing marketplaces: uploading products, promotions, and sales reports. ",
        "Handling OSS, LKPM reports, water permits, and other licensing documents. ",
        "Providing technical support for computers, printers, and networks. ",
        "Managing employee emails and phone numbers. ",
        "Designing banners and digital promotional materials.",
      ],
    },
    {
      title: "Fullstack Web Developer",
      company: "PT Metropolis Propertindo Utama",
      period: "2021 - 2024",
      description: [
        "Build and develop internal web-based applications.",
        "Manage customer databases and property unit selection systems.",
        "Create system-based dashboards and reports.",
        "Handle company documentation (legal, corsec, HR).",
        "Provide technical support for management information systems.",
      ],
    },
    {
      title: "Senior IT Support",
      company: "CV Sabar Maju Tangerang",
      period: "2017 - 2021",
      description: [
        "Installation and configuration of software, hardware, and networks.",
        "Management of online sales and attendance databases.",
        "Preparation of inventory and IT asset management reports.",
        "Coordination and supervision of IT staff.",
        "Development of internal applications using Visual Basic.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Experience</h2>
        <p className="text-gray-600 mb-10">Work & Project History</p>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {experiences.map((exp, index) => (
            <StaggerItem key={index} delay={index * 0.2}>
              <ExperienceCard key={index} {...exp} />
            </StaggerItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
