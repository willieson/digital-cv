import StaggerContainer from "../components/StaggerContainer";
import StaggerItem from "../components/StaggerItem";

export default function Skills() {
  const skills = {
    Frontend: ["HTML", "CSS", "Javascript"],
    Backend: ["PHP", "Node.js", "MySQL"],
    Framework: [
      "Codeigniter",
      "Laravel",
      "React.js",
      "Next.js",
      "Tailwind-CSS",
      "Boostrap-CSS",
    ],
  };

  const soft = [
    "RESTful API",
    "IT Hardware & Software Support",
    "Network Troubleshooting",
    "Design Tools (Photoshop, Canva)",
    "SEO & Digital Presence",
    "Marketplace Management",
    "OSS RBA & LKPM Administration",
  ];

  return (
    <section
      id="skills"
      className="py-20 px-6 bg-blue-50 text-gray-900 scroll-mt-16"
    >
      <h1 className="text-3xl font-bold text-blue-800 mb-12 text-center">
        Skills
      </h1>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-12">
          Web Development
        </h2>

        <div className="space-y-10">
          {Object.entries(skills).map(([category, items], index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                {category}
              </h3>
              <StaggerContainer>
                <div className="flex flex-wrap justify-center gap-3">
                  {items.map((skill, idx) => (
                    <StaggerItem key={idx}>
                      <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium shadow-sm hover:bg-blue-200 transition">
                        {skill}
                      </span>
                    </StaggerItem>
                  ))}
                </div>
              </StaggerContainer>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center mt-12">
        <h2 className="text-3xl font-bold text-blue-800 mb-12">Soft Skill</h2>

        <div className="space-y-10">
          <StaggerContainer>
            <div className="flex flex-wrap justify-center gap-3">
              {soft.map((softs, idx) => (
                <StaggerItem key={idx}>
                  <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium shadow-sm hover:bg-blue-200 transition">
                    {softs}
                  </span>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
