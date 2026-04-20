import profileImage from "../assets/pp.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-20 px-6 text-gray-800 scroll-mt-16"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Foto Profil */}
        <div className="text-center md:text-left">
          <img
            src={profileImage}
            alt="Michael Willieson"
            className="mx-auto md:mx-0 w-48 h-48 object-cover rounded-full shadow-lg border-4 border-blue-700"
          />
        </div>

        {/* Deskripsi */}
        <div>
          <h2 className="text-3xl font-bold text-blue-800 mb-4">About Me</h2>
          <p className="text-lg mb-4 leading-relaxed">
            Hi, I'm <span className="font-semibold">Michael</span> — An IT
            professional with expertise in website development, digital systems,
            and technical support for IT infrastructure. Experienced in managing
            software, hardware, networks, system administration, and corporate
            licensing.
          </p>
          <p className="text-base text-gray-600">
            I enjoy combining technical skills with creativity to solve
            real-world problems. I’m currently focusing on React, Tailwind CSS,
            API and backend integration to build impactful web solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
