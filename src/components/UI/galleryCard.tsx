import React from "react";
import Image from "next/image";

interface CardProps {
  imageUrl: string;
  title: string;
}

const CardGallery: React.FC<CardProps> = ({ imageUrl, title }) => {
  return (
    <div className="card">
      <div className="image-container">
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="card-body">
        <h2>{title}</h2>
      </div>
      <style jsx>{`
        .card {
          width: 300px;
          height: 300px;
          border: 1px solid #ccc;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .image-container {
          position: relative;
          width: 100%;
          height: 60%; /* Ajusta el tamaño de la imagen según sea necesario */
        }
        .card-body {
          padding: 16px;
        }
        .card-body h2 {
          margin: 0;
          font-size: 18px;
          color: #333;
        }
      `}</style>
    </div>
  );
};

export default CardGallery;
