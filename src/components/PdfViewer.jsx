import React, { useState } from 'react';
import page1 from "../assets/PDF/introPdf_page-0001.jpg";
import page2 from "../assets/PDF/introPdf_page-0002.jpg";
import page3 from "../assets/PDF/introPdf_page-0003.jpg";
import page4 from "../assets/PDF/introPdf_page-0004.jpg";
import page5 from "../assets/PDF/introPdf_page-0005.jpg";
import page6 from "../assets/PDF/introPdf_page-0006.jpg";
import page7 from "../assets/PDF/introPdf_page-0007.jpg";
import page8 from "../assets/PDF/introPdf_page-0008.jpg";

const PdfViewer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const images = [page1, page2, page3, page4, page5, page6, page7, page8];

  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className='flex justify-center flex-col items-center'>
      {/* Image that opens the modal */}
      <img
        src={page1}
        alt="Image"
        className="cursor-pointer max-w-80 h-auto"
        onClick={openModal}
      />

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-50 flex items-center justify-center overflow-auto">
          <div className="bg-white p-4 max-w-3xl max-h-full overflow-auto rounded shadow-lg">
            {/* Scrollable images */}
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Image ${index + 1}`} className="mb-4" />
            ))}
          </div>
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-gray-700"
          >
            Close
          </button>
        </div>
      )}
      <div className='text-center'><i><strong>The Sundarban Project.</strong><br/>(Click on the Image)</i></div>
    </div>
  );
};

export default PdfViewer;
