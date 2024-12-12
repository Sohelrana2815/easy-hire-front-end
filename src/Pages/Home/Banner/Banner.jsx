import bannerImg1 from "../../../assets/Banner/BannerImg.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import bannerLogo1 from "../../../assets/BannerLogo/logo1.png";
import bannerLogo2 from "../../../assets/BannerLogo/logo2.png";
import bannerLogo3 from "../../../assets/BannerLogo/logo3.png";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4">
      <Carousel>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 ">
          {/* Left Content */}
          <div className="text-center md:text-start flex-1 space-y-4">
            <p className="text-[#5EA17E] md:text-lg font-medium">
              #1 Online Marketplace
            </p>
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold font-EbGaramond text-[#31795A]">
              Find the talents for any job.
            </h2>
            <p className="text-gray-700 md:text-xl mt-2">
              Unlock your potential with quality jobs & earn from world-leading
              brands & co.
            </p>
            <Link to="/addJobs">
              <button className="btn text-sm bg-[#00BF58] mt-4 text-white rounded-full md:text-lg">
                Post a Job
              </button>
            </Link>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-2 mt-4 justify-center md:justify-start">
              <p className="text-sm md:text-lg">Trusted by:</p>
              <figure className="w-20 md:w-24">
                <img src={bannerLogo1} alt="Logo 1" />
              </figure>
              <figure className="w-6 md:w-8">
                <img src={bannerLogo2} alt="Logo 2" />
              </figure>
              <figure className="w-20 md:w-24">
                <img src={bannerLogo3} alt="Logo 3" />
              </figure>
            </div>
          </div>
          {/* Right Image */}
          <figure className="flex-1 w-full max-w-md md:max-w-none">
            <img src={bannerImg1} alt="Banner" className="w-full h-auto" />
          </figure>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
