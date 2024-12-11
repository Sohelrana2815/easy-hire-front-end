import bannerImg1 from "../../../assets/Banner/BannerImg.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import bannerLogo1 from "../../../assets/BannerLogo/logo1.png";
import bannerLogo2 from "../../../assets/BannerLogo/logo2.png";
import bannerLogo3 from "../../../assets/BannerLogo/logo3.png";
const Banner = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Carousel>
        <div className=" flex justify-between items-center">
          <div className="text-start">
            <p>#1 Online Marketplace</p>
            <h2>Find the talents for any job.</h2>
            <p>
              Unlock your potential with quality job & earn from world leading
              brands & co.
            </p>
            <button className="btn btn-success">Post a Job</button>
            <div className="flex items-center gap-x-1">
              <p>Trusted by:</p>
              <figure className="w-24">
                <img src={bannerLogo1} alt="" />
              </figure>
              <figure className="w-6">
                <img src={bannerLogo2} alt="" />
              </figure>
              <figure className="w-24">
                <img src={bannerLogo3} alt="" />
              </figure>
            </div>
          </div>
          <figure className="w-1/2">
            <img src={bannerImg1} />
          </figure>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
