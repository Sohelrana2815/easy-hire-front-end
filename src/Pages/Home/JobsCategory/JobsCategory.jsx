import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useJobs from "../../../Hooks/useJobs";
import { FcServices } from "react-icons/fc";
import { Link } from "react-router-dom";
const JobsCategory = () => {
  const { jobs } = useJobs();

  // Filter jobs by category
  const webDevJobs = jobs.filter((job) => job.category === "web-development");
  const digitalMarketingJobs = jobs.filter(
    (job) => job.category === "digital-marketing"
  );
  const graphicsDesignJobs = jobs.filter(
    (job) => job.category === "graphics-design"
  );

  return (
    <div className="max-w-screen-2xl mx-auto mt-20">
      <Tabs>
        <TabList>
          <Tab>Web Development</Tab>
          <Tab>Digital Marketing</Tab>
          <Tab>Graphics Design</Tab>
        </TabList>
        {/* Tab for web dev */}
        <TabPanel>
          <div className="grid gap-4 mt-6">
            {webDevJobs.map((webDevJob) => (
              <div key={webDevJob._id} className="border min-h-28 p-6">
                <div className="flex flex-col md:flex-row items-stretch justify-between gap-4">
                  {/* Title and description */}
                  <div className="flex-1">
                    <h2 className="font-bold md:text-xl">
                      {webDevJob.jobTitle}
                    </h2>
                    <p className="md:text-base">{webDevJob.description}</p>
                  </div>
                  {/* Deadline and price range */}
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <h4 className="text-sm md:text-base">
                      Deadline: {webDevJob.deadline}
                    </h4>
                    <p className="font-medium">
                      <span className="text-green-700">Price range: </span>$
                      {webDevJob.minimumPrice}-{webDevJob.maximumPrice}
                    </p>
                  </div>
                  {/* Bid now button */}
                  <div className="flex items-center">
                    <Link to={`/jobDetails/${webDevJob._id}`}>
                      <button className="btn bg-[#31795A] rounded-full btn-sm md:btn-md text-white">
                        <FcServices /> Bid now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        {/* Tab for digital marketing */}
        <TabPanel>
          <div className="grid gap-4 mt-6">
            {digitalMarketingJobs.map((digitalMarketingJob) => (
              <div
                key={digitalMarketingJob._id}
                className="border min-h-28 p-6"
              >
                <div className="flex flex-col md:flex-row items-stretch justify-between gap-4">
                  {/* Title and description */}
                  <div className="flex-1">
                    <h2 className="font-bold md:text-xl">
                      {digitalMarketingJob.jobTitle}
                    </h2>
                    <p className="md:text-base">
                      {digitalMarketingJob.description}
                    </p>
                  </div>
                  {/* Deadline and price range */}
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <h4 className="text-sm md:text-base">
                      Deadline: {digitalMarketingJob.deadline}
                    </h4>
                    <p className="font-medium">
                      <span className="text-green-700">Price range: </span>$
                      {digitalMarketingJob.minimumPrice}-
                      {digitalMarketingJob.maximumPrice}
                    </p>
                  </div>
                  {/* Bid now button */}
                  <div className="flex items-center">
                    <Link to={`/jobDetails/${digitalMarketingJob._id}`}>
                      <button className="btn bg-[#31795A] rounded-full btn-sm text-white">
                        <FcServices /> Bid now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        {/* Tab for graphics design */}
        <TabPanel>
          <div className="grid gap-4 mt-6">
            {graphicsDesignJobs.map((graphicsDesignJob) => (
              <div key={graphicsDesignJob._id} className="border min-h-28 p-6">
                <div className="flex flex-col md:flex-row items-stretch justify-between gap-4">
                  {/* Title and description */}
                  <div className="flex-1">
                    <h2 className="font-bold md:text-xl">
                      {graphicsDesignJob.jobTitle}
                    </h2>
                    <p className="md:text-base">
                      {graphicsDesignJob.description}
                    </p>
                  </div>
                  {/* Deadline and price range */}
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <h4 className="text-sm md:text-base">
                      Deadline: {graphicsDesignJob.deadline}
                    </h4>
                    <p className="font-medium">
                      <span className="text-green-700">Price range: </span>$
                      {graphicsDesignJob.minimumPrice}-
                      {graphicsDesignJob.maximumPrice}
                    </p>
                  </div>
                  {/* Bid now button */}
                  <div className="flex items-center">
                    <Link to={`/jobDetails/${graphicsDesignJob._id}`}>
                      <button className="btn bg-[#31795A] rounded-full btn-sm text-white">
                        <FcServices /> Bid now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default JobsCategory;
