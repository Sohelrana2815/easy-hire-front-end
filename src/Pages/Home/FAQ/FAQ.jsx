import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const data = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "What is Tailwind CSS?",
      answer:
        "Tailwind CSS is a utility-first CSS framework for rapid UI development.",
    },
    {
      question: "What is DaisyUI?",
      answer:
        "DaisyUI is a Tailwind CSS component library for creating beautiful designs.",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl mx-auto space-y-4 my-20">
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
              <div className="p-4 bg-[#31795A] text-white">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default FAQ;
