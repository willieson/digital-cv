import { motion } from "framer-motion";

export default function Education() {
  const educationData = [
    {
      degree: "Bachelor Degree - Information Technology",
      institution: "Buddhi Dharma University",
      year: "2017 - 2021",
      description:
        "Focusing on software development, design and implementation of information systems, creation of innovative and efficient web applications, and troubleshooting hardware and network issues to support a reliable technology infrastructure.",
    },
    {
      degree: "Vocational High School - Multimedia",
      institution: "Bonavita",
      year: "2014 - 2017",
      description:
        "Focuses on developing skills in graphic design, animation, video editing, software development, web application creation, and the production of creative and innovative digital content.",
    },
  ];

  return (
    <section
      id="education"
      className="py-20 px-6 bg-white text-gray-800 scroll-mt-16"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-800 mb-12 text-center">
          Education
        </h2>

        <ol className="relative border-l border-blue-700">
          {educationData.map((edu, index) => (
            <motion.li
              key={index}
              className="mb-10 ml-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.5 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <span className="absolute w-4 h-4 bg-blue-700 rounded-full -left-2.5 border border-white" />
              <h3 className="text-xl font-semibold text-blue-800">
                {edu.degree}
              </h3>
              <p className="text-sm text-gray-600 mb-1">{edu.institution}</p>
              <p className="text-sm text-gray-500 italic mb-2">{edu.year}</p>
              <p className="text-base text-gray-700">{edu.description}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
