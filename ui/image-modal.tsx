'use client';

import React, { useState } from 'react';

type ImageModalProps = {
  src: string;
  alt?: string;
  className?: string;
};

const ImageModal: React.FC<ImageModalProps> = ({
  src,
  alt = 'Image',
  className,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={className}>
      <img
        src={src}
        className="mb-4 mt-4 h-auto max-w-lg rounded-lg cursor-pointer"
        onClick={toggleModal}
        alt={alt}
      />
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
              onClick={toggleModal}></div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true">
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <img
                      src={src}
                      className="rounded-lg max-w-full h-auto"
                      alt={alt}
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-custom-red text-base font-medium text-white hover:bg-custom-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-red sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={toggleModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageModal;
