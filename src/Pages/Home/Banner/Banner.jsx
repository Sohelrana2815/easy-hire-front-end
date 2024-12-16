import bannerImg1 from "../../../assets/Banner/BannerImg.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import bannerLogo1 from "../../../assets/BannerLogo/logo1.png";
import bannerLogo2 from "../../../assets/BannerLogo/logo2.png";
import bannerLogo3 from "../../../assets/BannerLogo/logo3.png";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
const Banner = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4">
      <Carousel showThumbs={false}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 ">
          {/* Left Content */}
          <div className="text-center md:text-start flex-1 space-y-4 xl:space-y-8 md:space-y-6 ">
            <p className="text-[#5EA17E] md:text-lg font-medium">
              #1 Online Marketplace
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold font-EbGaramond text-[#005025]">
              <TypeAnimation
                sequence={[
                  " Find the talents for any job.",
                  2000,
                  "Discover top freelancers",
                  2000,
                  "Hire the best professional",
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ display: "inline-block" }}
              />
            </h2>
            <p className="text-gray-700 w-full xl:w-3/4 text-lg md:text-xl xl:text-2xl  mt-2">
              Unlock your potential with quality jobs & earn from world-leading
              brands & co.
            </p>
            <Link to="/addJobs">
              <button className="btn btn-sm text-sm xl:btn-md  bg-[#00BF58] mt-4 md:mt-6 xl:mt-10 text-white rounded-full lg:text-lg">
                Post a Job
              </button>
            </Link>
            {/* logo's */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-2 mt-4 justify-center md:justify-start xl:mt-10">
              <p className="text-sm md:text-lg xl:text-2xl font-EbGaramond font-medium">Trusted by:</p>
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
