import React from "react";
import Link from "next/link";
import Image from "next/image";

const YoutubeChannel: React.FC = () => {
  return (
    <div className="bg-rose-800 text-white p-8 text-center">
      <h2 className="text-xl font-bold mb-4">Próximamente en nuestro canal de YouTube</h2>
      <div className="flex justify-center">
        <Link href="https://www.youtube.com/">
    
            <div className="w-auto p-10 h-auto">
              <Image className="p-10" src="/image/youtube.webp" alt="YouTube" width={300} height={200} layout="responsive" />
            </div>
     
        </Link>
      </div>
    </div>
  );
};

export default YoutubeChannel;
