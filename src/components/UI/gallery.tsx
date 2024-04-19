import React from "react";
import Image from "next/image";
import fs from 'fs';
import path from 'path';

interface GalleryProps {
  title: string;
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ title, images }) => {
  return (
    <div className="p-8 bg-A6708D text-white text-center">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg h-48"> {/* Establecer altura fija */}
            <div className="hover:scale-105 transition-transform duration-300">
              <Image src={`/gallery/${image}`} alt={`Image ${index}`} layout="responsive" width={300} height={300} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const galleryDir = path.join(process.cwd(), 'public', 'gallery');
const imageNames = fs.readdirSync(galleryDir)
  .filter(fileName => fileName.endsWith('.png') || fileName.endsWith('.jpg') || fileName.endsWith('.webp'))
  .sort((a, b) => parseInt(a.split('.')[0]) - parseInt(b.split('.')[0]));

const GalleryPage: React.FC = () => {
  return <Gallery title="Gallery" images={imageNames} />;
};

export default GalleryPage;
