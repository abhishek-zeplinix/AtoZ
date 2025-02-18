import Image from "next/image";

export default function StepsSection() {
  const steps = [
    {
      step: "Step 1: Discovery",
      title: (
        <>
          Unearthing <i className="font-bold">the Core</i> of <br /> Your Brand.
        </>
      ),
      description: (
        <>
          Our journey begins with <i>understanding.</i> <br />
          We dive deep into your brand is essence, goals, audience, and
          industry. Through collaboration and research, we uncover insights that
          lay the foundation for everything we create.
        </>
      ),
      image: "/OurProcessPage/images/first.png",
      bgColor: "#FF9500",
    },
    {
      step: "Step 2: Ideation/Strategy/Research",
      title: (
        <>
          From <i className="font-bold">Insights</i> to Big <br />
          Ideas
        </>
      ),
      description: (
        <>
          With a clear understanding of your brand, we explore bold ideas,
          strategic directions, and market trends. This stage is about{" "}
          <i>evaluation and planning</i>, ensuring every creative decision
          aligns with your vision and audience needs.
        </>
      ),
      image: "/OurProcessPage/images/second.png",
      bgColor: "#AF52DE",
    },
    {
      step: "Step 3: Design",
      title: (
        <>
          Crafting <i className="font-bold">Visual </i>Stories <br /> That
          Resonate
        </>
      ),
      description: (
        <>
          Here is where creativity takes form. <br />
          Our designers bring your brand to life through thoughtful visuals,
          compelling graphics, and user-friendly interfaces. Each design is a{" "}
          <i>masterpiece</i> tailored to communicate your story effectively.
        </>
      ),
      image: "/OurProcessPage/images/third.png",
      bgColor: "#FF2D55",
    },
    {
      step: "Step 4: Delivery",
      title: (
        <>
          Turning<i className="font-bold"> Vision</i> Into <br /> Reality
        </>
      ),
      description: (
        <>
          The final step is <i>execution.</i> <br />
          We ensure every element is perfected and seamlessly integrated,
          whether it is launching a product, website, or campaign. <br />
          Our job doesn’t end there—we provide ongoing support to ensure your
          brand thrives.
        </>
      ),
      image: "/OurProcessPage/images/fourth.png",
      bgColor: "#007AFF",
    },
  ];

  return (
    <>
      <div className="w-full h-screen overflow-hidden relative mt-28">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/OurProcessPage/video/ourprocess.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="mt-10 mx-24">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center md:items-center ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
          >
            <div className="md:w-1/2 p-6 flex justify-center">
              <Image
                src={step.image}
                alt=""
                className=" "
                height={500}
                width={500}
              />
            </div>
            <div className={`md:w-1/2 p-6  rounded-lg space-y-6`}>
              <h4
                className={`text-lg font-normal text-white inline-block p-1 px-2 rounded`}
                style={{ backgroundColor: step.bgColor }}
              >
                {step.step}
              </h4>
              <h2 className="text-3xl font-normal text-gray-900 mt-2">
                {step.title}
              </h2>
              <p className="text-gray-600 mt-4">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
