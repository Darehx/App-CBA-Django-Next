import AboutUsPage from "@/components/UI/aboutUs";
import TarjetasList from "@/components/UI/cards";
import Footer from "@/components/UI/footer";
import Gallery from "@/components/UI/gallery";
import Headercbs from "@/components/UI/header";
import WhatsAppButton from "@/components/UI/whatsapp";
import BannerLink from "@/components/UI/verificarlink";
import YoutubeChannel from "@/components/UI/youtube";

export default function Home() {
  return (
    <div>
      <Headercbs /> {/* Header con el logo */}
      <AboutUsPage />
      <TarjetasList />
      <BannerLink />
      <Gallery />
      <YoutubeChannel />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
