const About = () => {
  return (
    <section className="flex flex-col lg:flex-row items-start justify-start gap-12 px-4 xl:px-0  xl:container mx-auto  min-h-screen mt-8">
      <div className="content  basis-[43%]">
        <p className="text-xl italic font-[400]">About Ink Studio</p>
        <h1 className="my-4 leading-[1.2] tracking-wider text-xl sm:text-2xl md:text-4xl xl:text-[2.5rem] 2xl:text-5xl font-[500]">
          WE ARE THE COOLEST TATTOO STUDIO
        </h1>
        <p className="text-[1.2rem] tracking-wide leading-tight">
          We have opened in Singapore and Myanmar. We have many professional
          artists and we make a good working, good quality and good service.If
          you trust us ,we are ready to create on your skin for the best.
        </p>

        <div className="mt-6">
          <div className="flex items-start justify-start gap-4">
            <div className="">
              <img src="/images/about-logo1.png" className="h-14 " alt="" />
            </div>
            <div className="">
              <h3 className="text-md tracking-widest font-[500]">
                IMPECCABLE TATTOO QUALITY
              </h3>
              <p className="text-lg tracking-normal lead leading-tight pt-2">
                Our work speaks volumes with precision, passion, and
                uncompromising quality
              </p>
            </div>
          </div>

          <div className="flex items-start justify-start gap-4 my-6">
            <div className="">
              <img src="/images/about-logo2.png" className="h-14 " alt="" />
            </div>
            <div className="">
              <h3 className="text-md tracking-widest font-[500]">
                USING THE BEST & HYGIENIC EQUIPMENT
              </h3>
              <p className="text-lg tracking-normal lead leading-tight pt-2">
                We prioritize your safety and satisfaction with the best tools
                in the industry.
              </p>
            </div>
          </div>

          <div className="flex items-start justify-start gap-4">
            <div className="">
              <img src="/images/about-logo3.png" className="h-14 " alt="" />
            </div>
            <div className="">
              <h3 className="text-md tracking-widest font-[500]">
                EXPERIENCED ARTIST
              </h3>
              <p className="text-lg tracking-normal lead leading-tight pt-2">
                Our experienced artists bring your ideas to life with precision
                and passion
              </p>
            </div>
          </div>
        </div>
        <div className="grid place-items-center md:block">

        <button className="mt-12 nBtn ">More About Us</button>
        </div>
      </div>
      <div className="photo flex-1 self-center relative flex flex-col md:flex-row">
        <div className="relative z-10">
          <img
            src="/images/about-image.png"
            className=" md:w-5/6 sm:h-screen object-cover  w-screen  sm:object-contain"
            alt=""
          />
        </div>

        <div className="relative mx-auto md:absolute z-20 border border-white bg-black px-8 py-6 w-[95%] ssm:w-2/3 md:w-4/5 xl:w-1/2 top-20 right-0">
          <h6 className="text-center">Working Hours</h6>

          <div className="flex flex-col gap-5 mt-8">
            <div className="flex items-center justify-between border-b border-dashed pb-2">
              <h6>Monday</h6>
              <p>09:00 - 20:00</p>
            </div>
            <div className="flex items-center justify-between border-b border-dashed pb-2">
              <h6>Monday</h6>
              <p>09:00 - 20:00</p>
            </div>
            <div className="flex items-center justify-between border-b border-dashed pb-2">
              <h6>Monday</h6>
              <p>09:00 - 20:00</p>
            </div>
            <div className="flex items-center justify-between border-b border-dashed pb-2">
              <h6>Monday</h6>
              <p>09:00 - 20:00</p>
            </div>
            <div className="flex items-center justify-between border-b border-dashed pb-2">
              <h6>Monday</h6>
              <p>09:00 - 20:00</p>
            </div>
            <div className="flex items-center justify-between border-b border-dashed pb-2">
              <h6>Monday</h6>
              <p>09:00 - 20:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
