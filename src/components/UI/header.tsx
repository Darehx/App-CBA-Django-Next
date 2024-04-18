import { NextPage } from "next";
import Image from "next/image";

const Headercbs: NextPage = () => {
    return (
        <div id="header_" className="h-screen bg-cover bg-center relative" style={{backgroundImage: "url('/image/portada.webp')"}}>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image src="/image/logo.png" alt="Logo" width={300} height={200} />
            </div>
        </div>
    )
}

export default Headercbs;
