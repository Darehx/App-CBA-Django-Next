"use client";

import React from "react";
import Link from "next/link";

const BannerLink: React.FC = () => {
  const text = "Verificar Certificado";
  const href = "/verificar";

  return (
    <div className="banner">
      <Link href={href}>{text}</Link>
      <style jsx>{`
        .banner {
          background-color: #ff69b4; /* Color rosa */
          color: #fff; /* Color del texto */
          padding: 10px 20px;
          border-radius: 5px;
          margin-bottom: 20px;
          text-align: center; /* Centrar texto */
          transition: background-color 0.3s ease; /* Transición de color */
        }
        .banner:hover {
          background-color: #e65091; /* Color rosa más claro al hacer hover */
        }
        .banner a {
          text-decoration: none;
          color: #fff;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default BannerLink;
