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
              <div
                key={webDevJob._id}
                className="border rounded-md shadow-md p-4 bg-white hover:shadow-lg transition-shadow duration-300 ease-in-out"
              >
                <div className="flex flex-col md:flex-row justify-between h-full">
                  {/* Top Section: Title and Description */}
                  <div>
                    <h2 className="font-bold md:text-lg text-[#31795A]">
                      {webDevJob.jobTitle}
                    </h2>
                    <p className="text-sm text-gray-600 mt-1">
                      {webDevJob.description.length > 100
                        ? `${webDevJob.description.slice(0, 100)}...`
                        : webDevJob.description}
                    </p>
                  </div>

                  {/* Middle Section: Deadline and Price Range */}
                  <div className="flex flex-col items-start mt-4">
                    <h4 className="text-xs md:text-sm text-gray-500">
                      Deadline:{" "}
                      {new Date(webDevJob.deadline).toLocaleDateString()}
                    </h4>
                    <p className="text-sm font-medium mt-1">
                      <span className="text-green-700">Price range:</span> $
                      {webDevJob.minimumPrice} - ${webDevJob.maximumPrice}
                    </p>
                  </div>

                  {/* Right Section: Bid Now Button */}
                  <div className="flex justify-end mt-4">
                    <Link to={`/jobDetails/${webDevJob._id}`}>
                      <button className="btn bg-[#31795A] rounded-full btn-sm text-base text-white flex items-center gap-2">
                        <FcServices /> Bid Now
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
                className="border rounded-md shadow-md p-4 bg-white hover:shadow-lg transition-shadow duration-300 ease-in-out"
              >
                <div className="flex flex-col md:flex-row justify-between h-full">
                  {/* Top Section: Title and Description */}
                  <div>
                    <h2 className="font-bold md:text-lg text-[#31795A]">
                      {digitalMarketingJob.jobTitle}
                    </h2>
                    <p className="text-sm text-gray-600 mt-1">
                      {digitalMarketingJob.description.length > 100
                        ? `${digitalMarketingJob.description.slice(0, 100)}...`
                        : digitalMarketingJob.description}
                    </p>
                  </div>

                  {/* Middle Section: Deadline and Price Range */}
                  <div className="flex flex-col items-start mt-4">
                    <h4 className="text-xs md:text-sm text-gray-500">
                      Deadline:{" "}
                      {new Date(
                        digitalMarketingJob.deadline
                      ).toLocaleDateString()}
                    </h4>
                    <p className="text-sm font-medium mt-1">
                      <span className="text-green-700">Price range:</span> $
                      {digitalMarketingJob.minimumPrice} - $
                      {digitalMarketingJob.maximumPrice}
                    </p>
                  </div>

                  {/* Right Section: Bid Now Button */}
                  <div className="flex justify-end mt-4">
                    <Link to={`/jobDetails/${digitalMarketingJob._id}`}>
                      <button className="btn bg-[#31795A] rounded-full btn-sm text-base text-white flex items-center gap-2">
                        <FcServices /> Bid Now
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
              <div
                key={graphicsDesignJob._id}
                className="border rounded-md shadow-md p-4 bg-white hover:shadow-lg transition-shadow duration-300 ease-in-out"
              >
                <div className="flex flex-col md:flex-row justify-between h-full">
                  {/* Top Section: Title and Description */}
                  <div>
                    <h2 className="font-bold md:text-lg text-[#31795A]">
                      {graphicsDesignJob.jobTitle}
                    </h2>
                    <p className="text-sm text-gray-600 mt-1">
                      {graphicsDesignJob.description.length > 100
                        ? `${graphicsDesignJob.description.slice(0, 100)}...`
                        : graphicsDesignJob.description}
                    </p>
                  </div>

                  {/* Middle Section: Deadline and Price Range */}
                  <div className="flex flex-col items-start mt-4">
                    <h4 className="text-xs md:text-sm text-gray-500">
                      Deadline:{" "}
                      {new Date(
                        graphicsDesignJob.deadline
                      ).toLocaleDateString()}
                    </h4>
                    <p className="text-sm font-medium mt-1">
                      <span className="text-green-700">Price range:</span> $
                      {graphicsDesignJob.minimumPrice} - $
                      {graphicsDesignJob.maximumPrice}
                    </p>
                  </div>

                  {/* Right Section: Bid Now Button */}
                  <div className="flex justify-end mt-4">
                    <Link to={`/jobDetails/${graphicsDesignJob._id}`}>
                      <button className="btn bg-[#31795A] rounded-full btn-sm text-base text-white flex items-center gap-2">
                        <FcServices /> Bid Now
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
