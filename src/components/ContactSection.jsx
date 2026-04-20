const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-blue-50">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-8">
          I'm open to freelance, full-time positions, or collaborative projects.
          Feel free to reach out through any platform below.
        </p>

        <div className="flex justify-center gap-6 flex-wrap mb-8">
          <a
            href="mailto:michaelwillieson@gmail.com"
            className="text-blue-700 font-medium hover:underline"
          >
            📧 michaelwillieson@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/michael-willieson"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 font-medium hover:underline"
          >
            💼 LinkedIn
          </a>
          <a
            href="https://github.com/willieson"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 font-medium hover:underline"
          >
            🧑‍💻 GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
