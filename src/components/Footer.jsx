const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6 mt-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Michael Willieson. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
