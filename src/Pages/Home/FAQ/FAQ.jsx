import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const data = [
    {
      question: "1. How do I post a job?",
      answer:
        "To post a job, simply create an account, navigate to the 'Post a Job'section, fill in the job details, and publish it. Your job listing will be visible to potential bidders immediately.",
    },
    {
      question: "2. How can I bid on a job?",
      answer:
        "After signing up, browse available jobs and click on the ones you’re interested in. Submit your bid by entering your proposal and pricing details directly on the job page.",
    },
    {
      question: "3. Is there a fee for using this platform?",
      answer:
        "Creating an account is free. However, there may be a small commission fee on successfully completed projects. Please check our pricing page for more details.",
    },
    {
      question: "4. How do I communicate with employers or freelancers?",
      answer:
        "Our platform includes a built-in messaging system that allows you to chat securely with employers or freelancers once a job has been posted or a bid has been accepted.",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl mx-auto space-y-4 my-20 p-4 md:p-0">
        <h2 className="text-[#31795A] text-2xl md:text-3xl lg:text-5xl font-medium font-EbGaramond py-4">
          Frequently Asks Questions
        </h2>
        {data.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-sm"
          >
            {/* Question Section */}
            <div
              className="flex justify-between items-center p-4 bg-gray-100 cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="font-semibold text-lg">{item.question}</h3>
              <span className="text-2xl">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            {/* Answer Section */}
            {activeIndex === index && (
              <div className="p-4">
                <p className= "text-balance md:text-lg">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default FAQ;
