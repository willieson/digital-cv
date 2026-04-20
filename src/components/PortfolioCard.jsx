import { useState } from "react";

const PortfolioCard = ({ title, image, description, link }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-white border border-blue-100 rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
        {image && (
          <div
            className="overflow-hidden cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
        )}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-blue-700">{title}</h3>
          <p className="text-sm text-gray-600 mb-3">{description}</p>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-1 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700"
            >
              See Project
            </a>
          )}
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded-lg p-4 max-w-3xl w-full mx-4 relative"
            onClick={(e) => e.stopPropagation()} // mencegah modal tertutup saat klik gambar
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
            >
              &times;
            </button>
            <img src={image} alt={title} className="w-full h-auto rounded-md" />
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioCard;
