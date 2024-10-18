'use client';

import Modal from '@/app/_components/Modal';
import Image from 'next/image';

function ImageModal({ src, isOpen, onClose }) {
  if (!src) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-80 h-80">
        <Image alt="Image" className="object-contain" fill src={src} />
      </div>
    </Modal>
  );
}

export default ImageModal;
