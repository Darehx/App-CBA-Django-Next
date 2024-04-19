import { NextPage } from "next";
import Image from "next/image";
import { TextAbout } from "./aboutus_tx";

const AboutUsPage: NextPage = () => {
    return (
        <div className="container mx-auto flex flex-col md:flex-row items-center p-10">
            {/* Contenido para dispositivos móviles */}
            <div className="md:hidden">
                <div className="overflow-hidden">
                    <Image className="w-full" src="/image/aboutUs.webp" alt="Imagen" layout="responsive" width={300} height={200} />
                </div>
                <p className="mt-4"> <TextAbout/> </p>
            </div>

            {/* Contenido para pantallas grandes */}
            <div className="hidden md:flex md:w-1/2 md:pr-8">
                <div className="md:w-full">
                   <TextAbout/>
                </div>
            </div>

            <div className="hidden md:block md:w-1/2">
                <Image src="/image/aboutUs.webp" alt="Imagen" layout="responsive" width={600} height={400} />
            </div>
        </div>
    )
}

export default AboutUsPage;
