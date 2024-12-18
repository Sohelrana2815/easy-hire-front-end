import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import FAQ from "../FAQ/FAQ";
import JobsCategory from "../JobsCategory/JobsCategory";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Easy Hire</title>
      </Helmet>
      <Banner />
      <JobsCategory />
      <Services />
      <FAQ />
    </div>
  );
};

export default Home;
